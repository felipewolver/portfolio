
import styled from 'styled-components';
import { media } from '../../global';

export const Title = styled.h2 `
    
    background-color: #CEDFF3; 
    text-align: center;
    padding: 50px 0;
`

export const MainProjects = styled.div `
    
    font-family: 'Roboto', sans-serif;
    padding: 0 5% 8%;
    margin: 0 auto;
    background-color: #CEDFF3; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    
`

export const ProjectsContent = styled.div `
    width: 40%;
    background-color: #146C94;
    color: #fff; 
    text-align: center;
    border-radius: 6px;
    padding: 20px 25px;
    margin: 0 0 50px 0px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: #19A7CE; 
        color: #D4FAFC;
    }

    ${media.tablet `
        width: 45%;
      
    `}
    
    ${media.mobile `
        width: 47%;
      
    `}

    ${media.extraMobile `
        height: 350px;
      
    `}
    

`
export const ContentCards = styled.div `
    
    text-align: center;

    div {
        font-size: 25px;
        color: #fff; // #023047;
        margin-bottom: 20px;
    }

    img {
        width: 350px;
        height: 350px;
        border-radius: 6px;
        
    }

    p {
        padding: 15px 0;
    }

    ${media.desktop `
        
        img {
            width: 200px;
            height: 200px;
        }
    `}

    ${media.mobile `
         
        div {
            font-size: 15px;
        }

        img {
            width: 150px;
            height: 150px;
        }

        p {
            font-size: 14px;
        }
    `}

    ${media.extraMobile `
         
         div {
             font-size: 15px;
         }
 
         img {
             width: 130px;
             height: 150px;
         }
 
         p {
             font-size: 14px;
         }

     `}

`
