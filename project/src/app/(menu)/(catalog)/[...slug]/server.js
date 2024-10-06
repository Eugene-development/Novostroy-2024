"use server";
import { gql, request } from "graphql-request";

const { NEXT_PUBLIC_GRAPHQL, NEXT_PUBLIC_KEY } = process.env;

const FULLCATALOG = gql`
    query FullCatalog {
      fullcatalog {
        value
        rubric {
          value
          slug
          parentable {
            ... on Catalog {
              
              slug
            }
          }
          category {
            value
            slug
          }
        }
      }
    }
`;

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
        image {
          hash
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
        id
        value
        slug
        unit {
          value
        }
        price {
          value
        }
        image {
          hash
        }
        tag {
          value
        }
        parentable {
          ... on Category {
            value
            slug
            parentable {
              ... on Rubric {
                value
                slug
                parentable {
                  ... on Catalog {
                    value
                    slug
                  }
                }
              }
            }
          }
        }
      }
      parentable {
        ... on Rubric {
          value

          parentable {
            ... on Catalog {
              value
              slug
            }
          }
        }
      }
    }
  }
`;

const PRODUCT = gql`
  query product($slug: String!, $key: UUID!) {
    product(slug: $slug, key: $key) {
      id
      value
      slug
      image {
        hash
      }
      tag {
        value
      }
      parentable {
        ... on Category {
          value
          slug
          parentable {
            ... on Rubric {
              value
              slug
              parentable {
                ... on Catalog {
                  value
                  slug
                }
              }
            }
          }
        }
      }
    }
  }
`;


// --- //
export async function getFullCatalog() {
  const variables = {
    key: NEXT_PUBLIC_KEY,
  };
  try {
    return await request(NEXT_PUBLIC_GRAPHQL, FULLCATALOG, variables);
  } catch (error) {
    console.error("Error occurred while fetching catalog:", error);
    throw error;
  }
}

// --- //
export async function getCatalog(slug) {
  const variables = {
    key: NEXT_PUBLIC_KEY,
    slug,
  };
  try {
    return await request(NEXT_PUBLIC_GRAPHQL, CATALOG, variables);
  } catch (error) {
    console.error("Error occurred while fetching catalog:", error);
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

// --- //
export async function getProduct(slug) {
  const variables = {
    key: NEXT_PUBLIC_KEY,
    slug,
  };
  try {
    return await request(NEXT_PUBLIC_GRAPHQL, PRODUCT, variables);
  } catch (error) {
    console.error("Error occurred while fetching product:", error);
    throw error;
  }
}
