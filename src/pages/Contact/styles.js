
import styled from "styled-components";
import { media } from "../../global";

export const Title = styled.h2 `
    padding: 50px 100px;
`

export const MainContact = styled.div `
   
`

export const ContactContent = styled.div `
    
    max-width: 1300px; 
    padding: 0 80px;
    margin: auto;
    font-family: 'Roboto', sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${media.mobile `
        display: flex;
        flex-direction: column;
        
    `}

    ${media.extraMobile `
        margin-left: 30px;
        padding: 0;

    `}
   
`

export const ContactColumnLeft = styled.div `
    width: 48%;

    ${media.mobile `
        width: 100%;
        margin-bottom: 50px;
    `}

    ${media.extraMobile `
        width: 100%;
      
    `}
    

`

export const ContactIcon = styled.div `
   
`

export const ContactRow = styled.div `
    
    display: flex;
    align-items: center;
    height: 65px;

`

export const ContactInfo = styled.div `
    
    margin-left: 30px;

    div:first-child {
        font-weight: 500;
    }

`

// Parte Column Right da seção Contato
export const ContactColumnRight = styled.div `
     
    margin-top: -35px;
    margin-bottom: 50px;

    .text {
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 15px;
    }

    ${media.tablet `
        margin-left: 50px;
      
    `}

    ${media.mobile `
        margin: 0 0 100px 0;
    `}

    ${media.extraMobile `
       margin-right: 30px;
    
       width: 390px;

       .text {
            margin-left: 12px;
       }
    `}

`
export const ContactFields = styled.div `
     
    display: flex;

    div:first-child {
        margin-right: 10px;
    }

    div + div {
        margin-left: 10px;
    }

    ${media.extraMobile `
        
        display: flex;
        flex-direction: column;    
        width: 97%;

        div:first-child {
            margin-left: 10px;
        }
    `}
`

export const ContactFieldName = styled.div `
    
    width: 100%;
    height: 45px;
    margin-bottom: 15px;

    input {
        width: 100%;
        height: 100%;
        border: 1px solid #ccc;
        border-radius: 6px;
        outline: none;
        padding: 0 15px;
        font-size: 17px;
        
    }

    div:first-child {
       height: 100%;
       margin-bottom: 15px;
    }

    textarea {
        resize: none;
        width: 100%;
        
        border: 1px solid #ccc;
        border-radius: 6px;
        outline: none;
        padding: 0 15px;
        font-size: 17px;
        margin-bottom: 15px;
    }

    .button {
        width: 170px;
        height: 47px;
    }

    button {
        width: 100%;
        height: 100%;
        border: 2px solid #146C94;
        background-color: #146C94;
        color: #fff;
        font-size: 20px;
        font-weight: 500;
        border-radius: 6px;
        cursor: pointer;
      
        transition: all 0.3s ease;
    }

    button:hover {
        color: #146C94;
        background: none;
    }

    ${media.extraMobile `
           
        width: 80%;

        div:first-child {
            margin-left: 10px;
        }

        div + div {
            margin-left: 10px;
        }
    `}

`

// Rodape da página 
export const Footer = styled.div `
    
    background-color: #CEDFF3;
    padding: 20px 23px;
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    margin-top: 100px;
  
`


