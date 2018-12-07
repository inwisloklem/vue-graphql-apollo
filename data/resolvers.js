const data = require('./todos')

const resolvers = {
  Query: {
    allTodos () {
      return data
    }
  },
  Todos: {
    todos () {
      return data.todos
    },
    count () {
      return data.todos.length
    }
  },
  Mutation: {
    addTodo (_, args) {
      const { todos } = data
      todos.push({
        title: args.title,
        completed: args.completed
      })
      return todos[todos.length - 1]
    }
  }
}

module.exports = resolvers
