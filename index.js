'use strict';

const { graphql, buildSchema } = require('graphql');

// Contiene las capacidades y funcionalidades de nuestro servidor
const schema = buildSchema(`
type Query {
  id: ID,
  title: String,
  duration: Int,
  watched: Boolean
}

type Schema {
  query: Query
}
`);

// Se encarga de obtener los datos
const resolvers = {
  id: () => '1',
  title: () => 'bar',
  duration: () => 90,
  watched: () => true
};

// El query que hacemos a nuestro servidor
const query = `
query myFirstQuery {
  id
  title
  duration
  watched
}
`;

graphql(schema, query, resolvers) // Regresa una promesa
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
