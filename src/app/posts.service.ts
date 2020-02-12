import {Injectable} from '@angular/core';
import {Apollo} from "apollo-angular";
import {Subscription} from "rxjs";
import {IncrementPostClapsMutation} from "./Queries/posts.query";

interface Post {
    id: number,
    title: string,
    claps: number
}

@Injectable({
    providedIn: 'root'
})

export class PostsService {

    constructor(private apollo: Apollo) {
    }

    // getPosts(): Observable<Post[]> {
    //     return this.apollo
    //         .watchQuery<Query>({query: PostsQuery})
    //         .valueChanges
    //         .pipe(
    //             map(
    //                 (response: ApolloQueryResult<any>) => response.data.posts
    //             )
    //         )
    // }

    // getPosts():

    incrementPostClaps(id: Number): Subscription {
        return this.apollo
            .mutate({
                mutation: IncrementPostClapsMutation,
                variables: {
                    id: Number(id),
                },
                optimisticResponse: {
                    __typename: 'Mutation',
                    incrementPostClaps: {
                        __typename: "Post",
                        id: 1,
                        claps: 667,
                        title: "TEEEST"
                    }
                }
            }).subscribe();
    }
}
