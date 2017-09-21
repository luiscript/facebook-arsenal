/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type artistFlatList = {|
  +artistsList: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +key: string;
        +name: ?string;
        +albums: ?{|
          +edges: ?$ReadOnlyArray<?{|
            +node: ?{|
              +key: string;
              +title: ?string;
              +coverUrl: ?string;
              +description: ?string;
            |};
          |}>;
        |};
      |};
    |}>;
  |};
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "backward",
        "path": [
          "artistsList"
        ]
      }
    ]
  },
  "name": "artistFlatList",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "artistsList",
      "args": null,
      "concreteType": "ArtistTypeConnection",
      "name": "__artistFlatList_artistsList_connection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "ArtistTypeEdge",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "args": null,
              "concreteType": "ArtistType",
              "name": "node",
              "plural": false,
              "selections": [
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
                  "name": "name",
                  "storageKey": null
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "args": null,
                  "concreteType": "AlbumTypeConnection",
                  "name": "albums",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "args": null,
                      "concreteType": "AlbumTypeEdge",
                      "name": "edges",
                      "plural": true,
                      "selections": [
                        {
                          "kind": "LinkedField",
                          "alias": null,
                          "args": null,
                          "concreteType": "AlbumType",
                          "name": "node",
                          "plural": false,
                          "selections": [
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
                              "name": "title",
                              "storageKey": null
                            },
                            {
                              "kind": "ScalarField",
                              "alias": null,
                              "args": null,
                              "name": "coverUrl",
                              "storageKey": null
                            },
                            {
                              "kind": "ScalarField",
                              "alias": null,
                              "args": null,
                              "name": "description",
                              "storageKey": null
                            }
                          ],
                          "storageKey": null
                        }
                      ],
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "artistsList"
};

module.exports = fragment;
