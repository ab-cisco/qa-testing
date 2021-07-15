import { UserActionTypes } from "./user.types";

export const setUserStatus = (user) => ({
    type: UserActionTypes.SET_USER_LOGGED_IN,
    payload: user,
});

export const setUserInfo = (userInfo) => ({
    type: UserActionTypes.SET_USER_INFO,
    payload: userInfo,
});
