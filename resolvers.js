module.exports = {
  Query: {
    async getPosts (_, args, { Post }) {
      return Post.find({}).sort({ createdDate: 'desc' }).populate({
        path: 'createdBy', // property in model
        model: 'User' // ref in model
      })
    }
  },
  Mutation: {
    async addPost (_, { title, imageUrl, categories, description, creatorId }, { Post }) {
      return new Post({ title, imageUrl, categories, description, createdBy: creatorId }).save()
    },
    async signupUser (_, { username, email, password }, { User }) {
      if (await User.findOne({ username })) {
        throw new Error('User already exists.')
      }

      return new User({ username, email, password }).save()
    }
  }
}
