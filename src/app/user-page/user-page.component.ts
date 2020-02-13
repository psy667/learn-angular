import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {GetUser, GetUsers} from "../Queries/users.query";
import {ActivatedRoute, Params} from "@angular/router";
import {map, switchMap} from "rxjs/operators";
import {ApolloQueryResult} from "apollo-client";

@Component({
    selector: 'app-user-page',
    templateUrl: './user-page.component.html',
    styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
    users$: Observable<any>;
    user$: Observable<any>;

    constructor(
        private getUser: GetUser,
        private route: ActivatedRoute,
    ) {
    }

    ngOnInit() {
        this.user$ = this.route.params
            .pipe(
                switchMap((params: Params) => {
                    const n =  this.getUser
                        .watch({
                            userID: params['id']
                        })
                        .valueChanges
                        .pipe(map((result: ApolloQueryResult<any>) => {
                            return {
                                ...result.data.user,
                                rating: result.data.user.posts.reduce((acc, cur) => acc + cur.claps, 0)
                            }
                        }))
                    console.log(n);
                    return n;
                })
            )
    }
}
