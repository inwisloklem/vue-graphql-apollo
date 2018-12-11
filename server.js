const dotenv = require('dotenv')
const fs = require('fs')
const mongoose = require('mongoose')
const path = require('path')
const resolvers = require('./resolvers')
const Post = require('./models/Post')
const User = require('./models/User')
const { ApolloServer } = require('apollo-server')

dotenv.config({ path: 'variables.env' })
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log('DB connected.'))
  .catch(err => console.error(err))

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, 'typeDefs.gql'), 'utf-8'),
  resolvers,
  context: { User, Post }
})

server.listen()
  .then(({ url }) => console.log(`Server listening on url: ${url}.`))
