import {IConfig} from "../../interfaces/iconfig";

export interface IConfigState {
    config: IConfig
}

export const initialConfigState: IConfigState = {
    config: null
};

