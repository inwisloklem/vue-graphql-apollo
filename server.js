const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')
require('dotenv').config({ path: 'variables.env' })
const fs = require('fs')
const path = require('path')

const User = require('./models/User')
const Post = require('./models/Post')

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log('DB connected.'))
  .catch(err => console.error(err))

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, 'typeDefs.gql'), 'utf-8'),
  context: {
    User,
    Post
  }
})

server.listen()
  .then(({ url }) => console.log(`Server listening on url: ${url}.`))
