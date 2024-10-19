import { revalidatePath } from "next/cache";
import { gql, request } from "graphql-request";

const { NEXT_PUBLIC_GRAPHQL, NEXT_PUBLIC_KEY } = process.env;

const CATALOG = gql`
    query catalog($slug: String!, $key: UUID!) {
      catalog(slug: $slug, key: $key) {
        value
        slug
        metaTitle {
          value
        }
        metaDescription {
          value
        }
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

  if (!slug || !NEXT_PUBLIC_KEY || !NEXT_PUBLIC_GRAPHQL) {
    return new Response("Missing required parameters", { status: 400 });
  }

  const variables = {
    key: NEXT_PUBLIC_KEY,
    slug,
  };

  try {
    // Очищаем кэш для данного пути
    revalidatePath(slug);
    // Выполняем запрос к GraphQL API
    const data = await request(NEXT_PUBLIC_GRAPHQL, CATALOG, variables);
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Error fetching catalog:", error);
    return new Response(`Error fetching catalog: ${error.message}`, {
      status: 500,
    });
  }
}
