import { revalidatePath } from "next/cache";
import { gql, request } from "graphql-request";

const { NEXT_PUBLIC_GRAPHQL, NEXT_PUBLIC_KEY } = process.env;

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

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");
  const path = req.nextUrl.searchParams.get("slug");

  const variables = {
    key: NEXT_PUBLIC_KEY,
    slug,
  };

  try {
    if (path) {
      revalidatePath(path);
      const data = await request(NEXT_PUBLIC_GRAPHQL, PRODUCT, variables);

      return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
          "Cache-Control": "s-maxage=120, stale-while-revalidate",
        },
      });
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    return new Response("Error fetching product", { status: 500 });
  }
}
