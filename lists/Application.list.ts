// lists/Application.ts
import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import {
  text,
  select,
  calendarDay,
  file,
  timestamp,
} from "@keystone-6/core/fields";

export default list({
  access: allowAll, // 🔒 Consider restricting for production
  ui: {
    label: "درخواست همکاری",
    listView: {
      initialColumns: [
        "fullName",
        "email",
        "gender",
        "marriageStatus",
        "createdAt",
      ],
    },
  },
  fields: {
    fullName: text({
      label: "نام کامل",
      validation: { isRequired: true },
    }),

    birthDate: calendarDay({
      label: "تاریخ تولد",
    }),

    gender: select({
      label: "جنسیت",
      options: [
        { label: "مرد", value: "male" },
        { label: "زن", value: "female" },
      ],
      ui: { displayMode: "segmented-control" },
    }),

    marriageStatus: select({
      label: "وضعیت تاهل",
      options: [
        { label: "مجرد", value: "single" },
        { label: "متاهل", value: "married" },
      ],
      ui: { displayMode: "segmented-control" },
    }),

    email: text({
      label: "پست الکنرونیکی",
      validation: { isRequired: true, match: { regex: /^\S+@\S+$/ } },
    }),

    resume: file({
      label: "رزومه",
      storage: "resume_files", // 👈 configure your storage in keystone.ts
    }),

    createdAt: timestamp({
      label: "تاریخ ایجاد",

      defaultValue: { kind: "now" },
      ui: { itemView: { fieldMode: "read" } },
    }),
  },
});
