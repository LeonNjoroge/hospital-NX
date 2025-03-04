import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";


// Define GraphQL schema
const typeDefs = `#graphql
  type Patient {
    id: ID!
    name: String!
    age: Int!
    email: String!
    datetime: String!
  }

  type Query {
    patients: [Patient]
  }

  type Mutation {
    addPatient(name: String!, age: Int!, email: String!, datetime: String!): Patient
  }
`;

const patients = [];

// Resolvers
const resolvers = {
  Query: {
    patients: () => patients,
  },
  Mutation: {
    addPatient: (_: any, { name, age, email, datetime }: any) => {
      const newPatient = { id: String(patients.length + 1), name, age, email, datetime };
      patients.push(newPatient);
      return newPatient;
    },
  },
};

// Create Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
  console.log(`🚀 GraphQL Server ready at ${url}`);
}

startServer();
