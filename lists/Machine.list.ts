// lists/Machine.ts
import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, integer } from "@keystone-6/core/fields";

export default list({
  access: allowAll, // 🔒 restrict in production
  ui: {
    label: "ماشین‌آلات",
    listView: {
      initialColumns: ["titleFa", "titleEn", "count"],
      initialSort: { field: "titleFa", direction: "ASC" },
    },
  },
  fields: {
    titleFa: text({
      label: "عنوان (فارسی)",
      validation: { isRequired: true },
    }),

    titleEn: text({
      label: "عنوان (انگلیسی)",
      validation: { isRequired: true },
    }),

    count: integer({
      label: "تعداد",
      validation: {
        isRequired: true,
        min: 0,
      },
    }),
  },
});
