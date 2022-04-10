import { HTMLProps } from 'react';

export interface IUseFormParams {
    onSubmit: () => void;
}

export interface IUseForm extends Pick<HTMLProps<HTMLFormElement>, 'onSubmit'> {}

export default function useForm(params: IUseFormParams): IUseForm {
    const { onSubmit } = params;

    return {
        onSubmit: (e) => {
            e.preventDefault();
            onSubmit();
        },
    };
}
