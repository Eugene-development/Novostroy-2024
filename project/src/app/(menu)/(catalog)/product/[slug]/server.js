"use server";
import { gql, request } from "graphql-request";

const { NEXT_PUBLIC_GRAPHQL, NEXT_PUBLIC_KEY } = process.env;

const PRODUCT = gql`
  query product($slug: String!, $key: UUID!) {
    product(slug: $slug, key: $key) {
      value
      tag {
        value
      }
    }
  }
  `

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