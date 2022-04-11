import { AccountRequest } from '@requests/account/accountRequest';
import SignUpReqDto from '@models/account/req/signUpReqDto';
import { useRouter } from 'next/router';

export interface IUseSignUpParams extends SignUpReqDto {}

export interface IUseSignUp {
    signUp(): void;
}

export default function useSignUp(params: IUseSignUpParams): IUseSignUp {
    const router = useRouter();

    const signUp = async () => {
        const { data } = await AccountRequest.signUp(params);

        if (data === 'success') {
            await router.push('/account/login');
        }
    };

    return {
        signUp,
    };
}
