import gql from "graphql-tag";
import {Injectable} from "@angular/core";
import {Query} from "apollo-angular";



@Injectable({
    providedIn: "root",
})
export class GetUser extends Query<any> {
    document = gql`
        query User($userID: ID!) {
            user(id: $userID){
                firstname
                age
                posts {
                    claps
                    id
                    title
                    date
                }
            }
        }
    `
}