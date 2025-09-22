// lists/Application.ts
import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, select, calendarDay, file, timestamp } from "@keystone-6/core/fields";

export default list({
  access: allowAll, // 🔒 Consider restricting for production
  ui: {
    label: "ردخواست همکاری",
    listView: {
      initialColumns: ["fullName", "email", "gender", "marriageStatus", "createdAt"],
    },
  },
  fields: {
    fullName: text({
      label: "Full Name",
      validation: { isRequired: true },
    }),

    birthDate: calendarDay({
      label: "Birth Date",
      validation: { isRequired: true },
    }),

    gender: select({
      label: "Gender",
      options: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
      ],
      ui: { displayMode: "segmented-control" },
      validation: { isRequired: true },
    }),

    marriageStatus: select({
      label: "Marriage Status",
      options: [
        { label: "Single", value: "single" },
        { label: "Married", value: "married" },
      ],
      ui: { displayMode: "segmented-control" },
      validation: { isRequired: true },
    }),

    email: text({
      label: "Email",
      validation: { isRequired: true, match: { regex: /^\S+@\S+$/ } },
      isIndexed: "unique",
    }),

    resume: file({
      label: "Resume",
      storage: "resume_files", // 👈 configure your storage in keystone.ts
    }),

    createdAt: timestamp({
      defaultValue: { kind: "now" },
      ui: { itemView: { fieldMode: "read" } },
    }),
  },
});
