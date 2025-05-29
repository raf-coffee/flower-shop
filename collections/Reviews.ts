import type { CollectionConfig } from "payload";

export const Reviews: CollectionConfig = {
  slug: "reviews",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "costumer",
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
      name: "productCategory",
      label: "Product Category",
      type: "text",
      required: true,
    },
  ],
};
