export default function AccountFormStyle() {
    return (
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

                .button--submit {
                    margin-top: 5vh;
                }

                .link--register {
                    margin-top: 3vh;
                    background: none;
                    width: 100%;
                    border: none;
                    color: #5a5a5a;
                    font-size: 0.9rem;
                    text-align: center;
                }
            `}
        </style>
    );
}
