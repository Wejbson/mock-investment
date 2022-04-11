import FormInput from '@components/account/formInput';
import AccountButton from '@components/account/accountButton';
import useInput from '@hooks/common/useInput';
import useForm from '@hooks/common/useForm';
import useLogin from '@hooks/account/login/useLogin';
import AccountFormStyle from '@components/account/accountFormStyle';
import Link from 'next/link';

export default function Login() {
    const useInputId = useInput({ initialValue: '' });
    const useInputPassword = useInput({ initialValue: '' });
    const { login } = useLogin({ id: useInputId.value as string, password: useInputPassword.value as string });
    const useFormLogin = useForm({ onSubmit: login });

    return (
        <>
            <form {...useFormLogin}>
                <div className={'form-wrapper'}>
                    <div className={'input-wrapper'}>
                        <FormInput title={'아이디'} {...useInputId} required />
                        <FormInput title={'비밀번호'} {...useInputPassword} type={'password'} required />
                    </div>

                    <AccountButton className={'button--submit'}>로그인</AccountButton>

                    <Link href={'/account/sign-up'}>
                        <p className={'link--register'}>회원가입</p>
                    </Link>
                </div>
            </form>

            <AccountFormStyle />
        </>
    );
}
