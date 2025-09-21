import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, timestamp } from "@keystone-6/core/fields";

export default list({
  access: allowAll, // در محیط واقعی بهتره محدودتر بشه
  ui: {
    label: "نظرات کاربران",
    listView: {
      initialColumns: ["firstName", "lastName", "email", "createdAt"],
      initialSort: { field: "createdAt", direction: "DESC" },
    },
  },
  fields: {
    firstName: text({ label: "نام", validation: { isRequired: true } }),
    lastName: text({ label: "نام خانوادگی", validation: { isRequired: true } }),
    email: text({
      label: "ایمیل",
      validation: { isRequired: true, match: { regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ } },
      isIndexed: "unique",
    }),
    message: text({
      label: "پیام",
      ui: { displayMode: "textarea" },
      validation: { isRequired: true },
    }),
    createdAt: timestamp({
      label: "تاریخ ثبت",
      defaultValue: { kind: "now" },
      ui: { itemView: { fieldMode: "read" } },
    }),
  },
});
