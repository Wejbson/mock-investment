import { ReactNode } from 'react';

export interface AccountButtonProps {
    children?: ReactNode;
    onClick?(): void;
    background?: string;
    className?: string;
}

export default function AccountButton(props: AccountButtonProps) {
    const { children, onClick, background = '#213890', className } = props;

    return (
        <>
            <button className={className} onClick={onClick}>
                {children}
            </button>

            <style jsx>
                {`
                    button {
                        width: 100%;
                        height: 5.5vh;
                        font-size: 1.3rem;
                        font-weight: bold;
                        color: white;
                        border: none;
                        background: ${background};
                    }
                `}
            </style>
        </>
    );
}
