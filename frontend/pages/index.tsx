import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useAccount from '@hooks/account/useAccount';

export default function Home() {
    const router = useRouter();
    const { isLogin, isLoginInit } = useAccount();

    useEffect(() => {
        if (!isLoginInit) {
            return;
        }

        if (!isLogin) {
            router.push('/account/login');
        }
    }, [isLogin, isLoginInit]);

    return <>home</>;
}
