import {createGlobalStyle} from 'styled-components'
import colors from './colors'

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        border: none;
    }

    body{
        width: 100vw;
        height: 100vh;
        background: ${colors.foreground}
    }

    input, h1, h2, h3, h4, h5, h6, button, span, strong{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        

    }
`

export {GlobalStyle}