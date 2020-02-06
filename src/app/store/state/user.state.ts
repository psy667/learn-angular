import {IUser} from "../../interfaces/iuser";

export interface IUserState {
    users: IUser[];
    selectedUser: IUser;
};

export const initialUserState: IUserState = {
    users: null,
    selectedUser: null,
};

