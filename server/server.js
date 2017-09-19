const { graphql } = require('graphql');
const graphqlHTTP = require('express-graphql');
const express = require('express');
const cors = require('cors');
const app = express();

app.set('port', (process.env.API_PORT || 3001));

app.get('/', function (req, res) {
  res.status(200).send('ok');
});

var schema = require('./src/graphql/schema');

app.use('/graphql', cors(), graphqlHTTP({
  schema: schema,
  pretty: true,
  graphiql: true,
  formatError: error => console.log(error),
}));

var server = app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});

module.exports = server;
