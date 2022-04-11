import { useDispatch, useSelector } from 'react-redux';
import { LoginState, setLoginInfo } from '@stores/account/login/loginStore';
import { AccountRequest } from '@requests/account/accountRequest';
import { StorageKey } from '@defines/stoargeKey';
import { useRouter } from 'next/router';

export interface IUseLoginParams {
    id: string;
    password: string;
}

export interface IUseLogin {
    login(): void;
}

export default function useLogin(params: IUseLoginParams): IUseLogin {
    const { id, password } = params;
    const router = useRouter();

    const loginData: LoginState = useSelector((state: LoginState) => state);
    const dispatch = useDispatch();

    const login = async () => {
        const { data } = await AccountRequest.login({ id, password });
        dispatch(setLoginInfo(data));
        localStorage.setItem(StorageKey.TOKEN, data.token);
        await router.push('/');
    };

    return {
        login,
    };
}
