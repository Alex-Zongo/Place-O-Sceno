export default {
  name: "gallery",
  title: "Galerie",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titre",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "publishedAt",
      title: "Publié le",
      type: "datetime",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
