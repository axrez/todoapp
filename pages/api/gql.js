const { ApolloServer, gql } = require('apollo-server-micro')

const typeDefs = gql`
  type Book {
    title: String
    author: Author
  }

  type Author {
    name: String
    books: [Book]
  }

  type Query {
    getBooks: [Book]
    getAuthors: [Author]
  }
`

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
]

const authors = [
  {
    name: 'J.K. Rowling',
  },
  {
    name: 'Michael Crichton',
  },
]

const resolvers = {
  Query: {
    getBooks: () => books,
    getAuthors: () => authors,
  },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/gql' })
