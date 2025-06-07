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
import { Gifts } from "@/collections/Gifts";
import { Sweets } from "@/collections/Sweets";
import { Whom } from "@/collections/Whom";
import { Reviews } from "@/collections/Reviews";
import { seed } from "@/seed";

export default buildConfig({
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
    Gifts,
    Sweets,
    Whom,
    Reviews,
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
});
