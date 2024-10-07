import { revalidatePath } from "next/cache";
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
      image {
        hash
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
      const data = await request(NEXT_PUBLIC_GRAPHQL, CATALOG, variables); // Вызов 'request' из 'graphql-request'
      return new Response(JSON.stringify(data));
    }
  } catch (error) {
    console.error("Error fetching catalog:", error);
    return new Response("Error fetching catalog", { status: 500 });
  }
}
