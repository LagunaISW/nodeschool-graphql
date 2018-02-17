'use strict';

const { graphql, buildSchema } = require('graphql');

// Contiene las capacidades y funcionalidades de nuestro servidor
const schema = buildSchema(`
type Query {
  foo: String
}

type Schema {
  query: Query
}
`);

// Se encarga de obtener los datos
const resolvers = {
  foo: () => 'bar'
};

// El query que hacemos a nuestro servidor
const query = `
query myFirstQuery {
  foo
}
`;

graphql(schema, query, resolvers) // Regresa una promesa
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
