import fallbackImage from "../assets/images/pests/pest-placeholder.webp";

const imageModules = import.meta.glob(
  "../assets/images/pests/*.{webp,png,jpg,jpeg,svg}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);
const extensionOrder = ["webp", "png", "jpg", "jpeg", "svg"];

/**
 * Normalize an asset URL map once. Keeping this pure makes extension priority
 * testable without adding or removing files from a running Vite project.
 * @param {Record<string,string>} modules
 * @param {string} placeholderUrl
 * @returns {{getPestImage:(slug:string)=>string,hasPestImage:(slug:string)=>boolean}}
 */
export function createPestImageResolver(modules, placeholderUrl) {
  if (typeof placeholderUrl !== "string" || !placeholderUrl)
    throw new Error("A local pest fallback image URL is required.");
  /** @type {Map<string,{url:string,extension:string}>} */
  const pestImageMap = new Map();
  for (const [path, url] of Object.entries(modules)) {
    const filename = path.slice(path.lastIndexOf("/") + 1);
    const separator = filename.lastIndexOf(".");
    const slug = filename.slice(0, separator).toLowerCase();
    const extension = filename.slice(separator + 1).toLowerCase();
    const rank = extensionOrder.indexOf(extension);
    if (
      separator < 1 ||
      slug === "pest-placeholder" ||
      rank < 0 ||
      typeof url !== "string" ||
      !url
    )
      continue;
    const existing = pestImageMap.get(slug);
    if (!existing || rank < extensionOrder.indexOf(existing.extension))
      pestImageMap.set(slug, { url, extension });
  }
  return Object.freeze({
    getPestImage(slug) {
      return pestImageMap.get(slug)?.url ?? placeholderUrl;
    },
    // Named SVGs in this catalog are photo templates; custom raster photos replace them.
    hasPestImage(slug) {
      const image = pestImageMap.get(slug);
      return Boolean(image && image.extension !== "svg");
    },
  });
}

const resolver = createPestImageResolver(imageModules, fallbackImage);

/** @param {string} slug @returns {string} Always a valid local URL. */
export function getPestImage(slug) {
  return resolver.getPestImage(slug);
}

/**
 * Whether a custom raster photo exists. SVG templates resolve as images but
 * retain the UI's existing placeholder labels.
 * @param {string} slug
 * @returns {boolean}
 */
export function hasPestImage(slug) {
  return resolver.hasPestImage(slug);
}
