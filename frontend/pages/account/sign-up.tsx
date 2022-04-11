import AccountFormStyle from '@components/account/accountFormStyle';
import FormInput from '@components/account/formInput';
import useInput from '@hooks/common/useInput';
import AccountButton from '@components/account/accountButton';
import useForm from '@hooks/common/useForm';
import useSignUp from '@hooks/account/sign-up/useSignUp';

export default function SignUp() {
    const useInputId = useInput({ initialValue: '' });
    const useInputPassword = useInput({ initialValue: '' });
    const useInputName = useInput({ initialValue: '' });
    const useInputTel = useInput({ initialValue: '' });
    const { signUp } = useSignUp({
        id: useInputId.value as string,
        password: useInputPassword.value as string,
        name: useInputPassword.value as string,
        tel: useInputTel.value as string,
    });
    const useFormSignUp = useForm({ onSubmit: signUp });

    return (
        <>
            <form {...useFormSignUp}>
                <div>
                    <div className={'input-wrapper'}>
                        <FormInput title={'아이디'} {...useInputId} required />
                        <FormInput title={'비밀번호'} {...useInputPassword} type={'password'} required />
                        <FormInput title={'이름'} {...useInputName} required />
                        <FormInput title={'휴대전화'} {...useInputTel} type={'number'} required />
                    </div>

                    <AccountButton className={'button--submit'}>회원가입</AccountButton>
                </div>
            </form>

            <AccountFormStyle />
        </>
    );
}
