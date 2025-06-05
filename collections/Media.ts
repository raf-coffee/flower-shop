import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
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
    {
      name: "collection",
      label: "Collection",
      type: "text",
    },
    {
      name: "type",
      label: "Flower Type",
      type: "text",
      required: false,
    },
  ],
};
