// import { relations } from "drizzle-orm";
// import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

// export const ItemTable = pgTable("item", {
//   id: uuid("id").primaryKey().defaultRandom(),
//   name: varchar("name", { length: 500 }).notNull(),
//   itemTypeId: uuid("item_type_id")
//     .notNull()
//     .references(() => ItemTypeTable.id),
// });

// export const ItemTableRelations = relations(ItemTable,({many}) )
