// lists/NewsImage.ts
import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { image, text } from "@keystone-6/core/fields";

export default list({
  access: allowAll,
  ui: {
    label: "تصاویر خبر",
    listView: {
      initialColumns: ["file", "alt"],
    },
  },
  fields: {
    alt: text({ label: "متن جایگزین (alt)" }),
    file: image({ label: "تصویر", storage: "news_images" }),
  },
});
