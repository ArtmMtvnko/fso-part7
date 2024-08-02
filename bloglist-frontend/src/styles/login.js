import { css } from '@emotion/css';

export const loginBtn = css`
    background-color: #f0f0f0;
`

export const loginForm = css`
    margin: 0 auto;
    max-width: fit-content;

    & > div {
        margin: 10px 0;

        & > label {
            margin-right: 15px;
        }

        & > input {
            padding: 5px;
            width: 250px;
        }
    }
`