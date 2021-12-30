import { createGlobalStyle  } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root{
        --background: #711BB3;
        --button: #AC40FF;
        --red: #e52e4d;
        --green: #33cc95;
        --blue: #5429cc;
        --blue-light: #6933ff;
        --text-title: #363f5f;
        --text-body: #969cb3;
        
        --shape: #ffffff;
    }

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    }
`