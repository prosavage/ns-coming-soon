import { createGlobalStyle, ThemeProvider } from "styled-components";
import PropsTheme from "./theme/PropsTheme";

const GlobalStyle = createGlobalStyle`

    body {
        transition: 250ms all;
        color: ${(props: PropsTheme) => props.theme.color};
        background: ${(props: PropsTheme) => props.theme.background};
        padding: 0;
        margin: 0;
        font-family: 'Roboto', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    * {
        box-sizing: border-box;
        margin: 0;
    }

    a {
        color: ${(props: PropsTheme) => props.theme.color};
        text-decoration: none;
    }

    p {
        font-size: 1rem;
        line-height: 29px;
    }

    h1 {
        font-size: 3.5rem;

       
    }

    input {
        outline: none;
        border: white;
        background: ${(props: PropsTheme) => props.theme.background};
        border-radius: 5px;
        box-shadow: 0px 15px 31px ${(props: PropsTheme) => props.theme.boxShadowAccentColor};
        color: ${(props: PropsTheme) => props.theme.colorSecondary};
        padding: 15px;
    }

    button {
        padding: 15px;
    }


`

export default GlobalStyle;