
import styled from "styled-components";
import { media } from '../../global';

export const Title = styled.h2 `
    padding: 50px 100px;

    ${media.extraMobile `
        
        margin-left: 20px;
      
    `}
    
`
export const MainAbout = styled.div `
    
    max-width: 1300px;
    padding: 0 0 8% 5%;
    margin: 0 auto;
    display: flex;
    align-items: center;

    ${media.mobile `
        
       display: flex;
       flex-direction: column;
    `} 

    ${media.extraMobile `
        width: 500px; 
        display: flex;
        flex-direction: column;
        align-items: flex-start;
       
     `} 
`
export const AboutContent = styled.div `
    
    width: 70%;
`

export const AboutContentImage = styled.img `
    
    width: 50%;
    border-radius: 6px;
    margin-left: 50px;
`

export const AboutContentText = styled.div `
    
    width: 70%;
    padding: 0 40px;

    h3 {
        font-size: 25px;
    }

    span {
        color: #146C94;
    }

    p {
        margin: 5px 0 10px 0;
        text-align: justify;
        font-weight: 500;
    }

    a {
        display: inline-block;
        background-color: #146C94;
        color: #fff;
        font-size: 30px;
        padding: 8px 20px 10px 20px;
        margin-top: 20px;
        border-radius: 6px;
        border: 2px solid  #146C94;
        transition: all 0.3s ease;
    }

    a:hover {
        background: none;
        color: #146C94;

    }

    ${media.tablet `
        
        a {
            font-size: 22px;
        }
    `}

    ${media.mobile `

        p {
            margin-top: 20px;
            line-height: 25px;
        }
        
        a {
            font-size: 18px;
        }
    `}

    ${media.extraMobile `

        p {
            margin-top: 18px;
            line-height: 25px;
        }

        a {
            font-size: 14px;
        }
`}
    
`