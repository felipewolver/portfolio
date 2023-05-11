
import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle `
    
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        text-decoration: none;
        box-sizing: border-box;
    }   

    html {
        scroll-behavior: smooth;
        overflow-x: hidden;
    }

    h2 {
        font-size: 40px;
        font-weight: 500;
        font-family: 'Roboto', sans-serif;
    }
`

const screenSize = {
    large: 1100,
    desktop: 947,
    tablet: 768,
    mobile: 500,
    extraMobile: 415
}

// Configuração da propidedade css @media. Soh vai ser colocado o valor responsivo quando
// chamar essa propiedade no styled-components 
export const media = Object 
    .keys(screenSize)
    .reduce((acc, label) => {
        acc[label] = (...args) => css `
            @media (max-width: ${screenSize[label] / 16}rem ) { // aqui eh configurado a propiedade @media e o valor vai ser atribuido qunado estilizarmos no styled...
                ${css(...args)}
            }
        `
        return acc;

    }, {});