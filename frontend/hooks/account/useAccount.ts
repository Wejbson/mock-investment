import { StorageKey } from '@defines/stoargeKey';
import { useEffect, useState } from 'react';

export interface IUseAccount {
    isLogin: boolean;
    setIsLogin(isLogin: boolean): void;
    isLoginInit: boolean;
}

export default function useAccount(): IUseAccount {
    const [isLoginInit, setIsLoginInit] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        setIsLogin(!!localStorage.getItem(StorageKey.TOKEN));
        setIsLoginInit(true);
    }, []);

    return {
        isLogin,
        setIsLogin,
        isLoginInit,
    };
}
