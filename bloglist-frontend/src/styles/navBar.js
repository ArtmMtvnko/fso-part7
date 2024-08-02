import { css } from '@emotion/css'

export const navBarWrap = css`
    background-color: lightgray;
`

export const navBar = css`
    display: flex;
    gap: 25px;
    padding: 5px;

    & > *:last-child {
        margin-left: auto;

        & button {
            background-color: #f0f0f0;
        }
    }
`

export const navBarLoggedIn = css`
    & > span {
        margin-right: 10px;
        font-size: 1.25rem;
    }

    & > button {
        background-color: #f0f0f0;
    }
`