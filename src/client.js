import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "u8h1sjl4",
  dataset: "production",
  useCdn: true,
});
