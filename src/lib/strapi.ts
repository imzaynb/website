interface Props {
  endpoint: string;
  query?: string;
}

export async function fetchFromStrapi({ endpoint, query }: Props) {
  const strapiUrl = import.meta.env.STRAPI_URL || 'http://127.0.0.1:1337';
  const response = await fetch(`${strapiUrl}/api/${endpoint}?${query || ''}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch from Strapi: ${response.statusText}`);
  }
  
  const { data } = await response.json();
  return data;
}
