'use strict';

const { graphql, buildSchema } = require('graphql');

// Contiene las capacidades y funcionalidades de nuestro servidor
const schema = buildSchema(`
type Video {
  id: ID,
  title: String,
  duration: Int,
  watched: Boolean
}

type Query {
  video: Video
  videos: [Video]
}

type Schema {
  query: Query
}
`);

const videoA = {
  id: 2,
  title: 'Coco',
  duration: 120,
  watched: false
};

const videoB = {
  id: 3,
  title: 'Black Panter',
  duration: 220,
  watched: true
};

const videos = [videoA, videoB];

// Se encarga de obtener los datos
const resolvers = {
  video: () => ({
    id: 1,
    title: 'Star Wars',
    duration: 90,
    watched: true
  }),
  videos: () => videos
};

// El query que hacemos a nuestro servidor
const query = `
query myFirstQuery {
  videos {
    id
    title
  }
}
`;

graphql(schema, query, resolvers) // Regresa una promesa
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
