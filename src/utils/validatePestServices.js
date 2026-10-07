import { PEST_CATEGORIES } from "../data/pestCategories";

const isText = (value) => typeof value === "string" && value.trim().length > 0;

/**
 * Validate authored content before resolving assets. Throws immediately with the
 * field and service involved. The caller gates this behind import.meta.env.DEV.
 * @param {ReadonlyArray<import('../types/pestService').PestServiceDefinition>} services
 * @param {{featuredSlugs?:ReadonlyArray<string>}} [options]
 * @returns {void}
 */
export function validatePestServices(services, { featuredSlugs = [] } = {}) {
  const validCategories = new Set(Object.values(PEST_CATEGORIES));
  const validIcons = new Set([
    "Bug",
    "Bird",
    "Rat",
    "Wind",
    "ShieldCheck",
    "Leaf",
    "House",
    "Moon",
  ]);
  if (!Array.isArray(services) || !services.length)
    throw new Error("Pest services must be a non-empty array.");
  if (!Array.isArray(featuredSlugs))
    throw new Error("Featured pest service slugs must be an array.");
  const ids = new Set(),
    slugs = new Set(),
    seoTitles = new Set(),
    seoDescriptions = new Set();
  for (const [index, service] of services.entries()) {
    if (!service || typeof service !== "object" || Array.isArray(service))
      throw new Error(`Invalid pest service object at index ${index}.`);
    const context = isText(service.slug) ? service.slug : `index ${index}`;
    const requireText = (value, field) => {
      if (!isText(value))
        throw new Error(
          `Missing or invalid ${field} for service: "${context}"`,
        );
    };
    const requireTexts = (values, field) => {
      if (!Array.isArray(values) || !values.length)
        throw new Error(`Missing or empty ${field} for service: "${context}"`);
      values.forEach((value, i) => requireText(value, `${field}[${i}]`));
    };
    for (const field of [
      "id",
      "slug",
      "name",
      "singularName",
      "serviceName",
      "shortDescription",
    ])
      requireText(service[field], field);
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(service.slug))
      throw new Error(`Invalid pest service slug: "${service.slug}"`);
    if (ids.has(service.id))
      throw new Error(`Duplicate pest service id: "${service.id}"`);
    if (slugs.has(service.slug))
      throw new Error(`Duplicate pest service slug: "${service.slug}"`);
    ids.add(service.id);
    slugs.add(service.slug);
    if (!validCategories.has(service.category))
      throw new Error(
        `Invalid category "${service.category}" for service: "${context}"`,
      );
    if (!validIcons.has(service.icon))
      throw new Error(
        `Invalid icon "${service.icon}" for service: "${context}"`,
      );
    for (const field of ["eyebrow", "title", "description"])
      requireText(service.hero?.[field], `hero.${field}`);
    for (const section of ["overview", "concerns"]) {
      requireText(service[section]?.description, `${section}.description`);
      requireTexts(service[section]?.points, `${section}.points`);
    }
    requireTexts(service.signs, "signs");
    requireTexts(service.preventionTips, "preventionTips");
    if (
      !Array.isArray(service.treatmentSteps) ||
      !service.treatmentSteps.length
    )
      throw new Error(
        `Missing or empty treatmentSteps for service: "${context}"`,
      );
    service.treatmentSteps.forEach((step, i) => {
      requireText(step?.title, `treatmentSteps[${i}].title`);
      requireText(step?.description, `treatmentSteps[${i}].description`);
    });
    for (const field of ["title", "description", "canonicalPath"])
      requireText(service.seo?.[field], `seo.${field}`);
    if (service.seo.canonicalPath !== `/pest-control/${service.slug}`)
      throw new Error(
        `Invalid seo.canonicalPath for service: "${context}"; expected "/pest-control/${service.slug}"`,
      );
    if (seoTitles.has(service.seo.title))
      throw new Error(`Duplicate seo.title for service: "${context}"`);
    if (seoDescriptions.has(service.seo.description))
      throw new Error(`Duplicate seo.description for service: "${context}"`);
    seoTitles.add(service.seo.title);
    seoDescriptions.add(service.seo.description);
    if (!Array.isArray(service.faqs) || !service.faqs.length)
      throw new Error(`Missing or empty faqs for service: "${context}"`);
    service.faqs.forEach((faq, i) => {
      requireText(faq?.question, `faqs[${i}].question`);
      requireText(faq?.answer, `faqs[${i}].answer`);
    });
    if (!Array.isArray(service.relatedSlugs))
      throw new Error(`Missing relatedSlugs array for service: "${context}"`);
  }
  for (const service of services) {
    const seen = new Set();
    for (const slug of service.relatedSlugs) {
      if (!isText(slug) || !slugs.has(slug))
        throw new Error(
          `Unknown related slug "${slug}" for service: "${service.slug}"`,
        );
      if (slug === service.slug)
        throw new Error(`Service "${service.slug}" cannot relate to itself.`);
      if (seen.has(slug))
        throw new Error(
          `Duplicate related slug "${slug}" for service: "${service.slug}"`,
        );
      seen.add(slug);
    }
  }
  const featured = new Set();
  for (const slug of featuredSlugs) {
    if (!slugs.has(slug))
      throw new Error(`Unknown featured pest service slug: "${slug}"`);
    if (featured.has(slug))
      throw new Error(`Duplicate featured pest service slug: "${slug}"`);
    featured.add(slug);
  }
}
