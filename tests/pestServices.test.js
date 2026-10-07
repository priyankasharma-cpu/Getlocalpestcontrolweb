import { before, after, test } from "node:test";
import assert from "node:assert/strict";
import { createServer } from "vite";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

// Vite loads the existing asset glob for these Node tests; no test framework is installed.
let vite, catalog, resolver, validatePestServices, PestHero, CallCTA, CONTACT_PHONE;
const extensions = ["webp", "png", "jpg", "jpeg", "svg"];

before(async () => {
  vite = await createServer({
    server: { middlewareMode: true, watch: null },
    appType: "custom",
  });
  catalog = await vite.ssrLoadModule("/src/data/pestServices.js");
  resolver = await vite.ssrLoadModule("/src/utils/serviceImageResolver.js");
  ({ default: PestHero } = await vite.ssrLoadModule(
    "/src/components/pest-control/PestHero.jsx",
  ));
  ({ default: CallCTA } = await vite.ssrLoadModule(
    "/src/components/common/CallCTA.jsx",
  ));
  ({ CONTACT_PHONE } = await vite.ssrLoadModule("/src/utils/constants.js"));
  ({ validatePestServices } = await vite.ssrLoadModule(
    "/src/utils/validatePestServices.js",
  ));
});

after(async () => {
  await vite?.close();
});

const expectedSlugs = [
  "ants",
  "cockroaches",
  "termites",
  "bed-bugs",
  "rodents",
  "mosquitoes",
  "spiders",
  "fleas",
  "ticks",
  "wasps-bees",
  "general-pest-control",
  "bats",
  "birds",
  "carpenter-ants",
  "centipedes-millipedes",
  "crickets",
  "flies",
  "mice",
  "moths",
  "rats",
  "scorpions",
  "silverfish",
  "stinging-pests",
  "wasps",
  "bees",
  "beetles",
  "earwigs",
  "pantry-pests",
  "stored-product-pests",
  "gnats",
  "outdoor-pests",
];

test("preserves all 31 stable routes, IDs, catalog order, and compatibility aliases", () => {
  assert.deepEqual(
    catalog.pestServices.map((service) => service.slug),
    expectedSlugs,
  );
  assert.equal(
    new Set(catalog.pestServices.map((service) => service.id)).size,
    31,
  );
  for (const service of catalog.pestServices) {
    assert.equal(service.id, `${service.slug}-control`);
    assert.equal(catalog.getPestServiceBySlug(service.slug), service);
    assert.equal(service.service, service.serviceName);
    assert.equal(service.heroTitle, service.hero.title);
    assert.equal(service.intro, service.hero.description);
    assert.equal(service.isPlaceholder, !service.hasCustomImage);
  }
  assert.equal(catalog.getPestServiceBySlug("unknown-pest"), null);
});

test("validates authored content, distinct metadata, canonical paths, and rich steps", () => {
  assert.doesNotThrow(() =>
    validatePestServices(catalog.pestServices, {
      featuredSlugs: catalog.FEATURED_SERVICE_SLUGS,
    }),
  );
  assert.equal(
    new Set(catalog.pestServices.map((service) => service.seo.description))
      .size,
    31,
  );
  assert.equal(
    new Set(catalog.pestServices.map((service) => service.hero.title)).size,
    31,
  );
  for (const service of catalog.pestServices) {
    assert.equal(service.seo.canonicalPath, `/pest-control/${service.slug}`);
    assert.equal(service.treatmentSteps.length, 4);
    assert.ok(service.faqs.length >= 3);
    assert.ok(service.image);
    assert.equal(service.image, resolver.getPestImage(service.slug));
  }
});

test("throws descriptive errors for malformed fields and duplicate identifiers", () => {
  const cases = [
    {
      edit: (data) => {
        data[0].id = "";
      },
      message: /id.*ants/,
    },
    {
      edit: (data) => {
        data[0].slug = "";
      },
      message: /slug/,
    },
    {
      edit: (data) => {
        data[0].serviceName = "";
      },
      message: /serviceName.*ants/,
    },
    {
      edit: (data) => {
        data[0].category = "foo";
      },
      message: /Invalid category "foo".*ants/,
    },
    {
      edit: (data) => {
        data[1].id = data[0].id;
      },
      message: /Duplicate pest service id/,
    },
    {
      edit: (data) => {
        data[1].slug = data[0].slug;
      },
      message: /Duplicate pest service slug: "ants"/,
    },
    {
      edit: (data) => {
        data[0].shortDescription = "";
      },
      message: /shortDescription.*ants/,
    },
    {
      edit: (data) => {
        data[0].hero.title = "";
      },
      message: /hero.title.*ants/,
    },
    {
      edit: (data) => {
        data[0].hero.description = "";
      },
      message: /hero.description.*ants/,
    },
    {
      edit: (data) => {
        data[0].signs = [];
      },
      message: /signs.*ants/,
    },
    {
      edit: (data) => {
        data[0].signs = [null];
      },
      message: /signs\[0\].*ants/,
    },
    {
      edit: (data) => {
        data[0].treatmentSteps = [];
      },
      message: /treatmentSteps.*ants/,
    },
    {
      edit: (data) => {
        data[0].treatmentSteps[0].description = "";
      },
      message: /treatmentSteps\[0\].description.*ants/,
    },
    {
      edit: (data) => {
        data[0].preventionTips = [];
      },
      message: /preventionTips.*ants/,
    },
    {
      edit: (data) => {
        data[0].seo.title = "";
      },
      message: /seo.title.*ants/,
    },
    {
      edit: (data) => {
        data[0].seo.description = "";
      },
      message: /seo.description.*ants/,
    },
    {
      edit: (data) => {
        data[0].seo.canonicalPath = "/pest-control/not-ants";
      },
      message: /seo.canonicalPath.*ants/,
    },
    {
      edit: (data) => {
        data[0].faqs = null;
      },
      message: /faqs.*ants/,
    },
    {
      edit: (data) => {
        data[0].faqs[0].question = "";
      },
      message: /faqs\[0\].question.*ants/,
    },
    {
      edit: (data) => {
        data[0].faqs[0].answer = 7;
      },
      message: /faqs\[0\].answer.*ants/,
    },
    {
      edit: (data) => {
        data[0].relatedSlugs = ["unknown"];
      },
      message: /Unknown related slug "unknown".*ants/,
    },
    {
      edit: (data) => {
        data[0].relatedSlugs = ["ants"];
      },
      message: /cannot relate to itself/,
    },
  ];
  for (const { edit, message } of cases) {
    const data = structuredClone(catalog.pestServices);
    edit(data);
    assert.throws(() => validatePestServices(data), message);
  }
  assert.throws(
    () =>
      validatePestServices(catalog.pestServices, {
        featuredSlugs: ["missing"],
      }),
    /Unknown featured pest service slug/,
  );
});

test("related services prioritize explicit relationships and exclude duplicates and self", () => {
  const rats = catalog.getPestServiceBySlug("rats");
  assert.deepEqual(
    catalog.getRelatedServices(rats, 3).map((service) => service.slug),
    ["mice", "rodents", "outdoor-pests"],
  );
  for (const service of catalog.pestServices) {
    const related = catalog.getRelatedServices(service);
    assert.ok(related.length <= 4);
    assert.equal(
      new Set(related.map((item) => item.slug)).size,
      related.length,
    );
    assert.ok(related.every((item) => item.slug !== service.slug));
    const explicit = service.relatedSlugs.slice(0, 4);
    assert.deepEqual(
      related.slice(0, explicit.length).map((item) => item.slug),
      explicit,
    );
    assert.ok(
      related
        .slice(explicit.length)
        .every((item) => item.category === service.category),
    );
  }
  assert.deepEqual(catalog.getRelatedServices(null), []);
  assert.deepEqual(catalog.getRelatedServices({ slug: "missing" }), []);
  for (const limit of [0, -1, 0.5, NaN, Infinity])
    assert.deepEqual(catalog.getRelatedServices(rats, limit), []);
});

test("featured order and category lookups are stable and exports are immutable", () => {
  assert.deepEqual(
    catalog.featuredServices.map((service) => service.slug),
    [
      "ants",
      "cockroaches",
      "termites",
      "bed-bugs",
      "rodents",
      "mosquitoes",
      "spiders",
      "wasps-bees",
    ],
  );
  for (const category of catalog.serviceCategories) {
    assert.equal(catalog.getCategoryLabel(category.id), category.label);
    assert.equal(catalog.categoryLabel(category.id), category.label);
    assert.ok(
      catalog
        .getServicesByCategory(category.id)
        .every((service) => service.category === category.id),
    );
  }
  assert.deepEqual(catalog.getServicesByCategory("missing"), []);
  assert.equal(catalog.getCategoryLabel("missing"), "Pest Control");
  assert.ok(Object.isFrozen(catalog.pestServices));
  assert.ok(Object.isFrozen(catalog.featuredServices));
  assert.throws(() => {
    catalog.pestServices[0].hero.title = "mutated";
  }, TypeError);
  assert.throws(() => {
    catalog.pestServices[0].treatmentSteps.push({ title: "mutated" });
  }, TypeError);
});

test("image resolution prefers each extension in order and always has a fallback", () => {
  for (const [index, extension] of extensions.entries()) {
    const modules = Object.fromEntries(
      extensions
        .slice(index)
        .reverse()
        .map((ext) => [
          `../assets/images/pests/example-pest.${ext}`,
          `${ext}-url`,
        ]),
    );
    const fixture = resolver.createPestImageResolver(modules, "fallback-url");
    assert.equal(fixture.getPestImage("example-pest"), `${extension}-url`);
    assert.equal(fixture.hasPestImage("example-pest"), extension !== "svg");
    assert.equal(fixture.getPestImage("missing-pest"), "fallback-url");
    assert.equal(fixture.hasPestImage("missing-pest"), false);
  }
  assert.ok(resolver.getPestImage("missing-pest"));
  assert.equal(resolver.hasPestImage("missing-pest"), false);
  assert.equal(resolver.hasPestImage("ants"), true);
  assert.equal(resolver.hasPestImage("bats"), true);
  const normalized = resolver.createPestImageResolver(
    { "../assets/images/pests/ANTS.png": "ant-url" },
    "fallback-url",
  );
  assert.equal(normalized.getPestImage("ants"), "ant-url");
  assert.throws(
    () => resolver.createPestImageResolver({}, ""),
    /fallback image URL/,
  );
});

test("service detail heroes render the selected pest image for every service", () => {
  for (const pest of catalog.pestServices) {
    const html = renderToStaticMarkup(createElement(PestHero, { pest }));
    assert.ok(html.includes(`src="${pest.image}"`), pest.slug);
    const escapedName = pest.serviceName.replaceAll("&", "&amp;");
    assert.ok(html.includes(`alt="${escapedName} service"`), pest.slug);
    assert.equal(pest.hasCustomImage, true, pest.slug);
  }
  const html = renderToStaticMarkup(createElement(PestHero));
  assert.ok(html.includes("PestControlServices.png"));
});

test("every call variant exposes the official TFN as a visible accessible telephone link", () => {
  assert.equal(CONTACT_PHONE.href, `tel:${CONTACT_PHONE.raw}`);
  assert.equal(CONTACT_PHONE.display.replace(/[^+\d]/g, ""), CONTACT_PHONE.raw);
  for (const variant of ["default", "header", "menu", "card", "footer", "sticky"]) {
    const html = renderToStaticMarkup(createElement(CallCTA, { variant }));
    assert.ok(html.includes('href="tel:+18882401827"'), variant);
    assert.ok(html.includes("<strong>+1 (888) 240-1827</strong>"), variant);
    assert.ok(html.includes('aria-label="Call Get Local Pest Control at +1 (888) 240-1827"'), variant);
    assert.ok(html.includes('aria-hidden="true"'), variant);
    assert.ok(!html.includes("aria-disabled"), variant);
  }
});
