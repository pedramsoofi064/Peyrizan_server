"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_core12 = require("@keystone-6/core");

// lists/Image.list.ts
var import_core = require("@keystone-6/core");
var import_access = require("@keystone-6/core/access");
var import_fields = require("@keystone-6/core/fields");
var Image_list_default = (0, import_core.list)({
  ui: {
    label: "\u062A\u0635\u0627\u0648\u06CC\u0631",
    description: "\u062A\u0645\u0627\u0645 \u0641\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC \u067E\u06CC\u0648\u0633\u062A"
  },
  access: import_access.allowAll,
  fields: {
    title: (0, import_fields.text)(),
    alt: (0, import_fields.text)(),
    image: (0, import_fields.image)({
      storage: "images"
    })
  }
});

// lists/User.list.ts
var import_core2 = require("@keystone-6/core");
var import_access2 = require("@keystone-6/core/access");
var import_fields2 = require("@keystone-6/core/fields");
var User_list_default = (0, import_core2.list)({
  ui: {
    label: "\u06A9\u0627\u0631\u0628\u0631\u0627\u0646"
  },
  // WARNING
  //   for this starter project, anyone can create, query, update and delete anything
  //   if you want to prevent random people on the internet from accessing your data,
  //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
  access: import_access2.allowAll,
  // this is the fields for our User list
  fields: {
    // by adding isRequired, we enforce that every User should have a name
    //   if no name is provided, an error will be displayed
    name: (0, import_fields2.text)({ validation: { isRequired: true } }),
    email: (0, import_fields2.text)({
      validation: { isRequired: true },
      // by adding isIndexed: 'unique', we're saying that no user can have the same
      // email as another user - this may or may not be a good idea for your project
      isIndexed: "unique"
    }),
    password: (0, import_fields2.password)({ validation: { isRequired: true } }),
    // we can use this field to see what Posts this User has authored
    //   more on that in the Post list below
    // posts: relationship({ ref: "Post.author", many: true }),
    createdAt: (0, import_fields2.timestamp)({
      // this sets the timestamp to Date.now() when the user is first created
      defaultValue: { kind: "now" }
    })
  }
});

// lists/MainPageImage.list.ts
var import_core3 = require("@keystone-6/core");
var import_access3 = require("@keystone-6/core/access");
var import_fields3 = require("@keystone-6/core/fields");
var MainPageImage_list_default = (0, import_core3.list)({
  ui: {
    label: "\u062A\u0635\u0627\u0648\u06CC\u0631 \u0635\u0641\u062D\u0647 \u0627\u0635\u0644\u06CC",
    description: "\u062A\u0645\u0627\u0645 \u062A\u0635\u0627\u0648\u06CC\u0631 \u0642\u0633\u0645\u062A \u0627\u0648\u0644 \u0635\u0641\u062D\u0647 \u0627\u0635\u0644\u06CC",
    labelField: "alt"
  },
  access: import_access3.allowAll,
  fields: {
    alt: (0, import_fields3.text)({
      label: "\u0646\u0627\u0645 \u062A\u0635\u0648\u06CC\u0631"
    }),
    image: (0, import_fields3.image)({
      storage: "main_images"
    })
  }
});

// lists/Project.list.ts
var import_core4 = require("@keystone-6/core");
var import_access4 = require("@keystone-6/core/access");
var import_fields4 = require("@keystone-6/core/fields");
var Project_list_default = (0, import_core4.list)({
  ui: {
    label: "\u067E\u0631\u0648\u0698\u0647 \u0647\u0627",
    description: "\u062A\u0645\u0627\u0645 \u067E\u0631\u0648\u0698\u0647 ",
    listView: {
      pageSize: 20,
      // default page size in Admin UI
      initialColumns: ["titleFa", "status", "progressPercentage"],
      initialSort: { field: "startDate", direction: "DESC" }
    }
  },
  access: import_access4.allowAll,
  fields: {
    titleFa: (0, import_fields4.text)({
      label: "\u0639\u0646\u0648\u0627\u0646 \u0628\u0647 \u0641\u0627\u0631\u0633\u06CC"
    }),
    titleEn: (0, import_fields4.text)({
      label: "\u0639\u0646\u0648\u0627\u0646 \u0628\u0647 \u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC"
    }),
    summaryFa: (0, import_fields4.text)({
      label: "\u062E\u0644\u0627\u0635\u0647 \u0628\u0647 \u0641\u0627\u0631\u0633\u06CC",
      ui: {
        displayMode: "textarea"
      }
    }),
    summaryEn: (0, import_fields4.text)({
      label: "\u062E\u0644\u0627\u0635\u0647 \u0628\u0647 \u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC",
      ui: {
        displayMode: "textarea"
      }
    }),
    descriptionFa: (0, import_fields4.text)({
      label: "\u062A\u0648\u0636\u06CC\u062D\u0627\u062A \u0628\u0647 \u0641\u0627\u0631\u0633\u06CC",
      ui: {
        displayMode: "textarea"
      }
    }),
    descriptionEn: (0, import_fields4.text)({
      label: "\u062A\u0648\u0636\u06CC\u062D\u0627\u062A \u0628\u0647 \u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC",
      ui: {
        displayMode: "textarea"
      }
    }),
    employerFa: (0, import_fields4.text)({
      label: "\u06A9\u0627\u0631\u0641\u0631\u0645\u0627 \u0628\u0647 \u0641\u0627\u0631\u0633\u06CC"
    }),
    employerEn: (0, import_fields4.text)({
      label: "\u06A9\u0627\u0631\u0641\u0631\u0645\u0627 \u0628\u0647 \u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC"
    }),
    advisorFa: (0, import_fields4.text)({
      label: "\u0645\u0634\u0627\u0648\u0631 \u0628\u0647 \u0641\u0627\u0631\u0633\u06CC"
    }),
    advisorEn: (0, import_fields4.text)({
      label: "\u0645\u0634\u0627\u0648\u0631 \u0628\u0647 \u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC"
    }),
    locationFa: (0, import_fields4.text)({
      label: "\u0645\u06A9\u0627\u0646 \u0628\u0647 \u0641\u0627\u0631\u0633\u06CC"
    }),
    locationEn: (0, import_fields4.text)({
      label: "\u0645\u06A9\u0627\u0646 \u0628\u0647 \u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC"
    }),
    progressPercentage: (0, import_fields4.integer)({
      label: "\u062F\u0631\u0635\u062F \u067E\u06CC\u0634\u0631\u0641\u062A",
      validation: {
        min: 0,
        max: 100,
        isRequired: false
        // set to true if always required
      },
      defaultValue: 0,
      // optional
      ui: {
        description: "\u0639\u062F\u062F\u06CC \u0628\u06CC\u0646 0 \u062A\u0627 100 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F"
      }
    }),
    status: (0, import_fields4.select)({
      label: "\u0648\u0636\u0639\u06CC\u062A \u067E\u0631\u0648\u0698\u0647",
      options: [
        { label: "\u062F\u0631 \u062D\u0627\u0644 \u0627\u0646\u062C\u0627\u0645", value: "inProgress" },
        { label: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647", value: "completed" }
      ],
      defaultValue: "inProgress",
      ui: {
        displayMode: "select"
        // dropdown (default)
      }
    }),
    startDate: (0, import_fields4.timestamp)({
      label: "\u062A\u0627\u0631\u06CC\u062E \u0634\u0631\u0648\u0639",
      validation: { isRequired: true }
    }),
    endDate: (0, import_fields4.timestamp)({
      label: "\u062A\u0627\u0631\u06CC\u062E \u067E\u0627\u06CC\u0627\u0646",
      validation: { isRequired: false }
    }),
    images: (0, import_fields4.relationship)({
      label: "\u062A\u0635\u0627\u0648\u06CC\u0631",
      ref: "ProjectImage.project",
      many: true,
      ui: {
        displayMode: "cards",
        cardFields: ["file", "alt", "sortOrder"],
        inlineCreate: { fields: ["file", "alt", "sortOrder"] },
        inlineEdit: { fields: ["file", "alt", "sortOrder"] },
        linkToItem: true,
        removeMode: "disconnect"
      }
    })
  },
  hooks: {
    validateInput: async ({ resolvedData, addValidationError }) => {
      if (resolvedData.status === "completed" && !resolvedData.endDate) {
        addValidationError("\u0628\u0631\u0627\u06CC \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627\u06CC \u062A\u06A9\u0645\u06CC\u0644\u200C\u0634\u062F\u0647\u060C \u062A\u0627\u0631\u06CC\u062E \u067E\u0627\u06CC\u0627\u0646 \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A.");
      }
    }
  }
});

// lists/ProjectImage.list.ts
var import_core5 = require("@keystone-6/core");
var import_fields5 = require("@keystone-6/core/fields");
var import_access5 = require("@keystone-6/core/access");
var ProjectImage_list_default = (0, import_core5.list)({
  ui: {
    label: "\u062A\u0635\u0627\u0648\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647"
  },
  fields: {
    alt: (0, import_fields5.text)({ label: "\u062A\u0648\u0636\u06CC\u062D \u062A\u0635\u0648\u06CC\u0631 (alt)" }),
    file: (0, import_fields5.image)({ storage: "project_images", label: "\u0641\u0627\u06CC\u0644 \u062A\u0635\u0648\u06CC\u0631" }),
    sortOrder: (0, import_fields5.integer)({ label: "\u062A\u0631\u062A\u06CC\u0628", defaultValue: 0 }),
    project: (0, import_fields5.relationship)({ ref: "Project.images", label: "\u067E\u0631\u0648\u0698\u0647" })
  },
  access: import_access5.allowAll
});

// lists/Certificate.list.ts
var import_core6 = require("@keystone-6/core");
var import_access6 = require("@keystone-6/core/access");
var import_fields6 = require("@keystone-6/core/fields");
var Certificate_list_default = (0, import_core6.list)({
  access: import_access6.allowAll,
  ui: {
    label: "\u06AF\u0648\u0627\u0647\u06CC\u0646\u0627\u0645\u0647 \u0647\u0627",
    listView: {
      initialColumns: ["titleFa", "titleEn", "file"],
      initialSort: { field: "titleFa", direction: "ASC" },
      pageSize: 20
    }
  },
  fields: {
    titleFa: (0, import_fields6.text)({
      label: "\u0639\u0646\u0648\u0627\u0646 (\u0641\u0627\u0631\u0633\u06CC)",
      validation: { isRequired: true },
      ui: { description: "\u0639\u0646\u0648\u0627\u0646 \u06AF\u0648\u0627\u0647\u06CC\u0646\u0627\u0645\u0647 \u0628\u0647 \u0632\u0628\u0627\u0646 \u0641\u0627\u0631\u0633\u06CC" }
    }),
    titleEn: (0, import_fields6.text)({
      label: "\u0639\u0646\u0648\u0627\u0646 (\u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC)",
      ui: { description: "\u0627\u062E\u062A\u06CC\u0627\u0631\u06CC" }
    }),
    image: (0, import_fields6.image)({
      label: "\u062A\u0635\u0648\u06CC\u0631 \u06AF\u0648\u0627\u0647\u06CC\u0646\u0627\u0645\u0647",
      storage: "certificate_images"
    }),
    date: (0, import_fields6.timestamp)({ label: "\u062A\u0627\u0631\u06CC\u062E", validation: { isRequired: true } })
  }
});

// lists/Report.list.ts
var import_core7 = require("@keystone-6/core");
var import_access7 = require("@keystone-6/core/access");
var import_fields7 = require("@keystone-6/core/fields");
var import_fields_document = require("@keystone-6/fields-document");

// component-blocks/index.tsx
var import_react = __toESM(require("react"));
var import_component_blocks = require("@keystone-6/fields-document/component-blocks");
var componentBlocks = {
  ImageBlock: (0, import_component_blocks.component)({
    label: "\u062A\u0635\u0648\u06CC\u0631",
    preview: (props) => {
      const rel = props.fields.image.value;
      const url = rel?.data?.file?.url ?? "";
      const alt = rel?.data?.alt ?? rel?.label ?? "";
      const width = props.fields.width.value ?? "full";
      const imgWidthStyle = width === "half" ? { width: "50%" } : { width: "100%" };
      return /* @__PURE__ */ import_react.default.createElement("figure", { style: { margin: 0, position: "relative" } }, /* @__PURE__ */ import_react.default.createElement(import_component_blocks.NotEditable, null, url ? /* @__PURE__ */ import_react.default.createElement(
        "img",
        {
          src: url,
          alt,
          style: { display: "block", ...imgWidthStyle, height: "auto", borderRadius: 6 }
        }
      ) : /* @__PURE__ */ import_react.default.createElement(
        "div",
        {
          style: {
            padding: 24,
            border: "1px dashed #cbd5e0",
            borderRadius: 8,
            textAlign: "center",
            ...imgWidthStyle
          }
        },
        "\u062A\u0635\u0648\u06CC\u0631 \u0627\u0646\u062A\u062E\u0627\u0628/\u0622\u067E\u0644\u0648\u062F \u0646\u0634\u062F\u0647 \u0627\u0633\u062A"
      )), /* @__PURE__ */ import_react.default.createElement(
        "div",
        {
          style: {
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 60,
            pointerEvents: "none"
            // allow clicks through to the inner wrapper only
          }
        },
        /* @__PURE__ */ import_react.default.createElement("div", { style: { pointerEvents: "auto" } }, props.fields.image.element)
      ), /* @__PURE__ */ import_react.default.createElement("figcaption", { style: { opacity: 0.9, fontSize: 13, marginTop: 8 } }, props.fields.caption.element));
    },
    schema: {
      image: import_component_blocks.fields.relationship({
        label: "\u0627\u0646\u062A\u062E\u0627\u0628 \u062A\u0635\u0648\u06CC\u0631",
        listKey: "ReportImage",
        // <- make sure this matches your list exactly
        selection: "id alt file { url }"
      }),
      caption: import_component_blocks.fields.child({ kind: "inline", placeholder: "\u062A\u0648\u0636\u06CC\u062D \u062A\u0635\u0648\u06CC\u0631 (\u0627\u062E\u062A\u06CC\u0627\u0631\u06CC)" }),
      width: import_component_blocks.fields.select({
        label: "\u0639\u0631\u0636",
        options: [
          { label: "\u062A\u0645\u0627\u0645 \u0639\u0631\u0636", value: "full" },
          { label: "\u0646\u06CC\u0645\u0647 \u0639\u0631\u0636", value: "half" }
        ],
        defaultValue: "full"
      })
    }
  })
};

// lists/Report.list.ts
var Report_list_default = (0, import_core7.list)({
  ui: {
    label: "\u0627\u062E\u0628\u0627\u0631",
    description: "\u062A\u0645\u0627\u0645 \u0627\u062E\u0628\u0627\u0631 ",
    listView: {
      pageSize: 20,
      initialColumns: ["titleFa", "date", "file"],
      initialSort: { field: "date", direction: "DESC" }
    }
  },
  access: import_access7.allowAll,
  fields: {
    titleFa: (0, import_fields7.text)({ label: "\u0639\u0646\u0648\u0627\u0646 \u0628\u0647 \u0641\u0627\u0631\u0633\u06CC" }),
    titleEn: (0, import_fields7.text)({ label: "\u0639\u0646\u0648\u0627\u0646 \u0628\u0647 \u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC" }),
    summaryFa: (0, import_fields7.text)({
      label: "\u062E\u0644\u0627\u0635\u0647 \u0628\u0647 \u0641\u0627\u0631\u0633\u06CC",
      ui: { displayMode: "textarea" }
    }),
    summaryEn: (0, import_fields7.text)({
      label: "\u062E\u0644\u0627\u0635\u0647 \u0628\u0647 \u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC",
      ui: { displayMode: "textarea" }
    }),
    // 🔽 Rich text with images (via component blocks)
    descriptionFa: (0, import_fields_document.document)({
      label: "\u062A\u0648\u0636\u06CC\u062D\u0627\u062A \u0628\u0647 \u0641\u0627\u0631\u0633\u06CC",
      formatting: {
        inlineMarks: {
          bold: true,
          italic: true,
          underline: true,
          strikethrough: true,
          code: true,
          superscript: true,
          subscript: true
        },
        listTypes: true,
        headingLevels: [2, 3, 4],
        blockTypes: true,
        softBreaks: true,
        alignment: true
      },
      links: true,
      dividers: true,
      layouts: [[1], [1, 1], [1, 2], [2, 1], [1, 1, 1]],
      ui: { views: "./component-blocks/index" },
      componentBlocks
      // 👈 enables ImageBlock inside the editor
    }),
    descriptionEn: (0, import_fields_document.document)({
      label: "\u062A\u0648\u0636\u06CC\u062D\u0627\u062A \u0628\u0647 \u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC",
      formatting: {
        inlineMarks: {
          bold: true,
          italic: true,
          underline: true,
          strikethrough: true,
          code: true
        },
        listTypes: true,
        headingLevels: [2, 3, 4],
        blockTypes: true
      },
      links: true,
      dividers: true,
      layouts: [[1], [1, 1], [1, 2], [2, 1]],
      ui: { views: "./component-blocks/index" },
      componentBlocks
    }),
    date: (0, import_fields7.timestamp)({ label: "\u062A\u0627\u0631\u06CC\u062E", validation: { isRequired: true } }),
    file: (0, import_fields7.image)({ label: "\u062A\u0635\u0648\u06CC\u0631 \u0627\u0635\u0644\u06CC \u062E\u0628\u0631", storage: "news_images" })
  }
});

// lists/ReportImage.list.ts
var import_core8 = require("@keystone-6/core");
var import_access8 = require("@keystone-6/core/access");
var import_fields8 = require("@keystone-6/core/fields");
var ReportImage_list_default = (0, import_core8.list)({
  access: import_access8.allowAll,
  ui: {
    label: "\u062A\u0635\u0627\u0648\u06CC\u0631 \u062E\u0628\u0631",
    listView: {
      initialColumns: ["file", "alt"]
    },
    // 👇 This controls what shows up in relationship dropdowns
    labelField: "alt"
  },
  fields: {
    alt: (0, import_fields8.text)({ label: "\u0645\u062A\u0646 \u062C\u0627\u06CC\u06AF\u0632\u06CC\u0646 (alt)" }),
    file: (0, import_fields8.image)({ label: "\u062A\u0635\u0648\u06CC\u0631", storage: "news_images" })
  }
});

// lists/Award.list.ts
var import_core9 = require("@keystone-6/core");
var import_access9 = require("@keystone-6/core/access");
var import_fields9 = require("@keystone-6/core/fields");
var Award_list_default = (0, import_core9.list)({
  access: import_access9.allowAll,
  ui: {
    label: "\u062A\u0642\u062F\u06CC\u0631\u0646\u0627\u0645\u0647 \u0647\u0627",
    listView: {
      initialColumns: ["titleFa", "titleEn", "file"],
      initialSort: { field: "titleFa", direction: "ASC" },
      pageSize: 20
    }
  },
  fields: {
    titleFa: (0, import_fields9.text)({
      label: "\u0639\u0646\u0648\u0627\u0646 (\u0641\u0627\u0631\u0633\u06CC)",
      validation: { isRequired: true },
      ui: { description: "\u0639\u0646\u0648\u0627\u0646 \u062A\u0642\u062F\u06CC\u0631\u0646\u0627\u0645\u0647 \u0628\u0647 \u0632\u0628\u0627\u0646 \u0641\u0627\u0631\u0633\u06CC" }
    }),
    titleEn: (0, import_fields9.text)({
      label: "\u0639\u0646\u0648\u0627\u0646 (\u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC)",
      ui: { description: "\u0627\u062E\u062A\u06CC\u0627\u0631\u06CC" }
    }),
    image: (0, import_fields9.image)({
      label: "\u062A\u0635\u0648\u06CC\u0631 \u062A\u0642\u062F\u06CC\u0631\u0646\u0627\u0645\u0647",
      storage: "certificate_images"
    }),
    date: (0, import_fields9.timestamp)({ label: "\u062A\u0627\u0631\u06CC\u062E", validation: { isRequired: true } })
  }
});

// lists/GalleryMedia.list.ts
var import_core10 = require("@keystone-6/core");
var import_access10 = require("@keystone-6/core/access");
var import_fields10 = require("@keystone-6/core/fields");
var GalleryMedia_list_default = (0, import_core10.list)({
  access: import_access10.allowAll,
  ui: {
    label: "\u0645\u062F\u06CC\u0627\u0647\u0627\u06CC \u06AF\u0627\u0644\u0631\u06CC",
    listView: {
      initialColumns: ["file", "type", "sortOrder", "gallery"],
      initialSort: { field: "sortOrder", direction: "ASC" }
    }
  },
  fields: {
    file: (0, import_fields10.file)({
      label: "\u0641\u0627\u06CC\u0644 (\u0639\u06A9\u0633 \u06CC\u0627 \u0648\u06CC\u062F\u06CC\u0648)",
      storage: "gallery_files"
    }),
    type: (0, import_fields10.select)({
      label: "\u0646\u0648\u0639",
      options: [
        { label: "\u062A\u0635\u0648\u06CC\u0631", value: "image" },
        { label: "\u0648\u06CC\u062F\u06CC\u0648", value: "video" }
      ],
      defaultValue: "image",
      ui: { displayMode: "segmented-control" }
    }),
    sortOrder: (0, import_fields10.integer)({ label: "\u062A\u0631\u062A\u06CC\u0628", defaultValue: 0 }),
    gallery: (0, import_fields10.relationship)({ ref: "Gallery.medias", label: "\u06AF\u0627\u0644\u0631\u06CC" })
  }
});

// lists/Gallery.list.ts
var import_core11 = require("@keystone-6/core");
var import_access11 = require("@keystone-6/core/access");
var import_fields11 = require("@keystone-6/core/fields");
var Gallery_list_default = (0, import_core11.list)({
  access: import_access11.allowAll,
  ui: {
    label: "\u06AF\u0627\u0644\u0631\u06CC",
    listView: {
      initialColumns: ["titleFa", "date", "medias"],
      pageSize: 20,
      initialSort: { field: "date", direction: "DESC" }
    }
  },
  fields: {
    titleFa: (0, import_fields11.text)({ label: "\u0639\u0646\u0648\u0627\u0646 (\u0641\u0627\u0631\u0633\u06CC)", validation: { isRequired: true } }),
    titleEn: (0, import_fields11.text)({ label: "\u0639\u0646\u0648\u0627\u0646 (\u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC)" }),
    descriptionFa: (0, import_fields11.text)({ label: "\u062A\u0648\u0636\u06CC\u062D\u0627\u062A (\u0641\u0627\u0631\u0633\u06CC)", ui: { displayMode: "textarea" } }),
    descriptionEn: (0, import_fields11.text)({ label: "\u062A\u0648\u0636\u06CC\u062D\u0627\u062A (\u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC)", ui: { displayMode: "textarea" } }),
    date: (0, import_fields11.timestamp)({ label: "\u062A\u0627\u0631\u06CC\u062E", validation: { isRequired: true } }),
    medias: (0, import_fields11.relationship)({
      ref: "GalleryMedia.gallery",
      many: true,
      label: "\u0645\u062F\u06CC\u0627\u0647\u0627",
      ui: {
        displayMode: "cards",
        cardFields: ["file", "type", "sortOrder"],
        inlineCreate: { fields: ["file", "type", "sortOrder"] },
        inlineEdit: { fields: ["file", "type", "sortOrder"] },
        linkToItem: true,
        removeMode: "disconnect"
      }
    })
  }
});

// lists/index.ts
var lists_default = {
  User: User_list_default,
  Image: Image_list_default,
  MainPageImage: MainPageImage_list_default,
  Project: Project_list_default,
  ProjectImage: ProjectImage_list_default,
  Certificate: Certificate_list_default,
  Report: Report_list_default,
  ReportImage: ReportImage_list_default,
  Award: Award_list_default,
  GalleryMedia: GalleryMedia_list_default,
  Gallery: Gallery_list_default
};

// schema.ts
var lists = {
  User: lists_default.User,
  Image: lists_default.Image,
  MainPageImage: lists_default.MainPageImage,
  Project: lists_default.Project,
  ProjectImage: lists_default.ProjectImage,
  Certificate: lists_default.Certificate,
  Report: lists_default.Report,
  ReportImage: lists_default.ReportImage,
  Award: lists_default.Award,
  GalleryMedia: lists_default.GalleryMedia,
  Gallery: lists_default.Gallery
  // Post: list({
  //   // WARNING
  //   //   for this starter project, anyone can create, query, update and delete anything
  //   //   if you want to prevent random people on the internet from accessing your data,
  //   //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
  //   access: allowAll,
  //   // this is the fields for our Post list
  //   fields: {
  //     title: text({ validation: { isRequired: true } }),
  //     // the document field can be used for making rich editable content
  //     //   you can find out more at https://keystonejs.com/docs/guides/document-fields
  // content: document({
  //   formatting: true,
  //   layouts: [
  //     [1, 1],
  //     [1, 1, 1],
  //     [2, 1],
  //     [1, 2],
  //     [1, 2, 1],
  //   ],
  //   links: true,
  //   dividers: true,
  // }),
  //     // with this field, you can set a User as the author for a Post
  //     author: relationship({
  //       // we could have used 'User', but then the relationship would only be 1-way
  //       ref: "User.posts",
  //       // this is some customisations for changing how this will look in the AdminUI
  //       ui: {
  //         displayMode: "cards",
  //         cardFields: ["name", "email"],
  //         inlineEdit: { fields: ["name", "email"] },
  //         linkToItem: true,
  //         inlineConnect: true,
  //       },
  //       // a Post can only have one author
  //       //   this is the default, but we show it here for verbosity
  //       many: false,
  //     }),
  //     // with this field, you can add some Tags to Posts
  //     tags: relationship({
  //       // we could have used 'Tag', but then the relationship would only be 1-way
  //       ref: "Tag.posts",
  //       // a Post can have many Tags, not just one
  //       many: true,
  //       // this is some customisations for changing how this will look in the AdminUI
  //       ui: {
  //         displayMode: "cards",
  //         cardFields: ["name"],
  //         inlineEdit: { fields: ["name"] },
  //         linkToItem: true,
  //         inlineConnect: true,
  //         inlineCreate: { fields: ["name"] },
  //       },
  //     }),
  //   },
  // }),
  // // this last list is our Tag list, it only has a name field for now
  // Tag: list({
  //   // WARNING
  //   //   for this starter project, anyone can create, query, update and delete anything
  //   //   if you want to prevent random people on the internet from accessing your data,
  //   //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
  //   access: allowAll,
  //   // setting this to isHidden for the user interface prevents this list being visible in the Admin UI
  //   ui: {
  //     isHidden: true,
  //   },
  //   // this is the fields for our Tag list
  //   fields: {
  //     name: text(),
  //     // this can be helpful to find out all the Posts associated with a Tag
  //     posts: relationship({ ref: "Post.tags", many: true }),
  //   },
  // }),
};

// auth.ts
var import_auth = require("@keystone-6/auth");
var import_session = require("@keystone-6/core/session");
var { withAuth } = (0, import_auth.createAuth)({
  listKey: "User",
  identityField: "email",
  // this is a GraphQL query fragment for fetching what data will be attached to a context.session
  //   this can be helpful for when you are writing your access control functions
  //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
  sessionData: "name createdAt",
  secretField: "password",
  // WARNING: remove initFirstItem functionality in production
  //   see https://keystonejs.com/docs/config/auth#init-first-item for more
  initFirstItem: {
    // if there are no items in the database, by configuring this field
    //   you are asking the Keystone AdminUI to create a new user
    //   providing inputs for these fields
    fields: ["name", "email", "password"]
    // it uses context.sudo() to do this, which bypasses any access control you might have
    //   you shouldn't use this in production
  }
});
var sessionMaxAge = 60 * 60 * 24 * 30;
var session = (0, import_session.statelessSessions)({
  maxAge: sessionMaxAge,
  secret: process.env.SESSION_SECRET
});

// keystone.ts
var keystone_default = withAuth(
  (0, import_core12.config)({
    db: {
      // we're using sqlite for the fastest startup experience
      //   for more information on what database might be appropriate for you
      //   see https://keystonejs.com/docs/guides/choosing-a-database#title
      provider: "sqlite",
      url: "file:./keystone.db"
    },
    storage: {
      main_images: {
        // Images that use this store will be stored on the local machine
        kind: "local",
        // This store is used for the image field type
        type: "image",
        // The URL that is returned in the Keystone GraphQL API
        generateUrl: (path) => `/uploads/main/${path}`,
        // The route that will be created in Keystone's backend to serve the images
        serverRoute: {
          path: "/uploads/main"
        },
        // Set serverRoute to null if you don't want a route to be created in Keystone
        // serverRoute: null
        storagePath: "public/uploads/main"
      },
      project_images: {
        kind: "local",
        type: "image",
        generateUrl: (path) => `/uploads/project/${path}`,
        serverRoute: {
          path: "/uploads/project"
        },
        storagePath: "public/uploads/project"
      },
      images: {
        kind: "local",
        type: "image",
        generateUrl: (path) => `/images${path}`,
        serverRoute: {
          path: "/images"
        },
        storagePath: "public/images"
      },
      certificate_images: {
        kind: "local",
        type: "image",
        generateUrl: (path) => `/uploads/certificates/${path}`,
        serverRoute: { path: "/uploads/certificates" },
        storagePath: "public/uploads/certificates"
      },
      news_images: {
        kind: "local",
        type: "image",
        generateUrl: (path) => `/uploads/news_/${path}`,
        serverRoute: { path: "/uploads/news_" },
        storagePath: "public/uploads/news_"
      },
      gallery_files: {
        kind: "local",
        type: "file",
        generateUrl: (path) => `/uploads/gallery/${path}`,
        serverRoute: { path: "/uploads/gallery" },
        storagePath: "public/uploads/gallery"
      }
    },
    lists,
    session
  })
);
//# sourceMappingURL=config.js.map
