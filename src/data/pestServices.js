import { getPestImage, hasPestImage } from "../utils/serviceImageResolver";
import { PEST_CATEGORIES } from "./pestCategories";
import { validatePestServices } from "../utils/validatePestServices";
export {
  PEST_CATEGORIES,
  serviceCategories,
  getCategoryLabel,
  categoryLabel,
} from "./pestCategories";

/** @typedef {import('../types/pestService').PestServiceDefinition} PestServiceDefinition */
/** @typedef {import('../types/pestService').PestService} PestService */

// Authored content is independent of Vite asset discovery and UI presentation.
/** @type {ReadonlyArray<PestServiceDefinition>} */
const serviceDefinitions = [
  {
    id: "ants-control",
    slug: "ants",
    name: "Ants",
    singularName: "Ant",
    serviceName: "Ant Control",
    category: PEST_CATEGORIES.HOUSEHOLD,
    icon: "Bug",
    shortDescription: "Trails of tiny visitors can point to a bigger colony.",
    signs: [
      "Repeated trails near food",
      "Activity along windows or cracks",
      "Small piles of debris",
    ],
    preventionTips: [
      "Store food in sealed containers",
      "Wipe up crumbs and spills",
      "Seal accessible entry gaps",
    ],
    hero: {
      eyebrow: "ANT CONTROL",
      title: "Get Help With Ant Trails Around Your Home",
      description:
        "Ant trails near food, water, or entry gaps may lead to a colony nearby. Learn the signs to watch for and how an assessment can guide an ant-control approach.",
    },
    seo: {
      title: "Ant Control & Treatment Help | Get Local Pest Control",
      description:
        "Learn why ant trails recur, what to look for near food and entry gaps, and how to request local ant-control help.",
      canonicalPath: "/pest-control/ants",
    },
    overview: {
      description:
        "Ant activity can vary by species and nesting location. Where trails begin and end can offer useful clues about food sources and access to the home.",
      points: [
        "Observe trails near food and water",
        "Note gaps used along windows and doors",
        "Identify the species before choosing treatment",
      ],
    },
    concerns: {
      description:
        "Repeated trails may indicate that ants have found a reliable food or moisture source. Treating only the visible visitors may leave the source of activity unaddressed.",
      points: [
        "Trails may connect to a concealed nest",
        "Food residues can attract repeated visits",
        "Moisture conditions may support activity",
      ],
    },
    treatmentSteps: [
      {
        title: "Identify the Ant",
        description:
          "Review visible ants and their behavior to help distinguish species with different nesting habits.",
      },
      {
        title: "Follow Activity Areas",
        description:
          "Inspect trails, possible nesting spaces, food sources, and entry gaps.",
      },
      {
        title: "Discuss a Targeted Approach",
        description:
          "Select an approach based on the species, nesting information, and conditions around the property.",
      },
      {
        title: "Reduce Ant Attractants",
        description:
          "Review food storage, moisture management, and accessible gaps that can encourage repeat visits.",
      },
    ],
    faqs: [
      {
        question: "Why do ants keep appearing in my kitchen?",
        answer:
          "Ants may follow an established route to food or water. Cleaning the visible trail alone may not address the colony or the source attracting it.",
      },
      {
        question: "Do all ants need the same treatment?",
        answer:
          "No. Species and nesting location can influence the approach, so identifying the ant is a useful first step.",
      },
      {
        question: "What should I note before an ant assessment?",
        answer:
          "Record where trails appear, when activity is noticeable, and whether ants are near food, moisture, or exterior openings.",
      },
    ],
    relatedSlugs: ["carpenter-ants", "cockroaches", "general-pest-control"],
  },
  {
    id: "cockroaches-control",
    slug: "cockroaches",
    name: "Cockroaches",
    singularName: "Cockroach",
    serviceName: "Cockroach Control",
    category: PEST_CATEGORIES.HOUSEHOLD,
    icon: "Bug",
    shortDescription:
      "Find help for persistent activity in kitchens and hidden spaces.",
    signs: [
      "Droppings in cabinets",
      "Shed skins or egg cases",
      "Repeated nighttime sightings",
    ],
    preventionTips: [
      "Reduce clutter and food residue",
      "Repair leaking pipes",
      "Keep garbage containers closed",
    ],
    hero: {
      eyebrow: "COCKROACH CONTROL",
      title: "Understand Cockroach Activity in Hidden Spaces",
      description:
        "Recurring sightings in kitchens, bathrooms, or storage areas may point to nearby shelter and resources. Identification and inspection help guide an appropriate cockroach-control plan.",
    },
    seo: {
      title: "Cockroach Control & Inspection Help | Get Local Pest Control",
      description:
        "Explore cockroach warning signs in kitchens and hidden spaces, ways to reduce attractants, and how to request an assessment.",
      canonicalPath: "/pest-control/cockroaches",
    },
    overview: {
      description:
        "Cockroaches may use cracks, cabinets, and other sheltered areas near food or moisture. Species identification helps distinguish indoor activity from visitors entering from outside.",
      points: [
        "Look around cabinets and appliance edges",
        "Note moisture and food residues",
        "Share the timing of repeated sightings",
      ],
    },
    concerns: {
      description:
        "Hidden shelter can make the extent of cockroach activity difficult to judge from a few sightings. An assessment can look beyond the visible insects.",
      points: [
        "Activity may extend behind appliances",
        "Leaks can provide persistent moisture",
        "Egg cases may be found in sheltered spaces",
      ],
    },
    treatmentSteps: [
      {
        title: "Identify the Cockroach",
        description:
          "Examine sightings or collected observations to understand which cockroach species may be present.",
      },
      {
        title: "Inspect Sheltered Areas",
        description:
          "Review cabinets, appliance spaces, plumbing access, and other likely activity areas.",
      },
      {
        title: "Discuss Treatment Placement",
        description:
          "Consider an approach suited to the species, sheltering locations, and conditions in the home.",
      },
      {
        title: "Review Sanitation and Follow-Up",
        description:
          "Discuss food residues, leaking pipes, clutter, and how activity will be assessed after treatment.",
      },
    ],
    faqs: [
      {
        question: "Why are cockroaches often noticed at night?",
        answer:
          "Some cockroach activity is easier to notice when rooms are quiet. The time and location of sightings can help a provider assess the problem.",
      },
      {
        question: "Can a leak contribute to cockroach activity?",
        answer:
          "Moisture can support cockroach activity. Addressing leaks is one practical step alongside identification and an appropriate treatment approach.",
      },
      {
        question: "What observations help a cockroach inspection?",
        answer:
          "Note repeated sightings, suspected droppings, egg cases, and the cabinets or appliances where signs appear.",
      },
    ],
    relatedSlugs: ["ants", "silverfish", "general-pest-control"],
  },
  {
    id: "termites-control",
    slug: "termites",
    name: "Termites",
    singularName: "Termite",
    serviceName: "Termite Control",
    category: PEST_CATEGORIES.SPECIALTY,
    icon: "Bug",
    shortDescription:
      "Understand warning signs around wood and your foundation.",
    signs: [
      "Mud tubes along foundations or walls",
      "Discarded wings near windows or doors",
      "Visible changes to wooden surfaces",
      "Hollow-sounding or damaged wood",
    ],
    preventionTips: [
      "Keep stored firewood away from the home",
      "Address moisture near foundations",
      "Reduce accessible wood-to-soil contact",
      "Have suspicious changes to wood assessed",
    ],
    hero: {
      eyebrow: "TERMITE CONTROL",
      title: "Help Protect Your Home From Termite Activity",
      description:
        "Termite activity can remain concealed around wood and structural spaces. Learn possible warning signs and explore how an inspection can guide termite-control options.",
    },
    seo: {
      title: "Termite Control & Treatment Help | Get Local Pest Control",
      description:
        "Learn possible termite signs, including mud tubes and discarded wings, prevention considerations, and how to request termite-control help.",
      canonicalPath: "/pest-control/termites",
    },
    overview: {
      description:
        "Termite signs may appear near foundations, wooden materials, or moisture-prone areas. Visible signs alone may not reveal where activity extends.",
      points: [
        "Document suspected mud tubes",
        "Note wings near windows or doors",
        "Have suspicious changes to wood assessed",
      ],
    },
    concerns: {
      description:
        "Activity inside wood may be difficult to observe directly. Suspicious signs can warrant an inspection to understand the affected areas and conditions.",
      points: [
        "Wood-related activity may be concealed",
        "Moisture can be relevant to an assessment",
        "Different termite types can require different approaches",
      ],
    },
    treatmentSteps: [
      {
        title: "Inspect Suspected Termite Activity",
        description:
          "Review visible signs, affected wood, foundation areas, and moisture conditions.",
      },
      {
        title: "Assess the Areas Involved",
        description:
          "Examine accessible locations to help determine where termite activity may be occurring.",
      },
      {
        title: "Discuss Termite Treatment Options",
        description:
          "Consider termite type, construction details, and the areas involved when discussing treatment.",
      },
      {
        title: "Review Wood and Moisture Conditions",
        description:
          "Discuss drainage, moisture management, and wood-to-soil contact as prevention considerations.",
      },
    ],
    faqs: [
      {
        question: "What are possible signs of termite activity?",
        answer:
          "Possible signs include mud tubes, discarded wings, and changes to wooden materials. An inspection can help determine whether termites are involved.",
      },
      {
        question: "Can termite activity be difficult to detect?",
        answer:
          "Yes. Some activity may occur inside wood or other concealed spaces, so the extent of activity may not be clear from visible signs.",
      },
      {
        question: "What should I do with suspected termite signs?",
        answer:
          "Photograph the location and note any moisture or wood changes. Share those observations when requesting an inspection.",
      },
    ],
    relatedSlugs: ["carpenter-ants", "beetles", "general-pest-control"],
  },
  {
    id: "bed-bugs-control",
    slug: "bed-bugs",
    name: "Bed Bugs",
    singularName: "Bed Bug",
    serviceName: "Bed Bug Control",
    category: PEST_CATEGORIES.SPECIALTY,
    icon: "Bug",
    shortDescription:
      "Get an informed approach to pests around sleeping areas.",
    signs: [
      "Small dark marks along mattress seams",
      "Shed skins in furniture crevices",
      "Live insects around bed frames",
      "Activity around upholstered furniture",
    ],
    preventionTips: [
      "Inspect used furniture before bringing it inside",
      "Reduce clutter near beds and resting areas",
      "Check luggage and travel belongings for visible signs",
      "Follow provider-specific preparation instructions",
    ],
    hero: {
      eyebrow: "BED BUG CONTROL",
      title: "Take the Next Step Against Bed Bugs",
      description:
        "Bed bugs can hide along mattress seams, furniture joints, and small crevices. Proper identification and an assessment of activity can help guide treatment and preparation.",
    },
    seo: {
      title: "Bed Bug Control & Preparation Help | Get Local Pest Control",
      description:
        "Learn possible bed bug signs around mattresses and furniture, questions about preparation, and how to request local bed-bug control help.",
      canonicalPath: "/pest-control/bed-bugs",
    },
    overview: {
      description:
        "Bed bug assessments focus on places where insects may shelter near sleeping or resting areas. Marks or skin irritation alone do not establish which pest is present.",
      points: [
        "Inspect accessible mattress seams",
        "Note signs along furniture joints",
        "Request identification of suspected insects",
      ],
    },
    concerns: {
      description:
        "Concealed activity can make a room difficult to assess from a single observation. Moving affected belongings without guidance may complicate understanding where activity occurs.",
      points: [
        "Small crevices may shelter insects",
        "Activity may involve more than a mattress",
        "Preparation depends on the selected approach",
      ],
    },
    treatmentSteps: [
      {
        title: "Confirm Suspected Bed Bugs",
        description:
          "Review insects and physical signs to distinguish bed bugs from other household pests.",
      },
      {
        title: "Inspect Resting and Sleeping Areas",
        description:
          "Assess bed frames, mattress seams, furniture joints, and nearby crevices.",
      },
      {
        title: "Plan Treatment and Preparation",
        description:
          "Discuss the areas involved and obtain preparation instructions specific to the proposed approach.",
      },
      {
        title: "Review Follow-Up Observations",
        description:
          "Ask how activity should be monitored and how belongings should be handled after treatment.",
      },
    ],
    faqs: [
      {
        question: "Do marks on skin confirm bed bugs?",
        answer:
          "No. Skin marks alone do not identify a pest. Physical signs or insect identification are needed to assess suspected bed bug activity.",
      },
      {
        question: "Are bed bugs found only in mattresses?",
        answer:
          "Bed bugs may shelter in furniture joints, bed frames, and other crevices near resting areas. An assessment can examine more than the mattress.",
      },
      {
        question: "How should I prepare for a bed bug visit?",
        answer:
          "Ask the provider for instructions before moving or treating belongings. Preparation varies with the areas involved and the treatment approach.",
      },
    ],
    relatedSlugs: ["fleas", "general-pest-control", "beetles"],
  },
  {
    id: "rodents-control",
    slug: "rodents",
    name: "Rodents",
    singularName: "Rodent",
    serviceName: "Rodent Control Services",
    category: PEST_CATEGORIES.WILDLIFE,
    icon: "Rat",
    shortDescription: "Address unwanted visitors and the ways they get inside.",
    signs: [
      "Droppings near food or storage areas",
      "Gnaw marks on packaging or materials",
      "Scratching sounds in walls or ceilings",
      "Evidence of nesting material",
    ],
    preventionTips: [
      "Store food in sealed containers",
      "Keep waste securely covered",
      "Reduce clutter around storage areas",
      "Have accessible structural gaps assessed",
    ],
    hero: {
      eyebrow: "RODENT CONTROL",
      title: "Address Rodent Activity Around Your Home",
      description:
        "Droppings, gnaw marks, or noises in enclosed spaces may point to rodent activity. Learn what to look for and how an assessment can review entry routes and treatment options.",
    },
    seo: {
      title: "Rodent Control Services | Get Local Pest Control",
      description:
        "Explore rodent signs, possible entry areas, food-storage and exclusion considerations, and how to request rodent-control help.",
      canonicalPath: "/pest-control/rodents",
    },
    overview: {
      description:
        "A rodent assessment can distinguish mouse or rat activity and examine possible routes into a building. Food, shelter, and accessible gaps are useful parts of the inspection.",
      points: [
        "Identify the rodent involved",
        "Document signs around storage areas",
        "Assess entry routes and nearby shelter",
      ],
    },
    concerns: {
      description:
        "Activity may occur in walls, ceilings, or other enclosed spaces. Addressing visitors without examining access and attractants may leave conditions that support repeat activity.",
      points: [
        "Gnawing may affect stored materials",
        "Sheltered spaces may conceal nesting",
        "Exterior gaps can provide access indoors",
      ],
    },
    treatmentSteps: [
      {
        title: "Identify Rodent Signs",
        description:
          "Review droppings, gnaw marks, and observations to assess whether mice or rats may be involved.",
      },
      {
        title: "Inspect Entry and Shelter Areas",
        description:
          "Examine accessible structural gaps, storage spaces, and nearby exterior shelter.",
      },
      {
        title: "Discuss Rodent Management Options",
        description:
          "Choose an approach based on the species, activity locations, and building conditions.",
      },
      {
        title: "Review Exclusion and Attractants",
        description:
          "Discuss accessible gap repairs, secure food storage, waste containment, and follow-up.",
      },
    ],
    faqs: [
      {
        question: "How can I tell whether mice or rats are involved?",
        answer:
          "Size and type of signs may offer clues, but observations should be assessed before assuming a species. Identification helps guide management.",
      },
      {
        question: "Why does rodent activity return?",
        answer:
          "Access to food, shelter, or structural gaps may continue to support activity. An assessment can review those conditions alongside treatment.",
      },
      {
        question: "What information should I share about rodent noises?",
        answer:
          "Note where and when noises occur, along with any visible droppings, gnaw marks, or nesting material in accessible areas.",
      },
    ],
    relatedSlugs: ["mice", "rats", "outdoor-pests"],
  },
  {
    id: "mosquitoes-control",
    slug: "mosquitoes",
    name: "Mosquitoes",
    singularName: "Mosquito",
    serviceName: "Mosquito Control",
    category: PEST_CATEGORIES.OUTDOOR,
    icon: "Bug",
    shortDescription: "Explore ways to reduce activity around your yard.",
    signs: [
      "Activity in shaded areas",
      "Standing water around the yard",
      "Mosquitoes near patios",
    ],
    preventionTips: [
      "Empty standing water from unused containers",
      "Maintain gutters and drainage",
      "Repair damaged window and door screens",
      "Reduce areas where water can collect",
    ],
    hero: {
      eyebrow: "MOSQUITO CONTROL",
      title: "Understand Mosquito Activity Around Your Yard",
      description:
        "Standing water and sheltered outdoor areas can be relevant to mosquito activity. Explore practical prevention steps and how a property assessment can guide targeted options.",
    },
    seo: {
      title: "Mosquito Control & Yard Assessment Help | Get Local Pest Control",
      description:
        "Explore mosquito activity around yards, standing-water prevention steps, and how to request an assessment of outdoor mosquito concerns.",
      canonicalPath: "/pest-control/mosquitoes",
    },
    overview: {
      description:
        "Mosquito activity can vary with weather and nearby water sources. A yard assessment can review containers, drainage, and shaded spaces where activity is noticed.",
      points: [
        "Check containers that collect water",
        "Observe activity around patios",
        "Review gutters and drainage conditions",
      ],
    },
    concerns: {
      description:
        "Water sources inside or near a property may contribute to recurring mosquito activity. Conditions can change after rain or when containers collect water.",
      points: [
        "Small containers can collect water",
        "Activity may vary with surrounding conditions",
        "Outdoor management may need ongoing source reduction",
      ],
    },
    treatmentSteps: [
      {
        title: "Review Mosquito Activity",
        description:
          "Identify where and when mosquitoes are most noticeable around outdoor living areas.",
      },
      {
        title: "Inspect Water-Holding Areas",
        description:
          "Review containers, gutters, drainage, and other accessible places where water collects.",
      },
      {
        title: "Discuss Targeted Outdoor Options",
        description:
          "Consider the property layout and identified sources when discussing an appropriate approach.",
      },
      {
        title: "Plan Ongoing Water Reduction",
        description:
          "Review routine steps to reduce water collection and monitor changes after weather events.",
      },
    ],
    faqs: [
      {
        question: "Why are mosquitoes recurring around my patio?",
        answer:
          "Nearby water-holding containers and sheltered conditions may contribute. A property assessment can help identify relevant sources.",
      },
      {
        question: "Can small containers matter for mosquito prevention?",
        answer:
          "Containers that collect water can be useful places to check. Regularly reviewing them is part of practical source reduction.",
      },
      {
        question: "Does mosquito activity change with the weather?",
        answer:
          "Activity can vary with temperature, rainfall, and surrounding conditions. Ask how those changes affect the recommended approach.",
      },
    ],
    relatedSlugs: ["gnats", "ticks", "outdoor-pests"],
  },
  {
    id: "spiders-control",
    slug: "spiders",
    name: "Spiders",
    singularName: "Spider",
    serviceName: "Spider Control",
    category: PEST_CATEGORIES.HOUSEHOLD,
    icon: "Bug",
    shortDescription: "Identify recurring activity and hiding places.",
    signs: ["Repeated webs", "Activity around storage", "Insects near lights"],
    preventionTips: [
      "Reduce clutter",
      "Maintain screens",
      "Reduce insect attractants",
    ],
    hero: {
      eyebrow: "SPIDER CONTROL",
      title: "Find the Source of Recurring Spider Activity",
      description:
        "Repeated webs or sightings around storage areas may reflect sheltered spaces and nearby insects. Identification helps determine which conditions and treatment options to consider.",
    },
    seo: {
      title: "Spider Control & Identification Help | Get Local Pest Control",
      description:
        "Learn what recurring webs and spider sightings may indicate, practical clutter and entry-point steps, and how to request spider-control help.",
      canonicalPath: "/pest-control/spiders",
    },
    overview: {
      description:
        "Spider activity may differ by species and location. Webs, sightings, and nearby insect activity provide useful context for a home assessment.",
      points: [
        "Record where webs recur",
        "Note insects around lights or windows",
        "Identify spiders without handling them",
      ],
    },
    concerns: {
      description:
        "Storage clutter and sheltered corners can make activity less visible. Understanding nearby insect sources can be relevant to managing recurring spiders.",
      points: [
        "Storage spaces may offer shelter",
        "Insect activity can be part of the assessment",
        "Sightings alone may not show the full extent",
      ],
    },
    treatmentSteps: [
      {
        title: "Identify the Spider",
        description:
          "Review observations or photographs to understand the spider involved.",
      },
      {
        title: "Inspect Webs and Shelter",
        description:
          "Examine recurring web locations, storage clutter, and accessible entry areas.",
      },
      {
        title: "Assess Supporting Insect Activity",
        description:
          "Consider insects near lights, windows, and other places where spiders are noticed.",
      },
      {
        title: "Discuss Management and Prevention",
        description:
          "Review an appropriate approach alongside clutter reduction, screen maintenance, and follow-up.",
      },
    ],
    faqs: [
      {
        question: "Why do webs keep appearing in the same corner?",
        answer:
          "Shelter and nearby insect activity may make a location suitable for spiders. An assessment can review those conditions.",
      },
      {
        question: "Do webs identify the spider species?",
        answer:
          "Web patterns may provide clues, but a photograph or other observation may be needed for a useful identification.",
      },
      {
        question: "What should I record about spider activity?",
        answer:
          "Note repeated web locations, where spiders are seen, and any nearby insect activity without handling unfamiliar spiders.",
      },
    ],
    relatedSlugs: ["flies", "centipedes-millipedes", "general-pest-control"],
  },
  {
    id: "fleas-control",
    slug: "fleas",
    name: "Fleas",
    singularName: "Flea",
    serviceName: "Flea Control",
    category: PEST_CATEGORIES.HOUSEHOLD,
    icon: "Bug",
    shortDescription:
      "Find help identifying activity in carpets and resting areas.",
    signs: [
      "Small jumping insects",
      "Activity near pet resting areas",
      "Insects in floor coverings",
    ],
    preventionTips: [
      "Vacuum regularly",
      "Wash suitable bedding",
      "Discuss pet care with a veterinarian",
    ],
    hero: {
      eyebrow: "FLEA CONTROL",
      title: "Assess Flea Activity in Resting and Living Areas",
      description:
        "Small jumping insects around floor coverings or pet resting places may warrant identification. A coordinated assessment can help explain the areas involved and appropriate next steps.",
    },
    seo: {
      title: "Flea Control & Home Assessment Help | Get Local Pest Control",
      description:
        "Explore possible flea signs around carpets and resting areas, cleaning considerations, and how to request a home flea assessment.",
      canonicalPath: "/pest-control/fleas",
    },
    overview: {
      description:
        "A flea assessment can review visible insects and areas where pets or people regularly rest. Home treatment and pet-related questions should be discussed with the appropriate professionals.",
      points: [
        "Identify suspected jumping insects",
        "Review pet resting places and floor coverings",
        "Discuss pet care separately with a veterinarian",
      ],
    },
    concerns: {
      description:
        "Activity can involve several resting areas rather than one visible spot. An assessment can help coordinate preparation, cleaning, and follow-up observations.",
      points: [
        "Floor coverings may need closer inspection",
        "Resting areas can be relevant to activity",
        "Preparation should match the selected approach",
      ],
    },
    treatmentSteps: [
      {
        title: "Confirm Suspected Fleas",
        description:
          "Review visible insects and observations around floor coverings and resting places.",
      },
      {
        title: "Assess Affected Home Areas",
        description:
          "Inspect carpets, furniture edges, and locations where pets regularly rest.",
      },
      {
        title: "Coordinate Treatment Preparation",
        description:
          "Discuss home preparation and refer pet-care questions to a veterinarian.",
      },
      {
        title: "Review Cleaning and Follow-Up",
        description:
          "Ask about vacuuming, suitable bedding care, and how ongoing activity should be monitored.",
      },
    ],
    faqs: [
      {
        question: "Do jumping insects always mean fleas?",
        answer:
          "Jumping behavior is a clue rather than a complete identification. A provider can assess the insect and the locations where it is noticed.",
      },
      {
        question: "Should pet care be part of the conversation?",
        answer:
          "Pet resting areas can be relevant to a home assessment. Questions about treating an animal should be discussed with a veterinarian.",
      },
      {
        question: "What preparation should I ask about for fleas?",
        answer:
          "Ask which areas need attention, how suitable bedding should be handled, and what cleaning is recommended for the proposed approach.",
      },
    ],
    relatedSlugs: ["ticks", "bed-bugs", "general-pest-control"],
  },
  {
    id: "ticks-control",
    slug: "ticks",
    name: "Ticks",
    singularName: "Tick",
    serviceName: "Tick Control",
    category: PEST_CATEGORIES.OUTDOOR,
    icon: "Bug",
    shortDescription: "Understand pest activity around outdoor spaces.",
    signs: [
      "Ticks after time outdoors",
      "Activity near tall grass",
      "Ticks on outdoor belongings",
    ],
    preventionTips: [
      "Maintain grass and brush",
      "Keep walking areas clear",
      "Inspect outdoor belongings",
    ],
    hero: {
      eyebrow: "TICK CONTROL",
      title: "Review Tick Activity Around Outdoor Spaces",
      description:
        "Ticks found on outdoor belongings or after time near brush may prompt a property assessment. Learn how vegetation and outdoor access areas can inform a management approach.",
    },
    seo: {
      title: "Tick Control & Outdoor Prevention Help | Get Local Pest Control",
      description:
        "Explore property-related tick observations, brush and grass maintenance, and how to request an outdoor tick-control assessment.",
      canonicalPath: "/pest-control/ticks",
    },
    overview: {
      description:
        "Tick concerns around a property can involve vegetation, shaded edges, and outdoor belongings. Record where ticks are noticed so the assessment can focus on relevant locations.",
      points: [
        "Note where ticks are found",
        "Review brush and tall grass near paths",
        "Discuss outdoor activity areas with the provider",
      ],
    },
    concerns: {
      description:
        "Tick activity may vary with vegetation and surrounding conditions. An assessment can focus on the locations where ticks are noticed and nearby landscape conditions.",
      points: [
        "Vegetated edges may need inspection",
        "Sightings can occur beyond maintained lawns",
        "Outdoor belongings may provide useful location clues",
      ],
    },
    treatmentSteps: [
      {
        title: "Review Tick Observations",
        description:
          "Discuss where ticks have been found and which outdoor areas are frequently used.",
      },
      {
        title: "Assess Vegetation and Edges",
        description:
          "Inspect accessible brush, tall grass, and shaded areas near paths or gathering spaces.",
      },
      {
        title: "Discuss Property Management Options",
        description:
          "Consider identified activity areas and landscape conditions when selecting an approach.",
      },
      {
        title: "Review Landscape Maintenance",
        description:
          "Discuss brush reduction, clear walking areas, and follow-up property observations.",
      },
    ],
    faqs: [
      {
        question: "What should I tell a provider about tick sightings?",
        answer:
          "Note where ticks were found, nearby vegetation, and outdoor areas used regularly. Those details can help focus a property assessment.",
      },
      {
        question: "Can landscape maintenance be relevant to tick activity?",
        answer:
          "Managing tall grass and brush can be part of a property prevention discussion. The appropriate steps depend on site conditions.",
      },
      {
        question: "What details help identify tick activity on a property?",
        answer:
          "Record where ticks are noticed and any nearby vegetation or outdoor belongings involved. A provider can use those observations to focus an assessment.",
      },
    ],
    relatedSlugs: ["fleas", "mosquitoes", "outdoor-pests"],
  },
  {
    id: "wasps-bees-control",
    slug: "wasps-bees",
    name: "Wasps & Bees",
    singularName: "Wasp & Bee",
    serviceName: "Wasp & Bee Control",
    category: PEST_CATEGORIES.FLYING,
    icon: "Bug",
    shortDescription: "Get help identifying stinging insects near your home.",
    signs: ["Repeated flight paths", "Visible nests", "Activity around eaves"],
    preventionTips: [
      "Avoid disturbing nests",
      "Keep food and trash covered",
      "Ask a professional to identify insects",
    ],
    hero: {
      eyebrow: "WASP & BEE CONTROL",
      title: "Identify the Insects Before Addressing a Nest",
      description:
        "Repeated flight paths around eaves or openings may involve wasps, bees, or other insects. Identification helps guide appropriate nest assessment and management options.",
    },
    seo: {
      title:
        "Wasp & Bee Identification and Control Help | Get Local Pest Control",
      description:
        "Explore possible wasp and bee nesting signs, questions about identification, and how to request an assessment around your home.",
      canonicalPath: "/pest-control/wasps-bees",
    },
    overview: {
      description:
        "Wasps and bees can differ in nesting habits and management needs. Observations of entry points and flight routes help a provider determine what may be present.",
      points: [
        "Observe repeated flight routes from a distance",
        "Note activity at eaves or openings",
        "Request identification before discussing nest work",
      ],
    },
    concerns: {
      description:
        "A visible nest or cluster does not by itself determine the appropriate action. Location, insect type, and the surrounding use of the property can influence the assessment.",
      points: [
        "Nest location affects access and planning",
        "Bee management may involve different options",
        "Disturbing a suspected nest can complicate assessment",
      ],
    },
    treatmentSteps: [
      {
        title: "Identify Wasps or Bees",
        description:
          "Review observations to distinguish the insects involved in the activity.",
      },
      {
        title: "Assess the Nest Location",
        description:
          "Examine accessible flight routes, structural openings, and surrounding conditions.",
      },
      {
        title: "Discuss Suitable Management",
        description:
          "Consider the insect type, location, and possible nest-management or relocation options.",
      },
      {
        title: "Review Exterior Attractants",
        description:
          "Discuss waste containment, outdoor food sources, and appropriate follow-up inspection.",
      },
    ],
    faqs: [
      {
        question: "Why distinguish wasps from bees first?",
        answer:
          "The insects can have different nesting habits and management options. Identification helps avoid assuming every nest needs the same approach.",
      },
      {
        question: "What details help a nest assessment?",
        answer:
          "Note the location, repeated entry points, and visible activity from a distance. Photographs can be useful when obtained without disturbing the nest.",
      },
      {
        question: "Can bee management involve relocation?",
        answer:
          "Relocation may be an option in some circumstances. A provider can discuss suitability after identifying the insects and assessing the location.",
      },
    ],
    relatedSlugs: ["wasps", "bees", "stinging-pests"],
  },
  {
    id: "general-pest-control-control",
    slug: "general-pest-control",
    name: "General Pest",
    singularName: "General Pest",
    serviceName: "General Pest Control",
    shortDescription:
      "A starting point for recurring pest activity around your home.",
    category: PEST_CATEGORIES.SPECIALTY,
    icon: "ShieldCheck",
    signs: [
      "Several types of pest activity",
      "Recurring sightings around the home",
      "Unidentified insects in living areas",
    ],
    preventionTips: [
      "Record where activity occurs",
      "Reduce food and moisture sources",
      "Discuss a property-wide assessment",
    ],
    hero: {
      eyebrow: "GENERAL PEST CONTROL",
      title: "Start With a Clearer Picture of Your Pest Problem",
      description:
        "Unidentified insects or recurring activity in several rooms can be difficult to interpret. A property-wide assessment can help identify pests, affected areas, and practical next steps.",
    },
    seo: {
      title:
        "General Pest Control & Home Inspection Help | Get Local Pest Control",
      description:
        "Find a starting point for unidentified or recurring household pests, property assessments, prevention questions, and local pest-control help.",
      canonicalPath: "/pest-control/general-pest-control",
    },
    overview: {
      description:
        "General pest control begins with the activity present rather than assuming one solution covers every concern. Observations from several rooms can help guide the inspection.",
      points: [
        "Describe unidentified visitors",
        "Record recurring activity by location",
        "Discuss which pests the proposed service covers",
      ],
    },
    concerns: {
      description:
        "Different pests can share the same attracting conditions while needing different management approaches. Broad symptoms should be assessed before choosing treatment.",
      points: [
        "Several species may be involved",
        "Food and moisture sources can overlap",
        "Service scope should be confirmed with the provider",
      ],
    },
    treatmentSteps: [
      {
        title: "Collect Property Observations",
        description:
          "Review sightings, physical signs, and the rooms or exterior areas involved.",
      },
      {
        title: "Identify the Pests Present",
        description:
          "Distinguish the observed pests and assess relevant entry routes or attracting conditions.",
      },
      {
        title: "Discuss the Service Scope",
        description:
          "Clarify which pest concerns and areas an appropriate treatment plan would address.",
      },
      {
        title: "Plan Practical Prevention",
        description:
          "Review food storage, moisture, access gaps, and follow-up observations for the identified pests.",
      },
    ],
    faqs: [
      {
        question: "Can I request help without knowing the pest name?",
        answer:
          "Yes. Descriptions, photographs, and locations of activity can provide a starting point for identification.",
      },
      {
        question: "Does general pest control cover every pest?",
        answer:
          "Service scope varies. Ask the provider which pests and areas are included and whether a specialty assessment is needed.",
      },
      {
        question: "What should I record about repeated pest sightings?",
        answer:
          "Note the room or exterior area, time of day, approximate frequency, and any related signs such as debris or moisture.",
      },
    ],
    relatedSlugs: ["ants", "cockroaches", "rodents"],
  },
  {
    id: "bats-control",
    slug: "bats",
    name: "Bat",
    singularName: "Bat",
    serviceName: "Bat Control",
    shortDescription:
      "Explore assessment and exclusion options for bats around structures.",
    category: PEST_CATEGORIES.WILDLIFE,
    icon: "Moon",
    signs: [
      "Repeated flight near roof openings",
      "Sounds near attic spaces",
      "Visible activity around eaves",
    ],
    preventionTips: [
      "Avoid handling or disturbing bats",
      "Ask about appropriate exclusion timing",
      "Have suspected entry points assessed",
    ],
    hero: {
      eyebrow: "BAT CONTROL",
      title: "Assess Bat Activity Around Rooflines and Attics",
      description:
        "Repeated activity near roof openings may call for a closer look at how bats are using the structure. An assessment can guide suitable exclusion planning and timing.",
    },
    seo: {
      title:
        "Bat Activity Assessment & Exclusion Help | Get Local Pest Control",
      description:
        "Explore bat observations near attics and roof openings, exclusion planning questions, and how to request a property assessment.",
      canonicalPath: "/pest-control/bats",
    },
    overview: {
      description:
        "Bat assessments focus on structural openings, recurring activity, and how the building is being used. Timing and local circumstances can affect an exclusion plan.",
      points: [
        "Note roofline entry and exit activity",
        "Describe sounds in attic spaces",
        "Ask about exclusion planning and timing",
      ],
    },
    concerns: {
      description:
        "Concealed roof and attic spaces may make entry routes difficult to identify. Sealing suspected access points without an assessment may not address the situation appropriately.",
      points: [
        "Several openings may need assessment",
        "Visible flight does not establish indoor activity",
        "Planning depends on the structure and circumstances",
      ],
    },
    treatmentSteps: [
      {
        title: "Review Bat Observations",
        description:
          "Discuss repeated flight near the building and observations from accessible areas.",
      },
      {
        title: "Assess Structural Access",
        description:
          "Inspect rooflines, attic access areas, and suspected openings without disturbing bats.",
      },
      {
        title: "Plan Suitable Exclusion",
        description:
          "Discuss an appropriate exclusion approach and timing for the circumstances found.",
      },
      {
        title: "Review Repairs and Follow-Up",
        description:
          "Identify access repairs and follow-up checks appropriate to the exclusion plan.",
      },
    ],
    faqs: [
      {
        question: "Does seeing a bat outside mean it is inside the home?",
        answer:
          "No. Outdoor sightings alone do not establish that bats are using a structure. Repeated entry or exit activity is useful context for an assessment.",
      },
      {
        question: "What should I note near the roofline?",
        answer:
          "Record where activity is repeatedly seen and the time it occurs. Share those observations without handling or disturbing bats.",
      },
      {
        question: "Why discuss exclusion timing?",
        answer:
          "Timing and the circumstances at the structure can influence an appropriate plan. A provider can explain the considerations after assessment.",
      },
    ],
    relatedSlugs: ["birds", "rodents", "outdoor-pests"],
  },
  {
    id: "birds-control",
    slug: "birds",
    name: "Bird",
    singularName: "Bird",
    serviceName: "Bird Control",
    shortDescription:
      "Understand unwanted bird activity around roofs and building openings.",
    category: PEST_CATEGORIES.WILDLIFE,
    icon: "Bird",
    signs: [
      "Repeated nesting activity",
      "Debris near rooflines",
      "Birds entering structural openings",
    ],
    preventionTips: [
      "Avoid disturbing active nests",
      "Ask about appropriate exclusion options",
      "Keep outdoor food sources contained",
    ],
    hero: {
      eyebrow: "BIRD CONTROL",
      title: "Understand Bird Activity Around Building Openings",
      description:
        "Recurring nesting activity or birds entering structural spaces may warrant an assessment. Identification and location help guide appropriate bird-management options.",
    },
    seo: {
      title:
        "Bird Activity Assessment & Management Help | Get Local Pest Control",
      description:
        "Learn what to observe around rooflines and building openings, questions about nesting activity, and how to request bird-management help.",
      canonicalPath: "/pest-control/birds",
    },
    overview: {
      description:
        "An assessment can distinguish ordinary outdoor visits from recurring use of a building opening or sheltered structural area. Bird type and nesting conditions are relevant to planning.",
      points: [
        "Document repeated use of openings",
        "Note nesting material near rooflines",
        "Discuss the species and site conditions",
      ],
    },
    concerns: {
      description:
        "Sheltered building spaces can be used repeatedly. Understanding whether nesting is involved helps determine an appropriate approach rather than simply closing an opening.",
      points: [
        "Structural shelter may attract repeat use",
        "Food sources can contribute to visits",
        "Active nesting requires appropriate planning",
      ],
    },
    treatmentSteps: [
      {
        title: "Identify the Bird Activity",
        description:
          "Review observations to understand the birds present and their use of the property.",
      },
      {
        title: "Assess Nesting and Access",
        description:
          "Inspect accessible openings, roofline shelter, and signs of nesting activity.",
      },
      {
        title: "Discuss Management Options",
        description:
          "Consider the birds, nesting conditions, and structural location when planning an approach.",
      },
      {
        title: "Review Deterrence and Maintenance",
        description:
          "Discuss suitable access management, food-source reduction, and follow-up checks.",
      },
    ],
    faqs: [
      {
        question: "When is bird activity worth an assessment?",
        answer:
          "Repeated entry into structural spaces or recurring nesting near building openings can be useful reasons to request an assessment.",
      },
      {
        question: "Should I close an opening used by birds?",
        answer:
          "Ask for an assessment first. The appropriate action depends on the birds present and whether the opening is associated with nesting.",
      },
      {
        question: "What details help with bird management?",
        answer:
          "Record the opening or roofline area involved, repeated visits, and any visible nesting material from an accessible location.",
      },
    ],
    relatedSlugs: ["bats", "outdoor-pests", "rodents"],
  },
  {
    id: "carpenter-ants-control",
    slug: "carpenter-ants",
    name: "Carpenter Ant",
    singularName: "Carpenter Ant",
    serviceName: "Carpenter Ant Control",
    shortDescription:
      "Investigate ant activity around damp wood and structural spaces.",
    category: PEST_CATEGORIES.HOUSEHOLD,
    icon: "Bug",
    signs: [
      "Large ants around wood",
      "Sawdust-like debris",
      "Activity near moisture-damaged wood",
    ],
    preventionTips: [
      "Address moisture problems",
      "Keep wood away from the foundation",
      "Request identification of wood-related activity",
    ],
    hero: {
      eyebrow: "CARPENTER ANT CONTROL",
      title: "Investigate Ant Activity Around Wood and Moisture",
      description:
        "Large ants or sawdust-like debris near wooden materials may call for identification. An assessment can review possible nesting spaces and moisture conditions.",
    },
    seo: {
      title:
        "Carpenter Ant Control & Wood Inspection Help | Get Local Pest Control",
      description:
        "Explore carpenter ant observations near damp wood, debris and moisture clues, prevention steps, and how to request an assessment.",
      canonicalPath: "/pest-control/carpenter-ants",
    },
    overview: {
      description:
        "Carpenter ant assessments can examine wood-related signs and nearby moisture. Large ants alone do not establish that a particular wooden area contains a nest.",
      points: [
        "Identify suspected carpenter ants",
        "Document debris near wood",
        "Review moisture-prone structural areas",
      ],
    },
    concerns: {
      description:
        "Activity around concealed wood can be difficult to interpret without identifying the ants and reviewing the location. Moisture-related conditions may also need attention.",
      points: [
        "Nesting spaces may be concealed",
        "Debris may have several possible causes",
        "Wood and moisture observations should be reviewed together",
      ],
    },
    treatmentSteps: [
      {
        title: "Confirm the Ant Species",
        description:
          "Review ants and observations before attributing wood-related signs to carpenter ants.",
      },
      {
        title: "Inspect Wood and Moisture",
        description:
          "Assess debris, damp materials, and accessible spaces where activity is noticed.",
      },
      {
        title: "Discuss Nest-Focused Options",
        description:
          "Consider suspected nesting areas and property conditions when planning treatment.",
      },
      {
        title: "Review Moisture and Wood Storage",
        description:
          "Discuss leaks, exterior wood storage, and observations to monitor after the assessment.",
      },
    ],
    faqs: [
      {
        question: "Do large ants always mean carpenter ants?",
        answer:
          "No. Size alone is not a complete identification. A provider can review the ants alongside where they are found.",
      },
      {
        question: "What can sawdust-like debris indicate?",
        answer:
          "Debris near wood can have more than one cause. Its location and nearby activity can help guide an inspection.",
      },
      {
        question: "Why review moisture during an assessment?",
        answer:
          "Damp wood and moisture-prone areas can be relevant to suspected nesting. A provider can discuss those conditions with the observed signs.",
      },
    ],
    relatedSlugs: ["ants", "termites", "beetles"],
  },
  {
    id: "centipedes-millipedes-control",
    slug: "centipedes-millipedes",
    name: "Centipede & Millipede",
    singularName: "Centipede & Millipede",
    serviceName: "Centipede & Millipede Control",
    shortDescription:
      "Identify many-legged visitors in damp and sheltered areas.",
    category: PEST_CATEGORIES.HOUSEHOLD,
    icon: "Bug",
    signs: [
      "Sightings near basement walls",
      "Activity in damp storage areas",
      "Insects near door thresholds",
    ],
    preventionTips: [
      "Address indoor moisture",
      "Maintain exterior drainage",
      "Reduce debris beside the foundation",
    ],
    hero: {
      eyebrow: "CENTIPEDE & MILLIPEDE CONTROL",
      title: "Identify Many-Legged Visitors in Damp Spaces",
      description:
        "Centipedes and millipedes can appear in basements, storage spaces, or near exterior thresholds. Identification helps distinguish the visitors and review relevant moisture conditions.",
    },
    seo: {
      title:
        "Centipede & Millipede Identification Help | Get Local Pest Control",
      description:
        "Explore centipede and millipede observations in damp spaces, moisture and entry-point considerations, and how to request pest-control help.",
      canonicalPath: "/pest-control/centipedes-millipedes",
    },
    overview: {
      description:
        "Centipedes and millipedes are distinct pests. Where they are seen and the surrounding moisture conditions can provide useful clues for a home assessment.",
      points: [
        "Distinguish centipedes from millipedes",
        "Review basement and threshold sightings",
        "Note damp debris near the foundation",
      ],
    },
    concerns: {
      description:
        "Recurring visitors may reflect damp shelter, exterior debris, or entry routes. The assessment should consider those conditions rather than treating every many-legged visitor the same way.",
      points: [
        "Moisture may support sheltered activity",
        "Exterior material can be relevant",
        "Different visitors may need different approaches",
      ],
    },
    treatmentSteps: [
      {
        title: "Identify the Many-Legged Pest",
        description:
          "Review observations to distinguish centipedes, millipedes, and other visitors.",
      },
      {
        title: "Inspect Damp Activity Areas",
        description:
          "Assess basements, storage corners, thresholds, and exterior debris beside the building.",
      },
      {
        title: "Discuss Source and Entry Management",
        description:
          "Consider moisture, shelter, and entry routes when discussing treatment options.",
      },
      {
        title: "Review Drainage and Maintenance",
        description:
          "Discuss exterior drainage, indoor moisture, and accessible gap maintenance.",
      },
    ],
    faqs: [
      {
        question: "Are centipedes and millipedes the same pest?",
        answer:
          "No. They are different visitors with different behavior, so identification is useful before choosing an approach.",
      },
      {
        question: "Why are they appearing near a basement?",
        answer:
          "Damp conditions, shelter, or accessible entry gaps may be relevant. Record the location and surrounding conditions for an assessment.",
      },
      {
        question: "Can exterior debris matter?",
        answer:
          "Materials beside the foundation can provide sheltered conditions. Ask which moisture and debris-management steps suit the property.",
      },
    ],
    relatedSlugs: ["silverfish", "earwigs", "spiders"],
  },
  {
    id: "crickets-control",
    slug: "crickets",
    name: "Cricket",
    singularName: "Cricket",
    serviceName: "Cricket Control",
    shortDescription:
      "Find the source of cricket activity in and around your home.",
    category: PEST_CATEGORIES.HOUSEHOLD,
    icon: "Bug",
    signs: [
      "Repeated chirping indoors",
      "Sightings around doors",
      "Activity in basement spaces",
    ],
    preventionTips: [
      "Maintain screens and door seals",
      "Reduce sheltered clutter",
      "Check exterior entry gaps",
    ],
    hero: {
      eyebrow: "CRICKET CONTROL",
      title: "Find the Source of Crickets Around Your Home",
      description:
        "Repeated chirping or sightings near thresholds and basement spaces can help locate cricket activity. A closer look can distinguish the visitors and review possible access routes.",
    },
    seo: {
      title:
        "Cricket Control & Entry-Point Assessment | Get Local Pest Control",
      description:
        "Explore cricket chirping and sightings around doors or basements, shelter reduction, and how to request cricket-control help.",
      canonicalPath: "/pest-control/crickets",
    },
    overview: {
      description:
        "Cricket activity can vary between outdoor visitors and sheltered indoor areas. Sounds and repeated sightings provide useful location clues.",
      points: [
        "Note repeated chirping locations",
        "Review doors and basement access",
        "Identify the crickets being observed",
      ],
    },
    concerns: {
      description:
        "Sheltered clutter or openings near thresholds can be relevant to repeat visits. Not every sound identifies the source or extent of activity.",
      points: [
        "Sounds may come from concealed spaces",
        "Exterior shelter can be nearby",
        "Screens and door seals may need attention",
      ],
    },
    treatmentSteps: [
      {
        title: "Identify Cricket Observations",
        description:
          "Review sounds, sightings, and where activity is repeatedly noticed.",
      },
      {
        title: "Inspect Shelter and Thresholds",
        description:
          "Assess basement access, door seals, and sheltered storage spaces.",
      },
      {
        title: "Discuss a Location-Specific Approach",
        description:
          "Consider indoor activity and exterior sources when choosing an appropriate plan.",
      },
      {
        title: "Review Access Maintenance",
        description:
          "Discuss screens, door seals, and reducing sheltered clutter near activity areas.",
      },
    ],
    faqs: [
      {
        question: "Can chirping help locate a cricket problem?",
        answer:
          "It can provide a starting point. Note when and where sounds recur, along with any visible insects.",
      },
      {
        question: "Why check door seals for crickets?",
        answer:
          "Threshold gaps may provide access for outdoor visitors. An assessment can review whether those routes are relevant.",
      },
      {
        question: "Should all cricket sightings receive the same treatment?",
        answer:
          "No. The species, location, and extent of activity can affect whether source reduction or other management is appropriate.",
      },
    ],
    relatedSlugs: ["earwigs", "centipedes-millipedes", "outdoor-pests"],
  },
  {
    id: "flies-control",
    slug: "flies",
    name: "Fly",
    singularName: "Fly",
    serviceName: "Fly Control",
    shortDescription: "Identify attractants behind recurring fly activity.",
    category: PEST_CATEGORIES.FLYING,
    icon: "Wind",
    signs: [
      "Repeated flies near windows",
      "Activity around garbage",
      "Insects near organic debris",
    ],
    preventionTips: [
      "Keep waste containers closed",
      "Clean spills and residues",
      "Maintain screens",
    ],
    hero: {
      eyebrow: "FLY CONTROL",
      title: "Look Beyond Fly Sightings to the Source",
      description:
        "Flies around windows, waste, or organic debris may point to an attracting source. Identification and source assessment can guide a more focused management approach.",
    },
    seo: {
      title:
        "Fly Control & Source Identification Help | Get Local Pest Control",
      description:
        "Learn what recurring fly activity may indicate, waste and screen maintenance steps, and how to request a fly-source assessment.",
      canonicalPath: "/pest-control/flies",
    },
    overview: {
      description:
        "Different flies can be associated with different sources. The locations of sightings and nearby residues are useful parts of an assessment.",
      points: [
        "Identify the flies present",
        "Document repeated activity near windows",
        "Review waste and organic residues",
      ],
    },
    concerns: {
      description:
        "Removing visible flies without examining an attracting source may leave recurring activity unexplained. The assessment can review conditions beyond the room where flies gather.",
      points: [
        "Window sightings may not reveal the source",
        "Waste containment may need review",
        "Species identification helps focus inspection",
      ],
    },
    treatmentSteps: [
      {
        title: "Identify the Fly",
        description:
          "Review visible flies and the places they repeatedly gather.",
      },
      {
        title: "Inspect Potential Sources",
        description:
          "Assess accessible waste areas, organic residues, and relevant entry routes.",
      },
      {
        title: "Discuss Source-Focused Management",
        description:
          "Consider the fly species and source conditions before selecting a treatment approach.",
      },
      {
        title: "Review Cleaning and Screens",
        description:
          "Discuss waste containment, residue removal, and screen maintenance for the property.",
      },
    ],
    faqs: [
      {
        question: "Do flies near a window mean the source is there?",
        answer:
          "Not necessarily. Flies may gather near windows even when the attracting source is elsewhere.",
      },
      {
        question: "Why identify the type of fly?",
        answer:
          "Different flies may be associated with different sources. Identification helps focus the assessment.",
      },
      {
        question: "What fly-prevention habits are useful to discuss?",
        answer:
          "Waste containment, residue cleanup, and maintaining screens are practical starting points. A provider can tailor advice to the source found.",
      },
    ],
    relatedSlugs: ["gnats", "moths", "outdoor-pests"],
  },
  {
    id: "mice-control",
    slug: "mice",
    name: "Mice",
    singularName: "Mouse",
    serviceName: "Mice Control",
    shortDescription: "Find help with mouse activity and small entry gaps.",
    category: PEST_CATEGORIES.WILDLIFE,
    icon: "Rat",
    signs: [
      "Small droppings near food",
      "Gnawed packaging",
      "Activity around stored items",
    ],
    preventionTips: [
      "Store food in sealed containers",
      "Assess small structural gaps",
      "Reduce clutter around storage",
    ],
    hero: {
      eyebrow: "MICE CONTROL",
      title: "Assess Mouse Activity and Small Entry Gaps",
      description:
        "Small droppings, gnawed packaging, or activity around stored items may involve mice. Identification and an inspection of accessible gaps can help guide management.",
    },
    seo: {
      title: "Mice Control & Home Exclusion Help | Get Local Pest Control",
      description:
        "Explore mouse signs near food and storage, possible access gaps, prevention steps, and how to request mice-control help.",
      canonicalPath: "/pest-control/mice",
    },
    overview: {
      description:
        "A mouse assessment can review storage spaces, food access, and small structural openings. Distinguishing mice from other rodents helps clarify the approach.",
      points: [
        "Document signs near stored food",
        "Review accessible utility openings",
        "Assess clutter around storage areas",
      ],
    },
    concerns: {
      description:
        "Small, concealed routes can make indoor mouse access difficult to locate. Reviewing signs and structural conditions together helps avoid overlooking possible entry areas.",
      points: [
        "Packaging may show gnaw marks",
        "Enclosed storage may conceal activity",
        "Small gaps may require closer assessment",
      ],
    },
    treatmentSteps: [
      {
        title: "Confirm Suspected Mouse Activity",
        description:
          "Review droppings, gnaw marks, and sightings to assess the rodent involved.",
      },
      {
        title: "Inspect Small Access Routes",
        description:
          "Examine accessible gaps near utilities, thresholds, and storage spaces.",
      },
      {
        title: "Discuss Mouse Management",
        description:
          "Select an approach suited to the activity areas and conditions in the home.",
      },
      {
        title: "Review Exclusion and Food Storage",
        description:
          "Discuss gap assessment, sealed containers, clutter reduction, and follow-up checks.",
      },
    ],
    faqs: [
      {
        question: "Do small droppings confirm mice?",
        answer:
          "They may be a clue, but a provider should assess signs alongside other observations before assuming the species.",
      },
      {
        question: "Why check utility openings for mice?",
        answer:
          "Accessible openings can be possible routes into a building. The assessment can determine which gaps need attention.",
      },
      {
        question: "What should I note around stored food?",
        answer:
          "Document gnawed packaging, repeated sightings, and the affected storage locations for the inspection.",
      },
    ],
    relatedSlugs: ["rats", "rodents", "general-pest-control"],
  },
  {
    id: "moths-control",
    slug: "moths",
    name: "Moth",
    singularName: "Moth",
    serviceName: "Moth Control",
    shortDescription: "Identify moth activity around stored food or fabrics.",
    category: PEST_CATEGORIES.SPECIALTY,
    icon: "Wind",
    signs: [
      "Small moths in storage areas",
      "Changes to stored fabrics",
      "Insects around pantry products",
    ],
    preventionTips: [
      "Inspect affected stored items",
      "Keep storage areas clean",
      "Confirm the moth species before treatment",
    ],
    hero: {
      eyebrow: "MOTH CONTROL",
      title: "Identify Moth Activity Around Food or Fabrics",
      description:
        "Moths near dry goods or stored fabrics can have different sources. Identifying the moth and inspecting affected items helps guide an appropriate response.",
    },
    seo: {
      title:
        "Moth Control & Stored-Item Inspection Help | Get Local Pest Control",
      description:
        "Explore moth observations near pantry foods and fabrics, storage inspection steps, and how to request moth-identification help.",
      canonicalPath: "/pest-control/moths",
    },
    overview: {
      description:
        "Moths observed near food storage may call for a different assessment from moths associated with textiles. The items and spaces involved help focus identification.",
      points: [
        "Note whether food or fabrics are involved",
        "Inspect affected stored items",
        "Record repeated moth sightings by location",
      ],
    },
    concerns: {
      description:
        "Adult moth sightings alone may not reveal which stored items are involved. A source-focused inspection can review both insects and changes to materials.",
      points: [
        "Several stored items may need review",
        "Food and textile concerns differ",
        "Visible moths may gather away from the source",
      ],
    },
    treatmentSteps: [
      {
        title: "Identify the Moth Type",
        description:
          "Review insects and whether observations relate to food storage or textiles.",
      },
      {
        title: "Inspect Affected Stored Items",
        description:
          "Assess accessible packaging, shelving, fabrics, and nearby signs of activity.",
      },
      {
        title: "Discuss Source-Specific Options",
        description:
          "Consider the moth type and affected materials when choosing management steps.",
      },
      {
        title: "Review Storage and Follow-Up",
        description:
          "Discuss cleaning, suitable containment, item inspection, and monitoring new sightings.",
      },
    ],
    faqs: [
      {
        question: "Are pantry moths and fabric-related moths managed alike?",
        answer:
          "They can involve different sources and materials. Identification helps determine which items and spaces need attention.",
      },
      {
        question: "What should I check when moths keep appearing?",
        answer:
          "Note nearby dry-food packages or stored fabrics and any visible changes to them. Share the observations during an assessment.",
      },
      {
        question: "Can moths near a window come from another area?",
        answer:
          "Yes. The location of adult sightings may not identify the source, so inspection may include nearby storage spaces.",
      },
    ],
    relatedSlugs: ["pantry-pests", "stored-product-pests", "beetles"],
  },
  {
    id: "rats-control",
    slug: "rats",
    name: "Rat",
    singularName: "Rat",
    serviceName: "Rat Control",
    shortDescription:
      "Address rat activity around buildings and outdoor shelter.",
    category: PEST_CATEGORIES.WILDLIFE,
    icon: "Rat",
    signs: [
      "Gnaw marks around structures",
      "Droppings in enclosed areas",
      "Activity near outdoor debris",
    ],
    preventionTips: [
      "Secure food and waste",
      "Remove sheltering clutter",
      "Request assessment of entry routes",
    ],
    hero: {
      eyebrow: "RAT CONTROL",
      title: "Review Rat Activity Around Structures and Shelter",
      description:
        "Gnaw marks, droppings, or repeated activity near outdoor debris may involve rats. An assessment can examine the signs, nearby shelter, and possible routes into a building.",
    },
    seo: {
      title: "Rat Control & Entry-Route Assessment | Get Local Pest Control",
      description:
        "Learn what rat activity around structures may look like, shelter and waste prevention steps, and how to request rat-control help.",
      canonicalPath: "/pest-control/rats",
    },
    overview: {
      description:
        "Rat assessments can review both indoor signs and surrounding exterior conditions. Waste, shelter, and structural routes may all be relevant.",
      points: [
        "Review gnaw marks near structures",
        "Document activity around outdoor shelter",
        "Inspect accessible routes into the building",
      ],
    },
    concerns: {
      description:
        "Outdoor shelter can be relevant even when signs are first noticed inside. Examining surrounding conditions helps clarify how rats may be using the property.",
      points: [
        "Debris can offer sheltered spaces",
        "Food and waste access may attract visits",
        "Structural openings may connect activity areas",
      ],
    },
    treatmentSteps: [
      {
        title: "Identify Suspected Rat Signs",
        description:
          "Review droppings, gnaw marks, and sightings to assess the rodent involved.",
      },
      {
        title: "Inspect Shelter and Building Access",
        description:
          "Assess exterior debris, storage spaces, and possible structural entry routes.",
      },
      {
        title: "Discuss Rat Management Options",
        description:
          "Consider the species, activity areas, and building conditions when planning treatment.",
      },
      {
        title: "Review Waste and Exclusion",
        description:
          "Discuss secure waste, shelter reduction, access repairs, and follow-up observations.",
      },
    ],
    faqs: [
      {
        question: "Why inspect outside for a rat problem noticed indoors?",
        answer:
          "Exterior shelter and access routes may connect to indoor activity. An assessment can review both locations.",
      },
      {
        question: "What should I record about suspected rat signs?",
        answer:
          "Note gnaw marks, droppings, repeat sightings, and nearby waste or debris without disturbing the suspected activity areas.",
      },
      {
        question: "Can reducing shelter be part of rat management?",
        answer:
          "Yes. Discussing debris, storage, and waste conditions can complement an approach suited to the property.",
      },
    ],
    relatedSlugs: ["mice", "rodents", "outdoor-pests"],
  },
  {
    id: "scorpions-control",
    slug: "scorpions",
    name: "Scorpion",
    singularName: "Scorpion",
    serviceName: "Scorpion Control",
    shortDescription: "Understand scorpion sightings and sheltered activity.",
    category: PEST_CATEGORIES.OUTDOOR,
    icon: "Bug",
    signs: [
      "Sightings near sheltered corners",
      "Activity around stacked materials",
      "Visitors near entry thresholds",
    ],
    preventionTips: [
      "Avoid handling unfamiliar pests",
      "Reduce debris beside the house",
      "Check door seals and accessible gaps",
    ],
    hero: {
      eyebrow: "SCORPION CONTROL",
      title: "Assess Scorpion Sightings Near Sheltered Areas",
      description:
        "Scorpions observed near stacked materials, corners, or thresholds may warrant identification. A property assessment can review shelter and accessible entry areas.",
    },
    seo: {
      title:
        "Scorpion Control & Property Assessment Help | Get Local Pest Control",
      description:
        "Explore scorpion observations near shelter and entry thresholds, debris and gap-management considerations, and how to request an assessment.",
      canonicalPath: "/pest-control/scorpions",
    },
    overview: {
      description:
        "An assessment can review where scorpions have been seen and the sheltering conditions nearby. Photographs and location details can help with identification.",
      points: [
        "Record sightings without handling scorpions",
        "Review stacked materials near the home",
        "Assess door seals and accessible gaps",
      ],
    },
    concerns: {
      description:
        "Sheltered exterior areas can be difficult to review from isolated sightings. Nearby materials and thresholds may need a closer assessment.",
      points: [
        "Stacked items may conceal shelter",
        "Accessible entry routes may be relevant",
        "Identification should precede treatment planning",
      ],
    },
    treatmentSteps: [
      {
        title: "Review Scorpion Observations",
        description:
          "Discuss sightings and photographs to understand where activity may be occurring.",
      },
      {
        title: "Inspect Sheltered Exterior Spaces",
        description:
          "Review accessible stacked materials, corners, and debris near building edges.",
      },
      {
        title: "Discuss a Property-Specific Approach",
        description:
          "Consider activity areas, shelter, and entry conditions when selecting management options.",
      },
      {
        title: "Review Shelter and Gap Reduction",
        description:
          "Discuss debris management, door seals, and appropriate follow-up observations.",
      },
    ],
    faqs: [
      {
        question: "What location details help a scorpion assessment?",
        answer:
          "Record repeated sightings near corners, stored materials, or thresholds. Share photographs when available without handling the pest.",
      },
      {
        question: "Why review stacked items near a building?",
        answer:
          "Sheltered spaces around stored materials can be relevant to activity. A provider can assess whether those conditions need attention.",
      },
      {
        question: "Should suspected scorpions be identified first?",
        answer:
          "Yes. Identification and an assessment of the activity areas help guide an approach appropriate to the property.",
      },
    ],
    relatedSlugs: ["outdoor-pests", "spiders", "general-pest-control"],
  },
  {
    id: "silverfish-control",
    slug: "silverfish",
    name: "Silverfish",
    singularName: "Silverfish",
    serviceName: "Silverfish Control",
    shortDescription: "Find help with insects in damp storage and paper goods.",
    category: PEST_CATEGORIES.HOUSEHOLD,
    icon: "Bug",
    signs: [
      "Small insects in damp spaces",
      "Activity around paper storage",
      "Recurring sightings in bathrooms",
    ],
    preventionTips: [
      "Address excess moisture",
      "Store paper goods neatly",
      "Reduce clutter in storage spaces",
    ],
    hero: {
      eyebrow: "SILVERFISH CONTROL",
      title: "Investigate Silverfish Around Damp Storage Spaces",
      description:
        "Recurring insects around paper goods, bathrooms, or sheltered storage may be silverfish. Identification and a review of moisture can help guide practical management.",
    },
    seo: {
      title:
        "Silverfish Control & Moisture Assessment Help | Get Local Pest Control",
      description:
        "Learn about silverfish sightings around paper storage and damp spaces, moisture prevention steps, and how to request an assessment.",
      canonicalPath: "/pest-control/silverfish",
    },
    overview: {
      description:
        "Silverfish assessments can review insects in sheltered areas alongside paper storage and moisture conditions. Similar-looking visitors should be identified before treatment.",
      points: [
        "Document activity around paper goods",
        "Note recurring bathroom sightings",
        "Review damp storage conditions",
      ],
    },
    concerns: {
      description:
        "Stored materials and concealed moisture can be relevant to recurring silverfish activity. Inspection may include more than the location of the first sighting.",
      points: [
        "Clutter can make inspection harder",
        "Moisture-prone spaces may need attention",
        "Paper and other stored materials can be involved",
      ],
    },
    treatmentSteps: [
      {
        title: "Identify Suspected Silverfish",
        description:
          "Review observed insects and where they appear around the home.",
      },
      {
        title: "Inspect Paper and Damp Storage",
        description:
          "Assess accessible shelving, clutter, bathrooms, and moisture-prone corners.",
      },
      {
        title: "Discuss Shelter-Focused Management",
        description:
          "Consider the activity locations and storage conditions when discussing treatment.",
      },
      {
        title: "Review Moisture and Organization",
        description:
          "Discuss moisture reduction, orderly storage, and follow-up sightings.",
      },
    ],
    faqs: [
      {
        question: "Why are silverfish noticed near paper storage?",
        answer:
          "Stored materials and sheltered conditions can be relevant to activity. A provider can review the insects and nearby storage.",
      },
      {
        question: "Can moisture be part of a silverfish assessment?",
        answer:
          "Yes. Damp rooms and storage conditions are useful areas to review alongside visible signs.",
      },
      {
        question: "What should I note about recurring silverfish?",
        answer:
          "Record the locations, nearby stored materials, and any moisture issues to help focus the inspection.",
      },
    ],
    relatedSlugs: ["centipedes-millipedes", "cockroaches", "beetles"],
  },
  {
    id: "stinging-pests-control",
    slug: "stinging-pests",
    name: "Stinging Pest",
    singularName: "Stinging Pest",
    serviceName: "Stinging Pest Control",
    shortDescription:
      "Identify stinging insects before choosing an appropriate approach.",
    category: PEST_CATEGORIES.FLYING,
    icon: "Bug",
    signs: [
      "Repeated flight paths",
      "Visible nesting activity",
      "Insects near eaves or sheltered spaces",
    ],
    preventionTips: [
      "Avoid disturbing suspected nests",
      "Keep outdoor food covered",
      "Request professional identification",
    ],
    hero: {
      eyebrow: "STINGING PEST CONTROL",
      title: "Get a Clearer Identification of Nesting Insects",
      description:
        "Repeated flight routes or visible nests near gathering areas may involve different stinging insects. Species and nest location help guide an appropriate assessment.",
    },
    seo: {
      title:
        "Stinging Pest Identification & Nest Assessment | Get Local Pest Control",
      description:
        "Explore observations of nesting and stinging insects, questions about nest locations, and how to request identification and management help.",
      canonicalPath: "/pest-control/stinging-pests",
    },
    overview: {
      description:
        "A stinging-pest assessment begins by identifying the insects and how they are using the location. A visible nest alone does not establish the management approach.",
      points: [
        "Observe flight routes from a distance",
        "Note nesting around eaves or sheltered areas",
        "Request identification of the insects involved",
      ],
    },
    concerns: {
      description:
        "Nest access and surrounding property use can affect planning. Different insects and nesting conditions may call for different management options.",
      points: [
        "Structural locations can complicate access",
        "Outdoor gathering spaces may need review",
        "Nest disturbance should not replace assessment",
      ],
    },
    treatmentSteps: [
      {
        title: "Identify the Stinging Insect",
        description:
          "Review observations to distinguish the insects present near the suspected nest.",
      },
      {
        title: "Assess Nest Location and Access",
        description:
          "Examine accessible flight routes, surrounding areas, and possible structural shelter.",
      },
      {
        title: "Discuss Appropriate Nest Management",
        description:
          "Consider the insect type and nest location when evaluating management options.",
      },
      {
        title: "Review Outdoor Attractants",
        description:
          "Discuss covered food, contained waste, and follow-up assessment of nearby activity.",
      },
    ],
    faqs: [
      {
        question: "Do all stinging insects use the same kind of nest?",
        answer:
          "No. Nesting habits can differ, so identification helps determine which locations and options to assess.",
      },
      {
        question: "What should I describe when requesting nest help?",
        answer:
          "Note the location, repeated flight routes, and nearby use of the property. Avoid disturbing the suspected nest to collect information.",
      },
      {
        question: "Can a nest location change the management plan?",
        answer:
          "Yes. Structural access and surrounding conditions can influence which options are appropriate.",
      },
    ],
    relatedSlugs: ["wasps", "bees", "wasps-bees"],
  },
  {
    id: "wasps-control",
    slug: "wasps",
    name: "Wasp",
    singularName: "Wasp",
    serviceName: "Wasp Control",
    shortDescription:
      "Understand wasp activity and nests around your property.",
    category: PEST_CATEGORIES.FLYING,
    icon: "Bug",
    signs: [
      "Wasps along repeated routes",
      "Nests beneath eaves",
      "Activity around outdoor gathering areas",
    ],
    preventionTips: [
      "Avoid disturbing nests",
      "Cover food and waste",
      "Discuss nest assessment with a professional",
    ],
    hero: {
      eyebrow: "WASP CONTROL",
      title: "Assess Wasp Nests and Repeated Flight Routes",
      description:
        "Wasps repeatedly using eaves or outdoor shelter may indicate nearby nesting. Identification and a location assessment help guide suitable management options.",
    },
    seo: {
      title: "Wasp Control & Nest Inspection Help | Get Local Pest Control",
      description:
        "Learn what to observe around suspected wasp nests and flight routes, exterior prevention considerations, and how to request wasp-control help.",
      canonicalPath: "/pest-control/wasps",
    },
    overview: {
      description:
        "Wasp assessments can review repeated flight paths, visible nests, and sheltered structural areas. Where activity occurs is relevant to planning.",
      points: [
        "Record routes near eaves",
        "Note visible nests from a distance",
        "Describe nearby gathering areas",
      ],
    },
    concerns: {
      description:
        "A nest beneath an eave can require a different assessment from activity in another sheltered location. Insect type and access should be established before choosing an approach.",
      points: [
        "Nest access may vary by location",
        "Food and waste can attract outdoor visits",
        "Repeated routes can provide location clues",
      ],
    },
    treatmentSteps: [
      {
        title: "Identify Suspected Wasps",
        description:
          "Review observations and nest characteristics to assess the insects present.",
      },
      {
        title: "Inspect Nesting Access",
        description:
          "Examine accessible eaves, sheltered spaces, and repeated entry routes.",
      },
      {
        title: "Discuss Wasp Nest Options",
        description:
          "Consider species, nest access, and surrounding property conditions when planning management.",
      },
      {
        title: "Review Exterior Maintenance",
        description:
          "Discuss covered food, contained waste, and follow-up checks around the activity area.",
      },
    ],
    faqs: [
      {
        question: "Do repeated wasp flight paths indicate a nest?",
        answer:
          "They may provide a clue to nearby activity. A provider can assess whether the route is associated with nesting.",
      },
      {
        question: "What information helps with a nest beneath an eave?",
        answer:
          "Describe the location and repeated insect activity from a distance. Access and identification can then be assessed.",
      },
      {
        question: "Can outdoor food contribute to wasp visits?",
        answer:
          "Exposed food or waste can be relevant to outdoor activity. Containment can be part of a prevention discussion.",
      },
    ],
    relatedSlugs: ["stinging-pests", "wasps-bees", "bees"],
  },
  {
    id: "bees-control",
    slug: "bees",
    name: "Bee",
    singularName: "Bee",
    serviceName: "Bee Control",
    shortDescription:
      "Find help assessing bee activity and appropriate management options.",
    category: PEST_CATEGORIES.FLYING,
    icon: "Bug",
    signs: [
      "Repeated visits to structural openings",
      "Clusters around a sheltered area",
      "Visible nest-related activity",
    ],
    preventionTips: [
      "Avoid disturbing colonies",
      "Ask about relocation where appropriate",
      "Request species identification",
    ],
    hero: {
      eyebrow: "BEE CONTROL",
      title: "Explore Appropriate Options for Bee Activity",
      description:
        "Bee clusters or repeated visits to an opening may call for identification and a site assessment. Management options can depend on the bee type, location, and nesting circumstances.",
    },
    seo: {
      title:
        "Bee Activity Assessment & Management Options | Get Local Pest Control",
      description:
        "Explore bee clusters and structural-opening observations, questions about identification or relocation, and how to request an assessment.",
      canonicalPath: "/pest-control/bees",
    },
    overview: {
      description:
        "Bee activity can involve different situations, from outdoor visits to use of structural spaces. A provider can assess the insects and discuss suitable management or relocation options.",
      points: [
        "Note clusters and repeated entry points",
        "Identify the bee type",
        "Discuss options suited to the location",
      ],
    },
    concerns: {
      description:
        "Assuming that every cluster or opening requires the same response can overlook differences in the insects and site. Identification helps clarify the appropriate next step.",
      points: [
        "Structural access may affect planning",
        "Clustering and nesting are different observations",
        "Relocation suitability depends on the circumstances",
      ],
    },
    treatmentSteps: [
      {
        title: "Identify the Bee Activity",
        description:
          "Review observations to understand the bees present and the type of activity.",
      },
      {
        title: "Assess the Site and Openings",
        description:
          "Examine accessible entry points, clustering locations, and surrounding conditions.",
      },
      {
        title: "Discuss Suitable Bee Management",
        description:
          "Review appropriate management and possible relocation options for the situation.",
      },
      {
        title: "Plan Follow-Up and Access Review",
        description:
          "Discuss any suitable structural maintenance and how remaining activity should be observed.",
      },
    ],
    faqs: [
      {
        question: "Does a cluster of bees confirm a nest in the building?",
        answer:
          "Not necessarily. A cluster and repeated use of a structural opening are different observations that a provider can assess.",
      },
      {
        question: "Can bee relocation be considered?",
        answer:
          "It may be appropriate in some situations. Suitability depends on identification, location, and the circumstances found.",
      },
      {
        question: "What details should I share about bee activity?",
        answer:
          "Describe clusters, repeated visits to openings, and the location involved without disturbing the insects.",
      },
    ],
    relatedSlugs: ["wasps-bees", "stinging-pests", "wasps"],
  },
  {
    id: "beetles-control",
    slug: "beetles",
    name: "Beetle",
    singularName: "Beetle",
    serviceName: "Beetle Control",
    shortDescription:
      "Identify beetles around stored items, fabrics, and entry points.",
    category: PEST_CATEGORIES.HOUSEHOLD,
    icon: "Bug",
    signs: [
      "Repeated beetle sightings",
      "Activity around stored goods",
      "Insects near window edges",
    ],
    preventionTips: [
      "Inspect affected stored items",
      "Keep containers closed",
      "Request identification before treatment",
    ],
    hero: {
      eyebrow: "BEETLE CONTROL",
      title: "Identify Beetles Around Stored Items and Entry Points",
      description:
        "Beetles near food storage, fabrics, or windows can have different sources. Identification and inspection of affected materials help guide an appropriate management approach.",
    },
    seo: {
      title:
        "Beetle Control & Stored-Material Assessment | Get Local Pest Control",
      description:
        "Explore beetle sightings around stored goods, fabrics, and windows, inspection considerations, and how to request beetle-identification help.",
      canonicalPath: "/pest-control/beetles",
    },
    overview: {
      description:
        "Beetle concerns can involve different species and materials. The insects observed and changes to nearby stored goods provide useful assessment details.",
      points: [
        "Record insects near affected items",
        "Note changes to packaging or fabrics",
        "Identify beetles before planning treatment",
      ],
    },
    concerns: {
      description:
        "A beetle near a window may not identify the source of recurring activity. Inspecting relevant stored materials can help clarify what is involved.",
      points: [
        "Stored goods may need closer review",
        "Different beetles involve different materials",
        "Window sightings may be away from the source",
      ],
    },
    treatmentSteps: [
      {
        title: "Identify the Beetle",
        description:
          "Review visible insects and observations around affected rooms or materials.",
      },
      {
        title: "Inspect Relevant Stored Materials",
        description:
          "Assess accessible food packages, fabrics, or other items associated with sightings.",
      },
      {
        title: "Discuss Material-Specific Management",
        description:
          "Consider the beetle species and affected materials when choosing next steps.",
      },
      {
        title: "Review Storage and Monitoring",
        description:
          "Discuss containment, item inspection, cleaning, and recording new activity.",
      },
    ],
    faqs: [
      {
        question: "Do all household beetles have the same source?",
        answer:
          "No. Different beetles may be associated with different stored materials or outdoor entry. Identification helps guide inspection.",
      },
      {
        question: "What should I check near beetle sightings?",
        answer:
          "Note nearby food packages, fabrics, and other stored items, along with any visible changes to them.",
      },
      {
        question: "Can window sightings reveal a beetle source?",
        answer:
          "They provide a location clue but may not establish the source. A provider can review related storage and activity areas.",
      },
    ],
    relatedSlugs: ["moths", "pantry-pests", "stored-product-pests"],
  },
  {
    id: "earwigs-control",
    slug: "earwigs",
    name: "Earwig",
    singularName: "Earwig",
    serviceName: "Earwig Control",
    shortDescription:
      "Understand earwig activity around damp and sheltered spaces.",
    category: PEST_CATEGORIES.HOUSEHOLD,
    icon: "Bug",
    signs: [
      "Visitors near door thresholds",
      "Activity around damp materials",
      "Sightings in sheltered corners",
    ],
    preventionTips: [
      "Reduce moisture beside the home",
      "Clear debris near entryways",
      "Maintain door seals",
    ],
    hero: {
      eyebrow: "EARWIG CONTROL",
      title: "Review Earwig Activity Near Damp Entryways",
      description:
        "Earwigs around thresholds or damp materials may reflect sheltered conditions nearby. Identification and a review of moisture and accessible gaps can help guide management.",
    },
    seo: {
      title:
        "Earwig Control & Entryway Assessment Help | Get Local Pest Control",
      description:
        "Explore earwig sightings near damp materials and door thresholds, moisture and debris prevention steps, and how to request an assessment.",
      canonicalPath: "/pest-control/earwigs",
    },
    overview: {
      description:
        "Earwig assessments can review damp exterior materials and entry thresholds alongside indoor sightings. Those conditions may help explain recurring visitors.",
      points: [
        "Note activity near doors",
        "Review damp materials beside the home",
        "Inspect accessible threshold gaps",
      ],
    },
    concerns: {
      description:
        "Sheltered debris near an entryway may be relevant even when earwigs are first noticed indoors. The assessment can examine conditions on both sides of the threshold.",
      points: [
        "Moisture may support nearby shelter",
        "Exterior debris can need attention",
        "Door seals may be part of the review",
      ],
    },
    treatmentSteps: [
      {
        title: "Identify Suspected Earwigs",
        description:
          "Review observations to distinguish earwigs from other small visitors.",
      },
      {
        title: "Inspect Damp Shelter and Thresholds",
        description:
          "Assess accessible exterior materials, entryways, and nearby moisture.",
      },
      {
        title: "Discuss Source and Access Options",
        description:
          "Consider the activity locations and sheltering conditions when planning management.",
      },
      {
        title: "Review Entryway Maintenance",
        description:
          "Discuss moisture reduction, debris clearance, door seals, and subsequent sightings.",
      },
    ],
    faqs: [
      {
        question: "Why are earwigs appearing near a door?",
        answer:
          "Nearby damp shelter or an accessible threshold gap may be relevant. An assessment can review those conditions.",
      },
      {
        question: "Can clearing damp debris help with earwig prevention?",
        answer:
          "Debris management can be part of a prevention discussion when sheltered materials are associated with activity.",
      },
      {
        question: "What should I note about indoor earwigs?",
        answer:
          "Record where they appear, whether sightings recur near entryways, and any nearby damp materials.",
      },
    ],
    relatedSlugs: ["centipedes-millipedes", "crickets", "outdoor-pests"],
  },
  {
    id: "pantry-pests-control",
    slug: "pantry-pests",
    name: "Pantry Pest",
    singularName: "Pantry Pest",
    serviceName: "Pantry Pest Control",
    shortDescription:
      "Find the source of insects around pantry foods and containers.",
    category: PEST_CATEGORIES.SPECIALTY,
    icon: "Bug",
    signs: [
      "Insects in food cupboards",
      "Activity near dry ingredients",
      "Changes to stored packaging",
    ],
    preventionTips: [
      "Inspect dry-food packages",
      "Clean shelving and corners",
      "Use sealed food containers",
    ],
    hero: {
      eyebrow: "PANTRY PEST CONTROL",
      title: "Trace Insect Activity Around Pantry Foods",
      description:
        "Insects around cupboards or dry-food packaging may be associated with affected supplies. Identifying the insects and inspecting stored foods helps guide a source-focused approach.",
    },
    seo: {
      title:
        "Pantry Pest Control & Food-Storage Assessment | Get Local Pest Control",
      description:
        "Explore insect activity in pantry cupboards, dry-food inspection and storage steps, and how to request pantry-pest identification help.",
      canonicalPath: "/pest-control/pantry-pests",
    },
    overview: {
      description:
        "Pantry pest assessments can focus on dry-food packages, shelving, and repeated insect sightings. Several pest types may be involved, so identification remains important.",
      points: [
        "Review affected dry-food packages",
        "Note insects in cupboard corners",
        "Identify the insects associated with supplies",
      ],
    },
    concerns: {
      description:
        "Visible insects can occur away from an affected package. A broader inspection of pantry supplies and shelving can help locate the source.",
      points: [
        "Several packages may need review",
        "Shelving residues can obscure activity",
        "Sealed storage can support prevention",
      ],
    },
    treatmentSteps: [
      {
        title: "Identify Pantry Insects",
        description:
          "Review visible insects and signs around dry-food storage.",
      },
      {
        title: "Inspect Packages and Shelving",
        description:
          "Assess accessible supplies, packaging changes, and cupboard corners.",
      },
      {
        title: "Discuss Source-Focused Actions",
        description:
          "Consider the identified pests and affected products when selecting management steps.",
      },
      {
        title: "Review Cleaning and Containment",
        description:
          "Discuss shelf cleaning, sealed containers, supply rotation, and new sightings.",
      },
    ],
    faqs: [
      {
        question: "Do insects in a cupboard identify the affected food?",
        answer:
          "Not always. Insects may move away from the source, so several dry-food packages and shelf areas may need inspection.",
      },
      {
        question: "Why identify the pantry insect?",
        answer:
          "Different insects can be associated with different supplies. Identification helps focus the inspection and next steps.",
      },
      {
        question: "What storage changes should I discuss?",
        answer:
          "Sealed containers, orderly shelving, and reviewing supplies can be useful prevention topics after the affected source is assessed.",
      },
    ],
    relatedSlugs: ["moths", "beetles", "stored-product-pests"],
  },
  {
    id: "stored-product-pests-control",
    slug: "stored-product-pests",
    name: "Stored Product Pest",
    singularName: "Stored Product Pest",
    serviceName: "Stored Product Pest Control",
    shortDescription:
      "Assess pest activity in stored grains, pet food, and dry goods.",
    category: PEST_CATEGORIES.SPECIALTY,
    icon: "Bug",
    signs: [
      "Insects around stored supplies",
      "Activity inside dry-goods packaging",
      "Recurring sightings in storage spaces",
    ],
    preventionTips: [
      "Inspect affected supplies",
      "Clean storage areas",
      "Rotate and seal stored goods",
    ],
    hero: {
      eyebrow: "STORED PRODUCT PEST CONTROL",
      title: "Assess Activity in Grains, Pet Food, and Dry Goods",
      description:
        "Recurring insects around stored supplies may originate in one or more products. Inspection and identification can help determine which materials and storage areas need attention.",
    },
    seo: {
      title:
        "Stored Product Pest Inspection & Control Help | Get Local Pest Control",
      description:
        "Explore pests around grains, pet food, and dry goods, stock-inspection and storage considerations, and how to request source-assessment help.",
      canonicalPath: "/pest-control/stored-product-pests",
    },
    overview: {
      description:
        "Stored-product concerns can extend beyond a kitchen pantry to pet food, grains, and other dry supplies. Inventory and package observations help focus the assessment.",
      points: [
        "Inspect grains and dry-goods packaging",
        "Record activity near pet-food storage",
        "Review affected stock and shelving",
      ],
    },
    concerns: {
      description:
        "Stored supplies in several locations may make the source harder to locate. Reviewing packaging, product types, and stock rotation can clarify what needs attention.",
      points: [
        "Activity may involve multiple storage locations",
        "Packaging changes can offer clues",
        "Old stock and residues may need review",
      ],
    },
    treatmentSteps: [
      {
        title: "Identify Stored-Product Insects",
        description: "Review insects and signs associated with dry supplies.",
      },
      {
        title: "Assess Affected Stock",
        description:
          "Inspect accessible packages, product types, and storage locations.",
      },
      {
        title: "Discuss Product-Specific Management",
        description:
          "Consider the identified pests and materials involved when planning source-focused actions.",
      },
      {
        title: "Review Stock and Storage Practices",
        description:
          "Discuss containment, shelving cleanup, stock rotation, and follow-up inspections.",
      },
    ],
    faqs: [
      {
        question: "Can pet food be part of a stored-product assessment?",
        answer:
          "Yes. Dry pet food and other stored supplies can be relevant when insects are observed around them.",
      },
      {
        question: "How is this different from a pantry assessment?",
        answer:
          "The scope can include a wider range of dry supplies and storage locations beyond kitchen cupboards.",
      },
      {
        question: "What details help locate the source?",
        answer:
          "Record affected products, packaging changes, and where supplies are stored. Those details can guide the inspection.",
      },
    ],
    relatedSlugs: ["pantry-pests", "beetles", "moths"],
  },
  {
    id: "gnats-control",
    slug: "gnats",
    name: "Gnats",
    singularName: "Gnat",
    serviceName: "Gnats Control",
    shortDescription:
      "Identify small flying insects around moisture and organic matter.",
    category: PEST_CATEGORIES.FLYING,
    icon: "Wind",
    signs: [
      "Small insects near plants",
      "Activity around damp areas",
      "Recurring visitors near drains",
    ],
    preventionTips: [
      "Reduce standing water",
      "Clean organic residue",
      "Identify the insect and its source",
    ],
    hero: {
      eyebrow: "GNATS CONTROL",
      title: "Identify Small Flying Insects Around Moisture",
      description:
        "Small flying insects near plants, damp areas, or drains may have different sources. Identification and source review help distinguish what is present before choosing management steps.",
    },
    seo: {
      title:
        "Gnats Identification & Moisture-Source Help | Get Local Pest Control",
      description:
        "Explore small flying insects near plants and damp areas, moisture-source observations, and how to request gnat-identification help.",
      canonicalPath: "/pest-control/gnats",
    },
    overview: {
      description:
        "The word gnat is often used for small flying insects with different sources. Where they gather can help focus identification rather than assuming one source.",
      points: [
        "Note activity around plants",
        "Review damp areas and organic residues",
        "Distinguish the insects before treatment",
      ],
    },
    concerns: {
      description:
        "Small flying insects may gather away from the source. Moisture and organic residues should be reviewed alongside the observed insect type.",
      points: [
        "Plant areas may need inspection",
        "Damp residues may be relevant",
        "Similar-looking insects can need different approaches",
      ],
    },
    treatmentSteps: [
      {
        title: "Identify the Small Flying Insect",
        description:
          "Review insects and where they gather to help distinguish the visitors.",
      },
      {
        title: "Assess Moisture and Organic Sources",
        description:
          "Inspect accessible plant areas, damp spaces, and relevant residues.",
      },
      {
        title: "Discuss Source Reduction Options",
        description:
          "Consider the identified insect and source conditions when choosing management steps.",
      },
      {
        title: "Review Moisture Habits and Monitoring",
        description:
          "Discuss water collection, residue cleanup, and recording continued activity.",
      },
    ],
    faqs: [
      {
        question: "Does every small flying insect count as the same gnat?",
        answer:
          "No. Similar-looking flying insects can have different sources, so identification helps guide the response.",
      },
      {
        question: "What should I record near indoor plants?",
        answer:
          "Note where insects gather, whether the area remains damp, and how activity changes over time.",
      },
      {
        question: "Why review organic residue during a gnat assessment?",
        answer:
          "Residues and moisture can be relevant to some small flying insects. The appropriate steps depend on identification and the source found.",
      },
    ],
    relatedSlugs: ["flies", "mosquitoes", "general-pest-control"],
  },
  {
    id: "outdoor-pests-control",
    slug: "outdoor-pests",
    name: "Outdoor Pest",
    singularName: "Outdoor Pest",
    serviceName: "Outdoor Pest Control",
    shortDescription:
      "Explore pest concerns around patios, landscaping, and exterior spaces.",
    category: PEST_CATEGORIES.OUTDOOR,
    icon: "Leaf",
    signs: [
      "Recurring activity near patios",
      "Insects around standing water",
      "Pests near outdoor storage",
    ],
    preventionTips: [
      "Maintain drainage",
      "Reduce debris and shelter",
      "Discuss targeted outdoor assessment",
    ],
    hero: {
      eyebrow: "OUTDOOR PEST CONTROL",
      title: "Assess Pest Concerns Around Patios and Landscaping",
      description:
        "Outdoor pest activity can vary across patios, planting areas, storage, and drainage. A site assessment can identify the visitors and focus management on relevant conditions.",
    },
    seo: {
      title:
        "Outdoor Pest Control & Property Assessment | Get Local Pest Control",
      description:
        "Explore pest concerns around patios, landscaping, and exterior storage, practical drainage and shelter steps, and how to request an assessment.",
      canonicalPath: "/pest-control/outdoor-pests",
    },
    overview: {
      description:
        "Outdoor pest management can involve several species and activity areas. Observations from frequently used spaces help prioritize a property assessment.",
      points: [
        "Describe activity around patios",
        "Review standing water and drainage",
        "Identify pests near landscaping or storage",
      ],
    },
    concerns: {
      description:
        "Conditions may change with weather, vegetation, and how outdoor spaces are used. A targeted assessment can distinguish pest concerns from ordinary outdoor activity.",
      points: [
        "Drainage conditions can change after rain",
        "Shelter may occur near stored materials",
        "Different outdoor pests need different approaches",
      ],
    },
    treatmentSteps: [
      {
        title: "Review Outdoor Activity Areas",
        description:
          "Discuss which pests or signs are noticed around patios, planting areas, and storage.",
      },
      {
        title: "Inspect Drainage and Shelter",
        description:
          "Assess accessible water-holding locations, vegetation edges, and nearby debris.",
      },
      {
        title: "Discuss Targeted Property Options",
        description:
          "Consider the identified pests and use of the outdoor spaces when planning management.",
      },
      {
        title: "Review Seasonal Maintenance",
        description:
          "Discuss drainage, shelter reduction, and observations to revisit as conditions change.",
      },
    ],
    faqs: [
      {
        question: "Does outdoor pest control cover every yard insect?",
        answer:
          "No. Scope should be confirmed with the provider. An assessment helps identify which pest concerns and areas need attention.",
      },
      {
        question: "What should I describe about patio activity?",
        answer:
          "Note the insects or signs observed, the time activity occurs, and nearby water, shelter, or food sources.",
      },
      {
        question: "Can weather change an outdoor management plan?",
        answer:
          "Rainfall and other surrounding conditions can affect activity areas. Ask how the provider recommends reviewing changes over time.",
      },
    ],
    relatedSlugs: ["mosquitoes", "ticks", "stinging-pests", "rodents"],
  },
];

export const FEATURED_SERVICE_SLUGS = Object.freeze([
  "ants",
  "cockroaches",
  "termites",
  "bed-bugs",
  "rodents",
  "mosquitoes",
  "spiders",
  "wasps-bees",
]);

if (import.meta.env.DEV) {
  validatePestServices(serviceDefinitions, {
    featuredSlugs: FEATURED_SERVICE_SLUGS,
  });
}

// Protect nested authored content as well as the resolved service objects.
function deepFreeze(value) {
  if (value && typeof value === "object" && !Object.isFrozen(value)) {
    Object.values(value).forEach(deepFreeze);
    Object.freeze(value);
  }
  return value;
}

/** @type {ReadonlyArray<PestService>} */
export const pestServices = Object.freeze(
  serviceDefinitions.map((service) => {
    const hasCustomImage = hasPestImage(service.slug);
    return deepFreeze({
      ...service,
      image: getPestImage(service.slug),
      hasCustomImage,
      // Compatibility aliases are derived from the canonical fields, never authored separately.
      service: service.serviceName,
      heroTitle: service.hero.title,
      intro: service.hero.description,
      isPlaceholder: !hasCustomImage,
    });
  }),
);

const serviceBySlug = new Map(
  pestServices.map((service) => [service.slug, service]),
);
const servicesByCategory = new Map(
  Object.values(PEST_CATEGORIES).map((category) => [
    category,
    Object.freeze(
      pestServices.filter((service) => service.category === category),
    ),
  ]),
);
const emptyServices = Object.freeze([]);

/** @param {string} slug @returns {PestService|null} */
export function getPestServiceBySlug(slug) {
  return serviceBySlug.get(slug) ?? null;
}

/** @param {import('../types/pestService').PestCategory|string} category @returns {ReadonlyArray<PestService>} */
export function getServicesByCategory(category) {
  return servicesByCategory.get(category) ?? emptyServices;
}

/**
 * Explicit relationships first, then remaining services in the same category.
 * Results are unique, never include the current service, and may be shorter than limit.
 * @param {PestService|null} service
 * @param {number} [limit=4]
 * @returns {PestService[]}
 */
export function getRelatedServices(service, limit = 4) {
  const current = serviceBySlug.get(service?.slug);
  if (!current || !Number.isFinite(limit) || limit < 1) return [];
  const maximum = Math.floor(limit),
    results = [],
    seen = new Set([current.slug]);
  const candidates = [
    ...current.relatedSlugs.map(getPestServiceBySlug),
    ...getServicesByCategory(current.category),
  ];
  for (const candidate of candidates) {
    if (!candidate || seen.has(candidate.slug)) continue;
    seen.add(candidate.slug);
    results.push(candidate);
    if (results.length === maximum) break;
  }
  return results;
}

export const featuredServices = Object.freeze(
  FEATURED_SERVICE_SLUGS.map(getPestServiceBySlug).filter(Boolean),
);
