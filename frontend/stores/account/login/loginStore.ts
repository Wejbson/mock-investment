import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import LoginResDto from '@models/account/res/loginResDto';

export type LoginState = LoginResDto | null;

export type LoginReducers = {
    setLoginInfo: CaseReducer<LoginState, PayloadAction<LoginResDto>>;
};

const loginSlice = createSlice<LoginState, LoginReducers>({
    name: 'login',
    initialState: null,
    reducers: {
        setLoginInfo(state, action) {
            state = action.payload;
        },
    },
});

export const { setLoginInfo } = loginSlice.actions;

const loginReducer = loginSlice.reducer;
export default loginReducer;
