import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
    const router = useRouter();
    const isLogin: boolean = false;

    useEffect(() => {
        if (!isLogin) {
            router.push('/account/login');
        }
    }, []);

    return <>home</>;
}
