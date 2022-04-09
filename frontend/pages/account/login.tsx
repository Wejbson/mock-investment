import FormInput from '@components/account/formInput';
import { useState } from 'react';
import AccountButton from '@components/account/accountButton';

export interface LoginProps {}

export default function Login(props: LoginProps) {
    const {} = props;
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <form>
                <div className={'form-wrapper'}>
                    <div className={'input-wrapper'}>
                        <FormInput title={'아이디'} value={id} onChangeValue={setId} />
                        <FormInput title={'비밀번호'} value={password} type={'password'} onChangeValue={setPassword} />
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
