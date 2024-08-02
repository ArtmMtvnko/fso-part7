import { css } from '@emotion/css';

export const container = css`
    max-width: 900px;
    margin: 0 auto;
`

export const containerFn = (maxWidth) => css`
    max-width: ${maxWidth};
    margin: 0 auto;
`