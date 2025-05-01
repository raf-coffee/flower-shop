import type { CollectionConfig } from "payload";

export const Occasion: CollectionConfig = {
  slug: "occasions",
  fields: [
    {
      name: "name",
      label: "Occasion",
      type: "text",
      required: true,
    },
  ],
};
