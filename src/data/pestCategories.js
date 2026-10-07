export const PEST_CATEGORIES = Object.freeze({
  HOUSEHOLD: "household",
  WILDLIFE: "wildlife",
  FLYING: "flying",
  OUTDOOR: "outdoor",
  SPECIALTY: "specialty",
});

export const serviceCategories = Object.freeze([
  Object.freeze({ id: PEST_CATEGORIES.HOUSEHOLD, label: "Household Pests" }),
  Object.freeze({ id: PEST_CATEGORIES.WILDLIFE, label: "Rodents & Wildlife" }),
  Object.freeze({
    id: PEST_CATEGORIES.FLYING,
    label: "Flying & Stinging Pests",
  }),
  Object.freeze({ id: PEST_CATEGORIES.OUTDOOR, label: "Outdoor Pests" }),
  Object.freeze({
    id: PEST_CATEGORIES.SPECIALTY,
    label: "Specialty Pest Control",
  }),
]);

const categoryLabels = new Map(
  serviceCategories.map((category) => [category.id, category.label]),
);

/** @param {string} categoryId @returns {string} */
export function getCategoryLabel(categoryId) {
  return categoryLabels.get(categoryId) ?? "Pest Control";
}

/** @deprecated Use getCategoryLabel. Kept for existing imports. */
export const categoryLabel = getCategoryLabel;
