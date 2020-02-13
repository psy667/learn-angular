import gql from "graphql-tag";
import {Injectable} from "@angular/core";
import {Mutation, Query} from "apollo-angular";
import {Post} from "../generated/graphql";


@Injectable({
    providedIn: "root"
})
export class GetPostsGQL extends Query<Post> {
    document = gql`
        query Posts {
            posts {
                id
                title
                claps
                user {
                    firstname
                    id
                }
            }
        }
    `
}

@Injectable({
    providedIn: "root"
})
export class IncrementPostClapsMutation extends Mutation<any> {
    document = gql`
        mutation IncrementPostClapsMutation($id: ID!){
            incrementPostClaps(id: $id)
        }
    `
}