import { useDispatch, useSelector } from 'react-redux';
import { LoginState, setLoginInfo } from '@stores/account/login/loginStore';
import { AccountRequest } from '@requests/account/accountRequest';
import { StorageKey } from '@defines/stoargeKey';

export interface IUseLoginParams {
    id: string;
    password: string;
}

export interface IUseLogin {
    onClickLogin(): void;
}

export default function useLogin(params: IUseLoginParams): IUseLogin {
    const { id, password } = params;

    const loginData: LoginState = useSelector((state: LoginState) => state);
    const dispatch = useDispatch();

    const onClickLogin = async () => {
        const { data } = await AccountRequest.login({ id, password });
        dispatch(setLoginInfo(data));
        localStorage.setItem(StorageKey.TOKEN, data.token);
    };

    return {
        onClickLogin,
    };
}
