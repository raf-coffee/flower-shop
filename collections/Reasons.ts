import type { CollectionConfig } from "payload";

export const Reason: CollectionConfig = {
  slug: "reasons",
  fields: [
    {
      name: "name",
      label: "Reason",
      type: "text",
      required: true,
    },
  ],
};
