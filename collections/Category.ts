import type { CollectionConfig } from "payload";

export const Category: CollectionConfig = {
  slug: "categories",
  access: {
    read: () => true,
  },
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
