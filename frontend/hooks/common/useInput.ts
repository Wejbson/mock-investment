import { ChangeEventHandler, HTMLProps, useState } from 'react';

export interface IUseInputParams {
    initialValue: string;
    onChangeValueValid?: (value: string) => boolean;
}

export interface IUseInput extends Pick<HTMLProps<HTMLInputElement>, 'value' | 'onChange'> {}

export default function useInput(params: IUseInputParams): IUseInput {
    const { initialValue, onChangeValueValid = () => true } = params;
    const [value, setValue] = useState(initialValue);

    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        if (onChangeValueValid(e.target.value)) {
            setValue(e.target.value);
        }
    };

    return { value, onChange };
}
