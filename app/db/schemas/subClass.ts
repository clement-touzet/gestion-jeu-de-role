import { ClassTable } from "@/app/db/schemas/class";
import { SubClassSkillTable } from "@/app/db/schemas/subClassSkill";
import { relations } from "drizzle-orm";
import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const SubClassTable = pgTable("sub_class", {
  id: uuid("id").primaryKey().defaultRandom(),
  classId: uuid("class_id")
    .notNull()
    .references(() => ClassTable.id),
  subClassName: varchar("name", { length: 255 }).notNull(),
  subClassDescription: varchar("description"),
});

export const SubClassTableRelations = relations(
  SubClassTable,
  ({ one, many }) => ({
    class: one(ClassTable, {
      fields: [SubClassTable.classId],
      references: [ClassTable.id],
    }),
    subClassSkills: many(SubClassSkillTable),
  })
);
