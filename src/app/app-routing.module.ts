import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PostsComponent} from "./posts/posts.component";
import {UsersPageComponent} from "./users-page/users-page.component";
import {UserPageComponent} from "./user-page/user-page.component";

const routes: Routes = [
  {
    path: '', component: PostsComponent,
  },
  {
    path: 'users', pathMatch: "full", component: UsersPageComponent,

  },
  {
    path: "users/:id", component: UserPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
