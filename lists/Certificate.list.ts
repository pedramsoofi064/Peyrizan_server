import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, image } from "@keystone-6/core/fields";

export default list({
  access: allowAll,
  ui: {
    label: "گواهینامه ها",
    listView: {
      initialColumns: ["titleFa", "titleEn", "file"],
      initialSort: { field: "titleFa", direction: "ASC" },
      pageSize: 20,
    },
  },
  fields: {
    titleFa: text({
      label: "عنوان (فارسی)",
      validation: { isRequired: true },
      ui: { description: "عنوان گواهینامه به زبان فارسی" },
    }),
    titleEn: text({
      label: "عنوان (انگلیسی)",
      ui: { description: "اختیاری" },
    }),
    file: image({
      label: "تصویر گواهینامه",
      storage: "certificate_images",
    }),
  },
});
