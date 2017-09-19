import {
  Environment,
  Network,
  RecordSource,
  Store
} from 'relay-runtime';


function fetchQuery(
  operation,
  variables,
  cacheConfig,
  uploadables,
) {
  return fetch('http://localhost:3001/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}

const source = new RecordSource();
const store = new Store(source);
const network = new Network.create(fetchQuery);
const handlerProvider = null;


const environment = new Environment({
  handlerProvider,
  network,
  store
});

exports.environment = environment;
