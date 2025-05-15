import type { CollectionConfig } from "payload";

export const Tags: CollectionConfig = {
  slug: "tags",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      label: "Tag Name",
      type: "text",
      required: true,
    },
  ],
  admin: {
    useAsTitle: "name",
  },
};
