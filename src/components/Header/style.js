
import { media } from '../../global';
import styled from 'styled-components';


export const Menu = styled.ul `
    
    li {
        list-style: none;
        display: inline-block;
    }

    a {
        color: #fff;
        font-size: 18px;
        font-weight: 500;
        margin-left: 25px;
        transition: all 0.3s ease;
    }

    li:first-child a{ /* soh vai sofrer estilo o primeiro li a o resto se mantem na outra cor */
        color: #F6BA6F;
    }

    a:hover {
        color: #19A7CE;
    }



    ${media.desktop `
        display: ${({show}) => show ? 'block' : 'none'};
        position: fixed;
        width: 100%;
        height: 100%;
        top: -100%; // Vai esconder o menu quando display for none
        left: 0;
        background-color: #111;
        padding-top: 80px;
        text-align: center;
        
        transition: all 0.3s ease;

        top: 0; // vai exibir o menu 

        li {
            width: 100%;
            height: 10vh;
           
        }

        a {
            font-size: 25px;
            margin-right: 50px;
        }
    `}

    ${media.mobile `
        
        width: 100%;

        li {  
           
            height: 12vh;
        }

        a {
            font-size: 30px;
        }
    `}

    ${media.extraMobile `
        width: 75%;

    `}

`;

export const MenuButton = styled.div `
    
    cursor: pointer;
    display: none;


    div {
        
        width: 45px;
        height: 5px;
        background-color: ${({ show }) => show ? '#D4FAFC;' : '#fff'}; // ? aberto recebe a cor #D4FAFC : fechado recebe a cor branca
        border-radius: 6px;
        margin-bottom: 4px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform:  ${({ show }) => show ? 'rotate(45deg) translate(0px, -5px)' : 'rotate(0)'};
        }

        &:nth-child(2) {
           
            opacity:  ${({ show }) => show ? 0 : 1};
        }

        &:nth-child(3) {
            transform:  ${({ show }) => show ? 'rotate(-45deg) translate(-5px, 8px)' : 'rotate(0)'};
        }
    }    

    ${media.desktop `
        display: block;
        z-index: 999;
        margin-right: -200px;

    `}

    ${media.tablet `
        margin: 0;
    `}

    ${media.extraMobile `
        margin: 0;
        width: 45%;
    `}

   
`