import gql from "graphql-tag";
import {Injectable} from "@angular/core";
import {Query} from "apollo-angular";


@Injectable({
    providedIn: "root"
})
export class GetPostsGQL extends Query<any> {
    document = gql`
        query Posts {
            posts {
                id
                title
                claps
                user {
                    firstname
                }
            }
        }
    `
}

export const IncrementPostClapsMutation = gql`
    mutation IncrementPostClapsMutation($id: ID!){
        incrementPostClaps(id: $id)
    }
`