import FormInput from '@components/account/formInput';
import AccountButton from '@components/account/accountButton';
import useInput from '@hooks/common/useInput';
import useForm from '@hooks/common/useForm';
import useLogin from '@hooks/account/login/useLogin';

export default function Login() {
    const useInputId = useInput({ initialValue: '' });
    const useInputPassword = useInput({ initialValue: '' });
    const { onClickLogin } = useLogin({ id: useInputId.value as string, password: useInputPassword.value as string });
    const useFormLogin = useForm({ onSubmit: onClickLogin });

    return (
        <>
            <form {...useFormLogin}>
                <div className={'form-wrapper'}>
                    <div className={'input-wrapper'}>
                        <FormInput title={'아이디'} {...useInputId} />
                        <FormInput title={'비밀번호'} {...useInputPassword} type={'password'} />
                    </div>

                    <AccountButton className={'button--login'}>로그인</AccountButton>

                    <button type={'button'} className={'button--register'}>
                        회원가입
                    </button>
                </div>
            </form>

            <style jsx global>
                {`
                    form {
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .input-wrapper > *:not(:first-child) {
                        margin-top: 5vh;
                    }

                    .button--login {
                        margin-top: 5vh;
                    }

                    .button--register {
                        margin-top: 3vh;
                        background: none;
                        width: 100%;
                        border: none;
                        color: #5a5a5a;
                    }
                `}
            </style>
        </>
    );
}
