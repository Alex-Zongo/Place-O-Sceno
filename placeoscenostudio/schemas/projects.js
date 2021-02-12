export default {
  name: "project",
  title: "Créations & Projets",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titre du projet",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "image",
      title: "Image principale ou poster",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "publishedAt",
      title: "Réalisé le:",
      type: "datetime",
    },
    {
      name: "author",
      title: "Auteur",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "description",
      title: "Details du Projet ou de la Creation réalisée",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
