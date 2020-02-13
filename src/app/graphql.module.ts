import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import {ApolloLink} from "apollo-link";
import {HttpClientModule} from "@angular/common/http";
import {environment} from "../environments/environment";
import {resolvers} from "./users.resolvers";

// const uri = environment.production;
const uri = environment.gqlServer;

export function createApollo(httpLink: HttpLink) {
  const basic = setContext((operation, context) => ({
    headers: {
      Accept: 'application/json',
    }
  }));

  return {
    link: ApolloLink.from([basic, httpLink.create({uri})]),
    cache: new InMemoryCache(),
    resolvers,
    // typeDefs
  };
}

@NgModule({
  exports: [
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
