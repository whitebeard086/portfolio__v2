export default {
  name: "heroVideo",
  title: "Hero Video",
  type: "document",
  fields: [
    {
      name: "video",
      title: "Video",
      type: "file",
      options: {
        accept: "video/mp4",
      },
    },
    {
      name: "alt",
      title: "Alternative text",
      type: "string",
    },
  ],
};
