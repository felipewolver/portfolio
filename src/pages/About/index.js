
import { MainAbout, Title, AboutContent, AboutContentText, AboutContentImage } from './styles';
import imageAbout from '../../assets/images/Perfil2-Editado.png';

export default function About() {
     
    return (
        <>  
            <Title id="about"> Sobre min </Title>
            <MainAbout>
                <AboutContent>
                  
                    <AboutContentImage src={imageAbout} />    
                </AboutContent>
                 
                <AboutContentText>
                    <h3> Sou Felipe e sou <span className='typing-2'>  </span> </h3>
                    <p> Formado em Análise e desenvolvimentos de sistemas pela Universidade Unigranrio - RJ. Apaixonado por tecnologias. Adoro programar e desenvolver novas aplicações.  </p> 
                    <a href="#contact"> Contratar agora mesmo </a>

                </AboutContentText>
            </MainAbout>
        </>
    );
}