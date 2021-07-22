import React from "react";
// import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

const list = [
  { id: 1, title: "name" },
  { id: 2, title: "word" },
];

const item = [{ name: "rishu" }, { name: "rubeena" }];

function graphql() {
  var schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: "RootQueryType",
      list: { type: GraphQLObjectType },
      datalist: { type: GraphQLObjectType },
      fields: {
        list: {
          type: GraphQLString,
          resolve() {
            return JSON.stringify(list);
          },
        },
        datalist: {
          type: GraphQLString,
          resolve() {
            return JSON.stringify(item);
          },
        },
      },
    }),
  });

  var query = "{list, datalist}";

  return (
    <>
      {/* <Switch>
                <Route path="/" component />
            </Switch> */}
      <h1>hello</h1>
      <button
        onClick={async () => {
          let res = await graphql(schema, query);
          console.log(res);
        let result = JSON.parse(res.data.list)
        let items = JSON.parse(res.data.datalist)
          console.log(result);
          console.log(items);
        }}
      >
        click me
      </button>
    </>
  );
}

// export default graphql;
