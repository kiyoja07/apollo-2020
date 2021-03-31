import AolloClient from "apollo-boost";

const client = new AolloClient({
  uri: "http://localhost:4000/",
});

export default client;
