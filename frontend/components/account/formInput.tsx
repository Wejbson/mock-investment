import { HTMLProps } from 'react';

export interface FormInputProps extends HTMLProps<HTMLInputElement> {
    title: string;
}

export default function FormInput(props: FormInputProps) {
    const { title, ...rest } = props;

    return (
        <>
            <div>
                <input {...rest} placeholder={title} />
            </div>

            <style jsx>
                {`
                    input {
                        outline: none;
                        border: none;
                        border-bottom: 1px solid #6a6a6a;
                        width: 70vw;
                        font-size: 1.3rem;
                        padding: 1vh 0;
                    }
                `}
            </style>
        </>
    );
}
