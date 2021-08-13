import fetch from 'isomorphic-fetch';
const path = require('path');

// enables absolute imports
export const onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

// sourcing APIs to gatsby node API
const fetchPartsToNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const res = await fetch('http://localhost:9001/parts');
  const parts = await res.json();

  console.log('parts: ', parts);

  for (const part of parts) {
    // create a node for each beer
    const nodeMeta = {
      id: part.id,
      parent: null,
      children: [],
      internal: {
        type: 'Part',
        mediaType: 'application/json',
        contentDigest: createContentDigest(part),
      },
    };

    actions.createNode({
      ...part,
      ...nodeMeta,
    });
  }
};

export const sourceNodes = async (params) => {
  // build nodes concurrently
  await Promise.all([fetchPartsToNodes(params)]);
};

// sourcing events from sanity CMS and creating pages
const partsToPages = async ({ graphql, actions }) => {
  const partTemplate = path.resolve('./src/templates/PartDisplayPage.jsx');

  const { data } = await graphql(`
    query PartQuery {
      allPart {
        nodes {
          id
        }
      }
    }
  `);

  data.allPart.nodes.forEach((part) => {
    actions.createPage({
      path: `part/${part.id}`,
      component: partTemplate,
      context: {
        slug: part.id,
      },
    });
  });
};

export const createPages = async (params) => {
  // create pages concurrently
  await Promise.all([partsToPages(params)]);
};
