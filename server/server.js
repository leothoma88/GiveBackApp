const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");
const creds = require("./config/mailerConfig");
const db = require("./config/connection");
const { ApolloServer } = require("apollo-server-express");
const { authMiddleware } = require("./utils/auth");
const env = require("dotenv").config({ path: "./.env" });


router.post("/send", async (req, res) => {
  console.log("TRY");
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });
    const options = {
      from: `Give Back App`,
      to: creds.USER,
      subject: "Hi, we've received your inquiry!",
      text: `
  Hello ${creds.USER},
  We've received your inquiry for your non-profit to be apart of the Give Back App! 
  We'll share more information with you shortly!
  `,
    };
    transporter.sendMail(options, function (err, info) {
      if (err) {
        console.log(err);
        return;
      }
      console.log("sent: " + info.response);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

const { typeDefs, resolvers } = require("./schemas");
const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/", router);

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}


const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2022-08-01"
  });
  
  app.get("/config", (req, res) => {
    console.log("////////", process.env.STRIPE_PUBLISHABLE_KEY)
    res.send({
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    });
  });

  app.post("/create-payment-intent", async(req, res) => {
    console.log("reeeeq",req.body)
    try {
       const paymentIntent = await stripe.paymentIntents.create ({
      currency: 'USD',
      amount: req.body?.amount || 0,
      automatic_payment_methods: {
        enabled: true,
      },
    });
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    })
  }
  });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`🌍 Now listening on localhost:${PORT}`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startApolloServer(typeDefs, resolvers);
