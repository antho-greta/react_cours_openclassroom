import {createGlobalStyle, ThemeContext} from "styled-components";
import { useContext } from 'react'


const StyleGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

    body {
        background-color: ${({ isDarkMode }) => (isDarkMode ? 'black' : 'white')};
        margin: 0;
    }
`

function GlobalStyle(){
    const { theme } = useContext(ThemeContext);

    return <StyleGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle;