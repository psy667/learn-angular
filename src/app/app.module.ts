import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {appReducers} from "./store/reducers/app.reducers";
import {UserEffects} from "./store/effects/user.effects";
import {ConfigEffects} from "./store/effects/config.effects";
import {EffectsModule} from "@ngrx/effects";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {environment} from "../environments/environment";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {RouterModule} from "@angular/router";
import {UsersComponent} from "./components/users/users.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {UsersContainerComponent} from "./container/users/users.component";
import {UserComponent} from "./container/user/user.component";
import {UserService} from "./services/user.service";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    UsersContainerComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects, ConfigEffects]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule,
    RouterModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
