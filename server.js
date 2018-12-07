const { ApolloServer } = require('apollo-server')

const typeDefs = require('./schema')
const resolvers = require('./data/resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen()
  .then(({ url }) => console.log(`Server listening on url: ${url}.`))
