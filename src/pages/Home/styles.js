
import styled from 'styled-components';
import { media } from '../../global';

export const HomeContent = styled.div `
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #023047;
    min-height: 700px;
    font-family: 'Roboto', sans-serif;
  
    .max-width {
        margin: auto 0 auto 20px;
    }

    ${media.desktop `
                
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        padding-bottom: 100px;

    `}

    ${media.tablet `
         
        
    `}

    ${media.mobile`
       width: 550px;
    `}

`

export const HomeContentText = styled.div `
    
    .text-1 {
        font-size: 27px;
        font-weight: 500;
    }

    .text-2 {
        font-size: 75px;
        font-weight: 500;
        margin-left: -3px;
    }

    .text-3 {
        font-size: 40px;
        color: #146C94;
        font-weight: 500;
    }

    a {
        display: inline-block;
        background-color: #146C94;
        color: #fff;
        font-size: 30px;
        padding: 12px 20px;
        margin-top: 20px;
        border-radius: 6px;
        border: 2px solid  #146C94;
        transition: all 0.3s ease;
    }

    a:hover {
        background: none;
        color: #146C94;

    }

    ${media.desktop `
       
        margin-right: 200px;
       
        .text-1 {
            font-size: 22px;
        }

        .text-2 {
            font-size: 40px;
        } 

        .text-3 {
            font-size: 25px;
        }

        a {
            font-size: 22px;
        }
    `} 

   
   
    ${media.tablet `
        
    
        .text-1 {
            font-size: 27px;
        }

        .text-2 {
            margin-top: 3px;
            font-size: 40px;
        }

        .text-3 {
            font-size: 25px;
        }
     
        a {
            font-size: 22px;
        }  
    `}

    ${media.mobile `
        
        margin-top: 10px;
       
        width: 350px;

        .text-1 {
            font-size: 25px;
            margin-left: -3px;
        }

        .text-2 {
            font-size: 50px;
        }

        .text-3 {
            font-size: 30px;
            margin-left: -3px;
        }

    `}
        
`;
export const ImageRight = styled.div `
    
    width: 600px;

    ${media.desktop `
        margin-top: 120px;
    `}

    ${media.mobile `
       

       img {
            width: 370px;
            height: 370px;
            margin-left: 20px;
           
       }
    `}
` 
