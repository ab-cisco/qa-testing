import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
    isUserLoggedIn: false,
    userInfo: {
        username: 'lucky.jesse',
        email: 'email@email.com',
        firstName: 'Джессика',
        lastName: 'Джонс',
        address: 'Кутузовская 32 к. 1',
        city: 'Москва',
        country: 'Россия',
        postCode: 112223,
        about: 'Целеустремленный аналитик, люблю кино и сериалы.'
    }
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_USER_LOGGED_IN:
            return {
                ...state,
                isUserLoggedIn: action.payload,
            };
        case UserActionTypes.SET_USER_INFO:
            return {
                ...state,
                userInfo: {...action.payload},
            };
        default:
            return state;
    }
};

export default userReducer;