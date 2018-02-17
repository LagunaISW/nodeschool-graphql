'use strict';

const express = require('express');
const graphqlHTTP = require('express-graphql');
const { graphql, buildSchema } = require('graphql');

const PORT = process.env.PORT || 3000;
const server = express();

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

server.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
  rootValue: resolvers
}));

server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
