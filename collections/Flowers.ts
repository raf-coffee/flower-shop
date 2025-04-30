import type { CollectionConfig } from "payload";

export const Flowers: CollectionConfig = {
  slug: "flowers",
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "price",
      label: "Price",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Description",
      type: "text",
      required: true,
    },
    {
      name: "available",
      label: "Available",
      type: "checkbox",
      required: true,
    },
    {
      name: "reasons",
      label: "Reasons",
      type: "relationship",
      relationTo: ["reasons"],
      hasMany: true,
    },
    {
      name: "tags",
      label: "Tags",
      type: "relationship",
      hasMany: true,
      relationTo: ["tags"],
    },
  ],
};
