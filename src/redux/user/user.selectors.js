import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectUserStatus = createSelector(
    [selectUser],
    (user) => user.isUserLoggedIn
);

export const selectUserInfo = createSelector(
    [selectUser],
    (user) => user.userInfo
)
