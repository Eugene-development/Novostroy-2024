"use server";
import { gql, request } from "graphql-request";

const { NEXT_PUBLIC_GRAPHQL, NEXT_PUBLIC_KEY } = process.env;

const CATALOG = gql`
  query catalog($slug: String!, $key: UUID!) {
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
          product_count
        }
      }
      text {
        value
      }
    }
  }
`;

const CATEGORY = gql`
  query category($slug: String!, $key: UUID!) {
    category(slug: $slug, key: $key) {
      value
      metaTitle {
        value
      }
      metaDescription {
        value
      }
      product {
        value
        unit {
          value
        }
        price {
          value
        }
        image {
          hash
        }
      }
      parentable {
        ... on Rubric {
          value
        }
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
    // return console.log(variables.slug);
    return await request(NEXT_PUBLIC_GRAPHQL, CATEGORY, variables);
  } catch (error) {
    console.error("Error occurred while fetching category:", error);
    throw error;
  }
}
