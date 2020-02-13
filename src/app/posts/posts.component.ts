import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {PostsService} from "../posts.service";
import {GetPostsGQL, IncrementPostClapsMutation} from "../Queries/posts.query";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts$: Observable<any>;


  constructor(
      private getPostsGQL: GetPostsGQL,
      private postsService: PostsService,
      private incrementPostClaps: IncrementPostClapsMutation,
  )
  {}

  ngOnInit() {
    this.posts$ = this.getPostsGQL.watch()
        .valueChanges
        .pipe(
            map(result => result.data.posts)
        )

  }

  handleIncrementPostClaps(id) {
    this.incrementPostClaps.mutate({id}).subscribe();
  }
}
