import { HTMLInputTypeAttribute } from 'react';

export interface FormInputProps {
    title: string;
    value: string;
    type?: HTMLInputTypeAttribute;
    onChangeValue(value: string): void;
}

export default function FormInput(props: FormInputProps) {
    const { title, value, type, onChangeValue } = props;

    return (
        <>
            <div>
                <input value={value} placeholder={title} onChange={(e) => onChangeValue(e.target.value)} type={type} />
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
