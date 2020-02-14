import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Apollo} from "apollo-angular";
import {map} from "rxjs/operators";
import {ApolloQueryResult} from "apollo-client";
import {GetUsersGQL, User} from "../generated/graphql";
import gql from "graphql-tag";

type SortParam = "name" | "rating"

@Component({
    selector: 'app-users-page',
    templateUrl: './users-page.component.html',
    styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {
    users$: Observable<any>;
    sortParameter$: Observable<any>;

    constructor(
        private getUsers: GetUsersGQL,
        private apollo: Apollo,
    ) {
    }

    ngOnInit() {
        this.users$ = this.getUsers
            .watch()
            .valueChanges
            .pipe(
                map(
                    (result: ApolloQueryResult<any>): User[] => {
                        return result.data.users.map(user => {
                            return {
                                ...user,
                                rating: user.posts.reduce((acc, cur) => acc + cur.claps, 0)
                            }
                        })
                    }
                )
            );

        this.sortParameter$ = this.apollo
        .watchQuery({
            query: gql`{sortParameter @client}`
        })
        .valueChanges.pipe(
            map(result => result.data && result.data.sortParameter)
        )
    }

    sortBy(param: SortParam) {
        this.apollo.getClient().writeData({
            data: {sortParameter: param}
        })
    }

}
