import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DOMAIN } from "./constants";
/**
 * Named metadata uses its exact title and canonical path. The legacy string
 * signature still appends the brand for existing non-service pages.
 * @param {string | import('../types/pestService').SeoMetadata} titleOrMetadata
 * @param {string} [description]
 */
export function useSEO(titleOrMetadata, description) {
  const { pathname } = useLocation();
  const metadata = typeof titleOrMetadata === "string" ? null : titleOrMetadata;
  const title =
    metadata?.title ?? `${titleOrMetadata} | Get Local Pest Control`;
  const pageDescription = metadata?.description ?? description;
  const canonicalPath = metadata?.canonicalPath ?? pathname;
  useEffect(() => {
    document.title = title;
    const set = (key, value, property = false) => {
      let element = document.head.querySelector(
        `meta[${property ? "property" : "name"}="${key}"]`,
      );
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(property ? "property" : "name", key);
        document.head.append(element);
      }
      element.content = value;
    };
    set("description", pageDescription);
    set("og:title", title, true);
    set("og:description", pageDescription, true);
    set("og:type", "website", true);
    set("og:url", DOMAIN + canonicalPath, true);
    let canonical = document.head.querySelector("link[rel=canonical]");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.append(canonical);
    }
    canonical.href = DOMAIN + canonicalPath;
  }, [title, pageDescription, canonicalPath]);
}
