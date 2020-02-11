import {Injectable} from "@angular/core";
import {EUserActions, GetUser, GetUsers, GetUsersSuccess, GetUserSuccess} from "../actions/user.actions";
import {map, switchMap, withLatestFrom} from "rxjs/operators";
import {select} from "@ngrx/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {of} from "rxjs";
import {IAppState} from "../state/app.state";
import {Store} from "@ngrx/store";
import {GetConfig, GetConfigSuccess} from "../actions/config.actions";
import {IConfig} from "../../interfaces/iconfig";
import {ConfigService} from "../../services/config.service";

@Injectable()
export class ConfigEffects {
    @Effect()
    getUsers$ = this._actions$.pipe(
        ofType<GetConfig>(EUserActions.GetUsers),
        switchMap(() => this._configService.getConfig()),
        switchMap((config: IConfig) => {
            return of(new GetConfigSuccess(config))
        }
    ))

    constructor(
       private _configService: ConfigService,
       private _actions$: Actions
    ) {}
}



