export default {
  name: "navbar",
  title: "Navbar",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "resume",
      title: "Resume",
      type: "file",
    },
  ],
};
