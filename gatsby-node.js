const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // We only want to operate on `Mdx` nodes. If we had content from a remote CMS we could also check to see if the parent node was a `File` node here
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });

    // Remark plugin to use relative image paths in front matter of MDX files
    fmImagesToRelative(node);

    createNodeField({
      // Name of the field you are adding
      name: "slug",
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. We don't need a separating "/" before the value because createFilePath returns a path with the leading "/".
      value: `/pages${value}`
    });

    createNodeField({
      name: "image",
      node,
      // `node.frontmatter.image` is a file name like "pic.jpg" or "folder/pic.jpg"
      value: node.frontmatter.image
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  // Create blog post pages.
  const posts = result.data.allMdx.edges;

  // We'll call `createPage` for each result
  posts.forEach(({ node }) => {
    createPage({
      // This is the slug we created before (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve("./src/templates/cms-page.jsx"),
      // We can use the values in this context in our page layout component
      context: { id: node.id }
    });
  });
};

// This lets us specify where Webpack (which Gatsby uses internally) should look for files to bundle
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      alias: {
        // When we import something starting with `$components` it will be redirected to the componenets folder in the source folder
        $components: path.resolve(__dirname, "src/components"),
        // When we import something starting with `$images` it will be redirected to the content folder
        $images: path.resolve(__dirname, "content"),
        // We do the same for the content variable (since the images folder might get moved eventually)
        $content: path.resolve(__dirname, "content")
      }
    }
  });
};
