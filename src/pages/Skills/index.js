
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

// Foi inserido aqui o componente About
import About from '../About';
import { MySkills, MySkillsContent, Title, MySkillsCards } from './styles';

import imageJava from '../../assets/images/java-original.png'; 
import Javascript from '../../assets/images/javascript-original.png'; 
import imageHtml from '../../assets/images/html5-original.png'; 
import imageCSS from '../../assets/images/css3-original.png'; 
import NodeJS from '../../assets/images/nodejs-original.png'; 
import imgTypescript from '../../assets/images/typescript-original.png'; 

export default function Skills() {
  
    useEffect(() => {
        Aos.init({ duration: 1000 });

    }, [])

    return (
        <>  
            <Title> 
                <h2 id="skills"> Minhas Especialidades </h2>
                <MySkills >
                    
                    <MySkillsContent >
                        <MySkillsCards>
                        
                        <div  >
                            <img data-aos="fade-up" src={imageJava} alt='Java' />
                            
                        </div>
                        <span> Java </span>
                        </MySkillsCards>
                    
                    </MySkillsContent>  

                    <MySkillsContent >
                        <MySkillsCards>
                        
                        <div  >
                            <img data-aos="fade-down" src={Javascript} alt='Javascript' />      
                        </div>
                        <span> Javascript </span>
                        </MySkillsCards>
                    
                    </MySkillsContent>  

                    <MySkillsContent >
                        <MySkillsCards>
                        
                        <div  >
                            <img data-aos="zoom-in" src={imageHtml} alt='HTML5' />
                        </div>
                        <span> HTML5 </span>
                        </MySkillsCards>
                    
                    </MySkillsContent>  

                    <MySkillsContent >
                        <MySkillsCards>
                        
                        <div  >
                            <img data-aos="fade-up" src={imageCSS} alt='CSS3' />
                        </div>
                        <span> CSS3 </span>
                        </MySkillsCards>
                    
                    </MySkillsContent>  

                    <MySkillsContent >
                        <MySkillsCards>
                        
                        <div  >
                            <img data-aos="fade-down" src={imgTypescript} alt='Typescript' />
                        </div>
                        <span> Typescript </span>
                        </MySkillsCards>
                    
                    </MySkillsContent>

                    <MySkillsContent >
                        <MySkillsCards>
                        
                        <div  >
                            <img data-aos="fade-left" src={NodeJS} alt='NodeJS' />
                        </div>
                        <span> NodeJS </span>
                        </MySkillsCards>
                    
                    </MySkillsContent>    
                    
                </MySkills>
            </Title>
            
            <About /> 

        </>
    );
}