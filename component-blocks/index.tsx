// admin/component-blocks.tsx
import React from "react";
import { component, fields, NotEditable } from "@keystone-6/fields-document/component-blocks";

export const componentBlocks = {
  ImageBlock: component({
    label: "تصویر",
    preview: (props) => {
      const rel = props.fields.image.value as
        | { id: string; label?: string; data?: { alt?: string; file?: { url?: string } } }
        | null;
      const url = rel?.data?.file?.url ?? "";
      const alt = rel?.data?.alt ?? rel?.label ?? "";
      const width = (props.fields.width.value as "full" | "half") ?? "full";

      const imgWidthStyle = width === "half" ? { width: "50%" } : { width: "100%" };

      return (
        <figure style={{ margin: 0, position: "relative" }}>
          {/* non-editable image / placeholder */}
          <NotEditable>
            {url ? (
              <img
                src={url}
                alt={alt}
                style={{ display: "block", ...imgWidthStyle, height: "auto", borderRadius: 6 }}
              />
            ) : (
              <div
                style={{
                  padding: 24,
                  border: "1px dashed #cbd5e0",
                  borderRadius: 8,
                  textAlign: "center",
                  ...imgWidthStyle,
                }}
              >
                تصویر انتخاب/آپلود نشده است
              </div>
            )}
          </NotEditable>

          {/* FULL-AREA clickable overlay — outer wrapper ignores pointer events,
              inner wrapper receives them so the Keystone relationship UI works */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 60,
              pointerEvents: "none", // allow clicks through to the inner wrapper only
            }}
          >
            <div style={{ pointerEvents: "auto" }}>
              {props.fields.image.element}
            </div>
          </div>

          {/* editable caption */}
          <figcaption style={{ opacity: 0.9, fontSize: 13, marginTop: 8 }}>
            {props.fields.caption.element}
          </figcaption>
        </figure>
      );
    },
    schema: {
      image: fields.relationship({
        label: "انتخاب تصویر",
        listKey: "ReportImage", // <- make sure this matches your list exactly
        selection: "id alt file { url }",
      }),
      caption: fields.child({ kind: "inline", placeholder: "توضیح تصویر (اختیاری)" }),
      width: fields.select({
        label: "عرض",
        options: [
          { label: "تمام عرض", value: "full" },
          { label: "نیمه عرض", value: "half" },
        ],
        defaultValue: "full",
      }),
    },
  }),
};
