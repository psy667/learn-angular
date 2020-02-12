import { Component, OnInit } from '@angular/core';
import {Apollo} from "apollo-angular";
import {map} from "rxjs/operators";
import {PostsQuery} from "../Queries/posts.query";
import {Observable} from "rxjs";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Observable<any>

  constructor(
      private apollo: Apollo
  ) { }
  ngOnInit() {
    this.posts = this.apollo
        .watchQuery({query: PostsQuery})
        .valueChanges.pipe(map(({data}) => data.posts))
  }

}
