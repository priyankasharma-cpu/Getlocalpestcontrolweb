/**
 * @typedef {'household' | 'wildlife' | 'flying' | 'outdoor' | 'specialty'} PestCategory
 *
 * @typedef {'Bug' | 'Bird' | 'Rat' | 'Wind' | 'ShieldCheck' | 'Leaf' | 'House' | 'Moon'} PestIcon
 *
 * @typedef {Object} TreatmentStep
 * @property {string} title
 * @property {string} description
 *
 * @typedef {Object} PestFaq
 * @property {string} question
 * @property {string} answer
 *
 * @typedef {Object} SeoMetadata
 * @property {string} title Complete document title, including the brand.
 * @property {string} description
 * @property {string} canonicalPath Absolute path on the configured domain.
 *
 * @typedef {Object} PestHeroContent
 * @property {string} eyebrow
 * @property {string} title
 * @property {string} description
 *
 * @typedef {Object} PestPageSection
 * @property {string} description
 * @property {ReadonlyArray<string>} points
 *
 * @typedef {Object} PestServiceDefinition Content only; no Vite asset URLs.
 * @property {string} id Stable identifier retained from the previous catalog.
 * @property {string} slug Stable route and image filename stem.
 * @property {string} name Pest display name.
 * @property {string} singularName
 * @property {string} serviceName Service display name.
 * @property {PestCategory} category
 * @property {PestIcon} icon
 * @property {string} shortDescription
 * @property {PestHeroContent} hero
 * @property {PestPageSection} overview
 * @property {PestPageSection} concerns
 * @property {ReadonlyArray<string>} signs
 * @property {ReadonlyArray<TreatmentStep>} treatmentSteps
 * @property {ReadonlyArray<string>} preventionTips
 * @property {SeoMetadata} seo
 * @property {ReadonlyArray<PestFaq>} faqs
 * @property {ReadonlyArray<string>} relatedSlugs
 *
 * @typedef {PestServiceDefinition & {
 *   image: string,
 *   hasCustomImage: boolean,
 *   isPlaceholder: boolean,
 *   service: string,
 *   heroTitle: string,
 *   intro: string
 * }} PestService Resolved, immutable service. service/heroTitle/intro are deprecated aliases.
 */
export {};
