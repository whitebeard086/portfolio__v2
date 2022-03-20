export default {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "phone",
      title: "Phone",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "successMessage",
      title: "Success Message",
      type: "string",
    },
  ],
};
