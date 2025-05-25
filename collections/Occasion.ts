import type { CollectionConfig } from "payload";

export const Occasion: CollectionConfig = {
  slug: "occasions",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      label: "Occasion",
      type: "text",
      required: true,
    },
  ],
  admin: {
    useAsTitle: "name",
  },
};
