import type { CollectionConfig } from "payload";

export const Reviews: CollectionConfig = {
  slug: "reviews",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "customer",
      label: "Costumer Name",
      type: "text",
      required: true,
    },
    {
      name: "review",
      label: "Review",
      type: "text",
      required: true,
    },
    {
      name: "collection",
      label: "Product Collection",
      type: "text",
      required: true,
    },
  ],
};
