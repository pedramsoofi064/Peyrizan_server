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
} from "@keystone-6/core/fields";

export default list({
  ui: {
    label: "تصاویر",
    description: "تمام فایل‌های پیوست",
  },
  access: allowAll,
  fields: {
    title: text(),
    alt: text(),
    image: image({
      storage: "images",
    }),
  },
});
