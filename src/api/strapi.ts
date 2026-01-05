import qs from "qs";

export const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

export function getStrapiURL(path = "") {
  return `${STRAPI_API_URL}${path}`;
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param path The path to fetch (e.g., '/api/home-page')
 * @param urlParamsObject URL parameters object, will be stringified using qs
 * @param options Options passed to fetch
 * @returns Parsed JSON response from Strapi
 */
export async function fetchAPI(
  path: string,
  urlParamsObject: Record<string, any> = {},
  options: RequestInit = {}
) {
  try {
    // Merge default and user options
    const mergedOptions = {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject, {
        encodeValuesOnly: true, // prettify URL
    });
    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ""}`
    )}`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();
    return data;
    
  } catch (error) {
    console.error(`Error fetching API from ${path}:`, error);
    throw new Error(
      `Please check if your server is running and you set all the environment variables.`
    );
  }
}

/**
 * Helper to get the full image URL from Strapi media object
 */
export function getStrapiMedia(media: any) {
  if (!media?.data?.attributes?.url) // Strapi v4/v5 structure check
      return null;
      
  const { url } = media.data.attributes;
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}
