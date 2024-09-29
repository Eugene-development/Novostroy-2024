"use server";
import { gql, request } from "graphql-request";

const { NEXT_PUBLIC_GRAPHQL, NEXT_PUBLIC_KEY } = process.env;

const FULLCATALOG = gql`
  query FullCatalog {
    fullcatalog {
      value
      rubric {
        value
        category {
          value
          slug
        }
      }
    }
  }
  `


// --- //
export async function getFullCatalog() {
  const variables = {
    key: NEXT_PUBLIC_KEY
  };
  try {
    return await request(NEXT_PUBLIC_GRAPHQL, FULLCATALOG, variables);
  } catch (error) {
    console.error("Error occurred while fetching catalog:", error);
    throw error;
  }
}