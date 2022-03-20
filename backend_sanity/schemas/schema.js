// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import projects from "./projects";
import testimonials from "./testimonials";
import brands from "./brands";
import categories from "./categories";
import about from "./about";
import experiences from "./experiences";
import footer from "./footer";
import imageAssets from "./imageAssets";
import assets from "./assets";
import skills from "./skills";
import workExperience from "./workExperience";
import contact from "./contact";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    projects,
    testimonials,
    brands,
    categories,
    about,
    skills,
    workExperience,
    experiences,
    footer,
    imageAssets,
    assets,
    contact,
    /* Your types here! */
  ]),
});
