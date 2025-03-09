import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const ClassTable = pgTable("class", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  description: varchar("description", { length: 1000 }),
});

export type ClassType = typeof ClassTable.$inferSelect;
export type InsertClassType = typeof ClassTable.$inferInsert;
