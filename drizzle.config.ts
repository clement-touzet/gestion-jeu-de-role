import env from "@/env";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./app/db/migrations",
  schema: "./app/db/schemas/index.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
