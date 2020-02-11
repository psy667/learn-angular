import {ActionReducerMap} from "@ngrx/store";
import {IAppState} from "../state/app.state";
import {routerReducer} from "@ngrx/router-store";
import {configReducers} from "./config.reducers";
import {userReducers} from "./users.reducers";

export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    users: userReducers,
    config: configReducers,
}