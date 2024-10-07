import { revalidatePath } from "next/cache";
import { gql, request } from "graphql-request";

const { NEXT_PUBLIC_GRAPHQL, NEXT_PUBLIC_KEY } = process.env;

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

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  if (!slug || !NEXT_PUBLIC_KEY || !NEXT_PUBLIC_GRAPHQL) {
    return new Response("Missing required parameters", { status: 400 });
  }

  const variables = {
    key: NEXT_PUBLIC_KEY,
    slug,
  };

  try {
      revalidatePath(slug);
      const data = await request(NEXT_PUBLIC_GRAPHQL, CATEGORY, variables);
      return new Response(JSON.stringify(data));
  } catch (error) {
    console.error("Error fetching catalog:", error);
    return new Response(`Error fetching catalog: ${error.message}`, { status: 500 });
  }
}
