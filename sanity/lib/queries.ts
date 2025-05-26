import {defineQuery} from "groq";

export const ARTICLES_QUERY = defineQuery(`
  *[_type == "article"] | order(_createdAt desc)
`);