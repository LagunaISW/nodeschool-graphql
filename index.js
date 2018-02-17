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
}

type Schema {
  query: Query
}
`);

// Se encarga de obtener los datos
const resolvers = {
  video: () => ({
    id: 1,
    title: 'Star Wars',
    duration: 90,
    watched: true
  })
};

// El query que hacemos a nuestro servidor
const query = `
query myFirstQuery {
  video {
    id
    title
  }
}
`;

graphql(schema, query, resolvers) // Regresa una promesa
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
