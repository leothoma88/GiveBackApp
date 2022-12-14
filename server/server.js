
const express = require("express");
const path = require("path");
const db = require("./config/connection");
const { ApolloServer } = require("apollo-server-express");
const { authMiddleware } = require("./utils/auth");
const orgRoutes = require('./routes/OrgRoutes');
const { typeDefs, resolvers } = require("./schemas");
const app = express();
const PORT = process.env.PORT || 3001;
const { CharityApi } = require('./api/orgApi');
// import { CharityApi } from './api/orgApi';


const server = new ApolloServer({
  typeDefs,
  resolvers,
  // dataSources: () => ({
  //   CharityApi: new CharityApi()
  // }),
  context: authMiddleware,
});
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

// const { PORT }  = await startStandaloneServer(server, {
//   context: async () => {
//     const { cache } = server;
//     return {
//       dataSources: {
//         charityAPI: new CharityAPI({ cache })
//       },
//     };
//   }
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

//add routes
app.use("/orgs", orgRoutes);

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });


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
