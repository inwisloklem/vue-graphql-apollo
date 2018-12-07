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
    addTodo (_, { title, completed }) {
      const { todos } = data
      todos.push({ title, completed })

      return todos[todos.length - 1]
    }
  }
}

module.exports = resolvers
