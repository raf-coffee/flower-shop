import type { CollectionConfig } from "payload";

export const Category: CollectionConfig = {
  slug: "categories",
  fields: [
    {
      name: "name",
      label: "Category",
      type: "text",
      required: true,
    },
  ],
  admin: {
    useAsTitle: "name",
  },
};
