// lists/ProjectImage.ts
import { list } from "@keystone-6/core";

import { image, relationship, text, integer } from "@keystone-6/core/fields";
import { allowAll } from "@keystone-6/core/access";

export default list({
  ui: {
    label: "تصاویر پروژه",
  },
  fields: {
    alt: text({ label: "توضیح تصویر (alt)" }),
    file: image({ storage: "project_images", label: "فایل تصویر" }),
    sortOrder: integer({ label: "ترتیب", defaultValue: 0 }),
    project: relationship({ ref: "Project.images", label: "پروژه" }),
  },
  access: allowAll,
});
