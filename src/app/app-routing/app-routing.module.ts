import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PostsComponent} from "../posts/posts.component";
import {PostPageComponent} from "../post-page/post-page.component";

const routes: Routes = [
  {path: '', component: PostsComponent, children: [
      {path: 'post/:id', component: PostPageComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
