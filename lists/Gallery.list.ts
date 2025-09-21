import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, timestamp, relationship } from "@keystone-6/core/fields";

export default list({
  access: allowAll,
  ui: {
    label: "گالری",
    listView: {
      initialColumns: ["titleFa", "date", "medias"],
      pageSize: 20,
      initialSort: { field: "date", direction: "DESC" },
    },
  },
  fields: {
    titleFa: text({ label: "عنوان (فارسی)", validation: { isRequired: true } }),
    titleEn: text({ label: "عنوان (انگلیسی)" }),
    descriptionFa: text({ label: "توضیحات (فارسی)", ui: { displayMode: "textarea" } }),
    descriptionEn: text({ label: "توضیحات (انگلیسی)", ui: { displayMode: "textarea" } }),
    date: timestamp({ label: "تاریخ", validation: { isRequired: true } }),
    medias: relationship({
      ref: "GalleryMedia.gallery",
      many: true,
      label: "مدیاها",
      ui: {
        displayMode: "cards",
        cardFields: ["file", "type", "sortOrder"],
        inlineCreate: { fields: ["file", "type", "sortOrder"] },
        inlineEdit: { fields: ["file", "type", "sortOrder"] },
        linkToItem: true,
        removeMode: "disconnect",
      },
    }),
  },
});
