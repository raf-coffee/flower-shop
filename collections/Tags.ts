import type { CollectionConfig } from "payload";

export const Tags: CollectionConfig = {
  slug: "tags",
  fields: [
    {
      name: "name",
      label: "Tag Name",
      type: "text",
      required: true,
    },
  ],
};
