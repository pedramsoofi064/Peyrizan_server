import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, image , timestamp } from "@keystone-6/core/fields";

export default list({
  access: allowAll,
  ui: {
    label: "تقدیرنامه ها",
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
      ui: { description: "عنوان تقدیرنامه به زبان فارسی" },
    }),
    titleEn: text({
      label: "عنوان (انگلیسی)",
      ui: { description: "اختیاری" },
    }),
    image: image({
      label: "تصویر تقدیرنامه",
      storage: "certificate_images",
    }),
    date: timestamp({ label: "تاریخ", validation: { isRequired: true } }),
  },
});

