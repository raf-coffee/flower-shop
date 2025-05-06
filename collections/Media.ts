import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  upload: {
    staticDir: "media",
  },
  fields: [
    {
      name: "alt",
      defaultValue: "Image of the flower",
      label: "Alt text",
      type: "text",
    },
  ],
};
