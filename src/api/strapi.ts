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
  if (!media) return null;
  
  // Flattened structure (Strapi v5 or populated)
  if (media.url) {
    const { url } = media;
    return url.startsWith("/") ? getStrapiURL(url) : url;
  }

  // Nested structure (Strapi v4)
  if (media.data?.attributes?.url) {
    const { url } = media.data.attributes;
    return url.startsWith("/") ? getStrapiURL(url) : url;
  }
      
  return null;
}
