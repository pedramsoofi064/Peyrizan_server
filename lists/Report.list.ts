import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, image, timestamp } from "@keystone-6/core/fields";
import { document } from "@keystone-6/fields-document";
import path from "path";
// import your blocks
import { componentBlocks } from "../component-blocks/index"; // adjust path as needed

export default list({
  ui: {
    label: "اخبار",
    description: "تمام اخبار ",
    listView: {
      pageSize: 20,
      initialColumns: ["titleFa", "date", "file"],
      initialSort: { field: "date", direction: "DESC" },
    },
  },
  access: allowAll,
  fields: {
    titleFa: text({ label: "عنوان به فارسی" }),
    titleEn: text({ label: "عنوان به انگلیسی" }),

    summaryFa: text({
      label: "خلاصه به فارسی",
      ui: { displayMode: "textarea" },
    }),
    summaryEn: text({
      label: "خلاصه به انگلیسی",
      ui: { displayMode: "textarea" },
    }),

    // 🔽 Rich text with images (via component blocks)
    descriptionFa: document({
      label: "توضیحات به فارسی",
      formatting: {
        inlineMarks: {
          bold: true,
          italic: true,
          underline: true,
          strikethrough: true,
          code: true,
          superscript: true,
          subscript: true,
        },
        listTypes: true,
        headingLevels: [2, 3, 4],
        blockTypes: true,
        softBreaks: true,
        alignment: true,
      },
      links: true,
      dividers: true,
      layouts: [[1], [1, 1], [1, 2], [2, 1], [1, 1, 1]],
      ui: { views: "./component-blocks/index" },

      componentBlocks, // 👈 enables ImageBlock inside the editor
    }),

    descriptionEn: document({
      label: "توضیحات به انگلیسی",
      formatting: {
        inlineMarks: {
          bold: true,
          italic: true,
          underline: true,
          strikethrough: true,
          code: true,
        },
        listTypes: true,
        headingLevels: [2, 3, 4],
        blockTypes: true,
      },
      links: true,
      dividers: true,
      layouts: [[1], [1, 1], [1, 2], [2, 1]],
      ui: { views: "./component-blocks/index" },
      componentBlocks,
    }),

    date: timestamp({ label: "تاریخ", validation: { isRequired: true } }),

    file: image({ label: "تصویر اصلی خبر", storage: "news_images" }),
  },
});
