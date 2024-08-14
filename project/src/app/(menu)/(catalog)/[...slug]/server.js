"use server";
import { gql, request } from "graphql-request";

const { NEXT_PUBLIC_GRAPHQL, NEXT_PUBLIC_KEY } = process.env;

const CATALOG = gql`
  query category($slug: String!, $key: UUID!) {
    catalog(slug: $slug, key: $key) {
      value
      slug
      rubric {
        value
        slug
        category {
          is_active
          value
          slug
        }
      }
      text {
            value
          }
    }
  }
`;


// --- //
export async function getCatalog(slug) {
  const variables = {
    key: NEXT_PUBLIC_KEY,
    slug,
  };
  try {
    return await request(NEXT_PUBLIC_GRAPHQL, CATALOG, variables);
  } catch (error) {
    console.error("Error occurred while fetching category:", error);
    throw error;
  }
}


// --- //
export async function getRubric(slug) {
  const variables = {
    key: NEXT_PUBLIC_KEY,
    slug,
  };
  try {
    return console.log(variables.slug);
    // return await request(NEXT_PUBLIC_GRAPHQL, CATALOG, variables);
  } catch (error) {
    console.error("Error occurred while fetching category:", error);
    throw error;
  }
}


// --- //
export async function getCategory(slug) {
  const variables = {
    key: NEXT_PUBLIC_KEY,
    slug,
  };
  try {
    return console.log(variables.slug);
    // return await request(NEXT_PUBLIC_GRAPHQL, CATALOG, variables);
  } catch (error) {
    console.error("Error occurred while fetching category:", error);
    throw error;
  }
}
