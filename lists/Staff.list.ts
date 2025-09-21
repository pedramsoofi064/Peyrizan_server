// lists/Staff.ts
import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text } from "@keystone-6/core/fields";

export default list({
  access: allowAll, // 🔒 adjust for production
  ui: {
    label: "پرسنل",
    listView: {
      initialColumns: ["fullNameFa", "fullNameEn", "position"],
      initialSort: { field: "fullNameFa", direction: "ASC" },
    },
  },
  fields: {
    fullNameFa: text({
      label: "نام کامل (فارسی)",
      validation: { isRequired: true },
    }),
    fullNameEn: text({
      label: "Full Name (English)",
      validation: { isRequired: true },
    }),
    position: text({
      label: "سمت",
      validation: { isRequired: true },
    }),
  },
});
