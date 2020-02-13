import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {GraphQLModule} from './graphql.module';
import {HttpClientModule} from '@angular/common/http';
import {PostsComponent} from './posts/posts.component';
import {AppRoutingModule} from "./app-routing.module";
import { UserPageComponent } from './user-page/user-page.component';
import { UsersPageComponent } from './users-page/users-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    UserPageComponent,
    UsersPageComponent,
  ],
  imports: [
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}