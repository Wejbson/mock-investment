import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loginReducer from '@stores/account/login/loginStore';

const rootReducer = combineReducers({
    login: loginReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
