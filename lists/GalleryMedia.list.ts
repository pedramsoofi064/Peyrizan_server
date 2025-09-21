import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { select, relationship, integer, file } from "@keystone-6/core/fields";

export default list({
  access: allowAll,
  ui: {
    label: "مدیاهای گالری",
    listView: {
      initialColumns: ["file", "type", "sortOrder", "gallery"],
      initialSort: { field: "sortOrder", direction: "ASC" },
    },
  },
  fields: {
    file: file({
      label: "فایل (عکس یا ویدیو)",
      storage: "gallery_files",
    }),
    type: select({
      label: "نوع",
      options: [
        { label: "تصویر", value: "image" },
        { label: "ویدیو", value: "video" },
      ],
      defaultValue: "image",
      ui: { displayMode: "segmented-control" },
    }),
    sortOrder: integer({ label: "ترتیب", defaultValue: 0 }),
    gallery: relationship({ ref: "Gallery.medias", label: "گالری" }),
  },
});
