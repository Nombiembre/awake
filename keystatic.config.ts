import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },

  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/blog/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        fecha: fields.date({ label: "Event date" }),
        esconder: fields.checkbox({ label: "Hide" }),
        content: fields.markdoc({
          label: "Content",
        }),
      },
    }),
  },
});
