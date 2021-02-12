export default {
  name: "team",
  title: "L'Equipe",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nom & Prenoms",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "role",
      title: "Position dans l'Association",
      type: "string",
    },
    {
      name: "image",
      title: "Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "bio",
      title: "Biographie",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "role",
      author: "name",
      media: "image",
    },
  },
};
