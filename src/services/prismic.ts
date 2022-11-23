import Prismic from '@prismicio/client';
import { createClient } from '@prismicio/client';


export function getPrismicClient(req?: unknown) {
  const prismic = createClient(process.env.PRISMIC_ENDPOINT as string, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  return prismic;
}