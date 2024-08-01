import { css } from '@emotion/css';

export const buttonStyles = css`
    padding: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    border: 1px solid gray;
    border-radius: 5px;
    background-color: transparent;
    transition: 0.3s ease-out;

    &:hover {
        background-color: lightgray;
        box-shadow: inset 0 0 6px gray;
    }

    &:active {
        background-color: gray;
    }
`