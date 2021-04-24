const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require('./resolvers');

const LaunchAPI = require("./launchData");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    launchAPI: new LaunchAPI(),
  }),
});

server.listen().then(() => {
  console.log(`
        Server is running, listening on port 4000
    `);
});
