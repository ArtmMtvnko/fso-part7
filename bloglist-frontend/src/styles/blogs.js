import { css } from '@emotion/css';

export const blogsContainer = css`
    margin: 0 auto;
    max-width: 600px;
`

export const blogCard = css`
    margin: 10px 0;
    padding: 5px 10px;
    border: 1px solid gray;
    border-radius: 8px;
    box-shadow: 2px 2px 5px gray;
    transition: 0.3s ease-out;

    @media(min-width: 768px) {
        &:hover {
            transform: translate(-10px, 0);
            box-shadow: 7px 5px 10px gray;
        }
    }
`

export const blogLink = css`
    text-decoration: none;
    color: black;
    font-size: 1.25rem;
    
    &:visited {
        color: none;
    }

    &:hover {
        text-decoration: underline;
    }
`