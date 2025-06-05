import type { CollectionConfig } from "payload";

export const Flowers: CollectionConfig = {
  slug: "flowers",
  access: {
    read: () => true,
  },
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
      name: "sale",
      label: "Sale",
      type: "checkbox",
      required: true,
    },
    {
      name: "occasions",
      label: "Occasions",
      type: "relationship",
      relationTo: "occasions",
      hasMany: true,
    },
    {
      name: "tags",
      label: "Tags",
      type: "relationship",
      hasMany: true,
      relationTo: "tags",
    },
    {
      name: "categories",
      label: "Categories",
      type: "relationship",
      hasMany: true,
      relationTo: "categories",
    },
    {
      name: "images",
      label: "Images",
      type: "upload",
      hasMany: true,
      relationTo: "media",
    },
    {
      name: "reviews",
      label: "Reviews",
      type: "relationship",
      hasMany: true,
      relationTo: "reviews",
    },
    {
      name: "whom",
      label: "Whom",
      type: "relationship",
      hasMany: true,
      relationTo: "whom",
    },
  ],
};
