"use server";
import { gql, request } from "graphql-request";

const { NEXT_PUBLIC_GRAPHQL, NEXT_PUBLIC_KEY } = process.env;

const CATALOG = gql`
  query category($slug: String!, $key: UUID!) {
    catalog(slug: $slug, key: $key) {
      value
      rubric {
        value
        slug
        category {
          is_active
          value
          slug
        }
      }
    }
  }
`;

export async function getCatalog({ params }) {
  const variables = {
    key: NEXT_PUBLIC_KEY,
    slug: params.slug,
  };
  try {
    return await request(NEXT_PUBLIC_GRAPHQL, CATALOG, variables);
  } catch (error) {
    console.error("Error occurred while fetching category:", error);
    throw error;
  }
}
