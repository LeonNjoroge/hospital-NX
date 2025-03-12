import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

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

  type Mutation {
  deletePatient(id: ID!): Patient
}

type Mutation {
  updatePatient(id: ID!, name: String, age: Int, email: String, datetime: String): Patient
}

`;

const resolvers = {
  Query: {
    patients: async () => {
      try {
        const response = await axios.get(`${BASE_URL}/patients`);
        return response.data;
      } catch (error) {
        console.error("Error fetching patients:", error);
        return [];
      }
    },
  },
  Mutation: {
    addPatient: async (_: any, { name, age, email, datetime }: any) => {
      try {
        const newPatient = { name, age, email, datetime };

        // Post to JSON Server
        const response = await axios.post(`${BASE_URL}/patients`, newPatient);

        return response.data;
      } catch (error) {
        console.error("Error adding patient:", error);
        throw new Error("Failed to add patient.");
      }
    },
    deletePatient: async (_: any, { id }: any) => {
      try {
        const response = await axios.delete(`${BASE_URL}/patients/${id}`);
        return response.data;
      } catch (error) {
        console.error("Error deleting patient:", error);
        throw new Error("Failed to delete patient.");
      }
    },

    updatePatient: async (_: any, { id, name, age, email, datetime }: any) => {
      try {
        const response = await axios.patch(`${BASE_URL}/patients/${id}`, {
          name,
          age,
          email,
          datetime,
        });
  
        return response.data;
      } catch (error) {
        console.error("Error updating patient:", error);
        throw new Error("Failed to update patient.");
      }
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
