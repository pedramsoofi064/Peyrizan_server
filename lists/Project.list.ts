import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import {
  BaseAccessArgs,
  AccessOperation,
} from "@keystone-6/core/dist/declarations/src/types/config/access-control";

// see https://keystonejs.com/docs/fields/overview for the full list of fields
//   this is a few common fields for an example
import {
  text,
  image,
  relationship,
  password,
  timestamp,
  select,
  integer,
} from "@keystone-6/core/fields";

import { document } from "@keystone-6/fields-document";

export default list({
  ui: {
    label: "پروژه ها",
    description: "تمام پروژه ",
    listView: {
      pageSize: 20, // default page size in Admin UI
      initialColumns: ["titleFa", "status", "progressPercentage"],
      initialSort: { field: "startDate", direction: "DESC" },
    },
  },
  access: allowAll,
  fields: {
    titleFa: text({
      label: "عنوان به فارسی",
    }),
    titleEn: text({
      label: "عنوان به انگلیسی",
    }),
    summaryFa: text({
      label: "خلاصه به فارسی",
      ui: {
        displayMode: "textarea",
      },
    }),
    summaryEn: text({
      label: "خلاصه به انگلیسی",
      ui: {
        displayMode: "textarea",
      },
    }),
    descriptionFa: text({
      label: "توضیحات به فارسی",
      ui: {
        displayMode: "textarea",
      },
    }),

    descriptionEn: text({
      label: "توضیحات به انگلیسی",
      ui: {
        displayMode: "textarea",
      },
    }),
    employerFa: text({
      label: "کارفرما به فارسی",
    }),
    employerEn: text({
      label: "کارفرما به انگلیسی",
    }),
    advisorFa: text({
      label: "مشاور به فارسی",
    }),
    advisorEn: text({
      label: "مشاور به انگلیسی",
    }),
    locationFa: text({
      label: "مکان به فارسی",
    }),
    locationEn: text({
      label: "مکان به انگلیسی",
    }),
    progressPercentage: integer({
      label: "درصد پیشرفت",
      validation: {
        min: 0,
        max: 100,
        isRequired: false, // set to true if always required
      },
      defaultValue: 0, // optional
      ui: {
        description: "عددی بین 0 تا 100 وارد کنید",
      },
    }),
    status: select({
      label: "وضعیت پروژه",
      options: [
        { label: "در حال انجام", value: "inProgress" },
        { label: "تکمیل شده", value: "completed" },
      ],
      defaultValue: "inProgress",
      ui: {
        displayMode: "select", // dropdown (default)
      },
    }),
    startDate: timestamp({
      label: "تاریخ شروع",
      validation: { isRequired: true },
    }),
    endDate: timestamp({
      label: "تاریخ پایان",
      validation: { isRequired: false },
    }),
    images: relationship({
      label: "تصاویر",
      ref: "ProjectImage.project",
      many: true,
      ui: {
        displayMode: "cards",
        cardFields: ["file", "alt", "sortOrder"],
        inlineCreate: { fields: ["file", "alt", "sortOrder"] },
        inlineEdit: { fields: ["file", "alt", "sortOrder"] },
        linkToItem: true,
        removeMode: "disconnect",
      },
    }),
  },
  hooks: {
    validateInput: async ({ resolvedData, addValidationError }) => {
      if (resolvedData.status === "completed" && !resolvedData.endDate) {
        addValidationError("برای پروژه‌های تکمیل‌شده، تاریخ پایان الزامی است.");
      }
    },
  },
});
