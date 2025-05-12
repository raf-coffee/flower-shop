import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";
import { Tags } from "@/collections/Tags";
import { Flowers } from "@/collections/Flowers";
import { Occasion } from "@/collections/Occasion";
import { Media } from "@/collections/Media";
import { Category } from "@/collections/Category";
import { Baloons } from "@/collections/Baloons";
import { FruitCarts } from "@/collections/FruitCarts";
import { Accessories } from "@/collections/Accessories";
import { Indoors } from "@/collections/Indoors";
import { Presents } from "@/collections/Presents";
import { Sweets } from "@/collections/Sweets";
import { seed } from "@/seed";

export default buildConfig({
  editor: lexicalEditor(),
  collections: [
    Media,
    Flowers,
    Tags,
    Occasion,
    Category,
    Baloons,
    FruitCarts,
    Accessories,
    Indoors,
    Presents,
    Sweets,
  ],
  secret: process.env.PAYLOAD_SECRET || "",
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DB_URI,
    },
  }),
  onInit: async (payload) => {
    if (process.env.NODE_ENV === "development") {
      await seed(payload);
    }
  },
  sharp,
});
