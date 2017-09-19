/**
 * @flow
 * @relayHash 95222e1e5df154e16899fa8c350b4e40
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type mainQueryResponse = {|
  +artistsList: ?$ReadOnlyArray<?{|
    +name: ?string;
    +key: string;
  |}>;
|};
*/


/*
query mainQuery {
  artistsList {
    name
    key: id
    id
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "mainQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "ArtistType",
        "name": "artistsList",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "name",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": "key",
            "args": null,
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "ArtistList"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "mainQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "mainQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "ArtistType",
        "name": "artistsList",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "name",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": "key",
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query mainQuery {\n  artistsList {\n    name\n    key: id\n    id\n  }\n}\n"
};

module.exports = batch;
