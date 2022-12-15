import logo from "./logo.svg";
import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import {
  About,
  Cards,
  Donation,
  Footer,
  Header,
  Login,
  Home,
  Nav,
  Profile,
  Signup,
  DonateHere,
} from "./components";
import { Routes, Route, Navigate, withRouter } from "react-router-dom";
const httpLink = createHttpLink({
  uri: "/graphql",
});
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/donation" element={<Donation />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/donatehere" element={<DonateHere />}></Route>
        </Routes>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
