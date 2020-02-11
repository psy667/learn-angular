import {IConfigState} from "../state/config.state";
import {IAppState} from "../state/app.state";
import {createSelector} from "@ngrx/store";

const configState = (state: IAppState) => state.config;

export const selectConfig = createSelector(
    configState,
    (state: IConfigState) => state.config,
);

