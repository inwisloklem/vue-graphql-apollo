const { gql } = require('apollo-server')

const schema = gql`
  schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    allTodos: Todos
  }

  type Todos {
    todos: [Todo]
    count: Int
  }

  type Todo {
      title: String
      completed: Boolean
  }

  type Mutation {
    addTodo(title: String, completed: Boolean): Todo
  }
`

module.exports = schema
