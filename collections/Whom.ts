import type { CollectionConfig } from "payload";

export const Whom: CollectionConfig = {
  slug: "whom",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      label: "Whom",
      type: "text",
      required: true,
    },
  ],
};
