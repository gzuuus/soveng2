import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

// Homepage collection schema
const homepageCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/homepage" }),
  schema: z.object({
    banner: z.object({
      title: z.string(),
      content: z.string(),
      image: z.string(),
      button: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
    }),
    features: z.array(
      z.object({
        title: z.string(),
        image: z.string(),
        content: z.string(),
        bulletpoints: z.array(z.string()),
        button: z.object({
          enable: z.boolean(),
          label: z.string(),
          link: z.string(),
        }),
      }),
    ),
  }),
});

// Philosophy collection schema
const philosophyCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/philosophy" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    intro: z.object({
      quote_section: z.string(),
      content: z.string(),
      image: z.string(),
    }),
    sections: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        quote_section: z.string(),
        image: z.string(),
        float: z.string(),
        content: z.string(),
        link: z.string().optional(),
      }),
    ),
    cta: z.object({
      text: z.string(),
      link: z.string(),
    }),
  }),
});

// Concept collection schema  
const conceptCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/concept" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    intro: z.object({
      content: z.string(),
      image: z.string(),
    }),
    sections: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        content: z.string(),
        image: z.string().optional(),
        float: z.string().optional(),
      }),
    ),
    cta: z.object({
      text: z.string(),
      link: z.string(),
    }),
  }),
});

// FAQ collection schema
const faqCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/faq" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    intro: z.object({
      content: z.string(),
    }),
    sections: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        questions: z.array(
          z.object({
            question: z.string(),
            answer: z.string(),
          }),
        ).optional(),
        content: z.string().optional(),
      }),
    ),
    cta: z.object({
      text: z.string(),
      link: z.string(),
    }),
  }),
});

// Call to Action collection schema
const ctaSectionCollection = defineCollection({
  loader: glob({
    pattern: "call-to-action.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    button: z.object({
      enable: z.boolean(),
      label: z.string(),
      link: z.string(),
    }),
  }),
});

// Testimonials Section collection schema
const testimonialSectionCollection = defineCollection({
  loader: glob({
    pattern: "testimonial.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    description: z.string(),
    testimonials: z.array(
      z.object({
        name: z.string(),
        avatar: z.string(),
        designation: z.string(),
        npub: z.string().optional(),
        noteid: z.string().optional(),
        content: z.string(),
      }),
    ),
  }),
});

// Export collections
export const collections = {
  // Pages
  homepage: homepageCollection,
  philosophy: philosophyCollection,
  concept: conceptCollection,
  faq: faqCollection,

  // sections
  ctaSection: ctaSectionCollection,
  testimonialSection: testimonialSectionCollection,
};
