import { Component } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { PostsService, Post } from "../posts.service";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"]
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.post = this.postService.getById(+params.id);
    });
  }

  loadPost() {
    this.router.navigate(["/posts", 44]);
  }
}
