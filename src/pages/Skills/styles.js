
import styled from "styled-components";
import { media } from "../../global";

export const MySkills = styled.div `
   
   background-color: #CEDFF3; 
   width: 1000px;
   height: 400px;
   font-family: "Roboto", sans-serif;
   font-weight: 500;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
   padding-left: 350px;
   padding-bottom: 150px;

   ${media.desktop `
      margin-left: 170px;
      padding-left: 0;
      width: 60%;
   `}

   ${media.tablet `
      margin-left: 130px;
   `}

   ${media.mobile `
      margin-left: 60px;
      
   `}

   ${media.extraMobile `
     
      height: 500px;
      
   `}

`

export const Title = styled.div `
   
   background-color: #CEDFF3; 
   text-align: center;
   padding-top: 50px;

   ${media.extraMobile `
      
      h2 {
         font-size: 33px;
      }
   `}

`

export const MySkillsContent = styled.div `
   
   width: 30%;
   text-align: center;

   img {
      width: 75px;
      height: 75px;
      margin: 40px 0 20px 0;
   }

   ${media.mobile `
      
      width: 40%;

      img {
         width: 10vw;
         height: 10vh;
      }
   `}

   ${media.extraMobile `
      
      width: 40%;

      img {
         width: 10vw;
         height: 10vh;
      }
   `}



`

export const MySkillsCards = styled.div `
   width: 150px;
   
   span {
      font-size: 20px;
   }
   
`

