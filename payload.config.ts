import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";
import { Tags } from "@/collections/Tags";
import { Flowers } from "@/collections/Flowers";
import { Reason } from "./collections/Reasons";
import { Media } from "./collections/Media";
import { seed } from "./seed";

export default buildConfig({
  editor: lexicalEditor(),
  collections: [Media, Flowers, Tags, Reason],
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
