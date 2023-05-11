
import { Title, MainProjects, ProjectsContent, ContentCards } from './styles';
import imageSite from '../../assets/images/site-institucuional.gif';
import imageMeioAmbiente from '../../assets/images/landing-page-meio-ambiente.png'
import imageChamados from '../../assets/images/controle-chamados.gif';

export default function Projects() {

    return (

        <>
            <Title id="projects" > Meus Projetos </Title>
            <MainProjects >
                <ProjectsContent>
                    <ContentCards>
                        <div>
                            Site Institucional
                        </div>
                        <img src={imageSite} /> 
                        <p> Site institucional feito com as tecnologias HTML, CSS e Javascript </p>

                    </ContentCards>              
                </ProjectsContent>

                <ProjectsContent>
                    <ContentCards>
                        <div>
                            Landing Page
                        </div>
                        <img src={imageMeioAmbiente} /> 
                        <p> Landing page criado com as tecnologias HTML, CSS e Javascript </p>

                    </ContentCards>              
                </ProjectsContent>

                <ProjectsContent>
                    <ContentCards>
                        <div>
                            Controle de Chamados
                        </div>
                        <img src={imageChamados} /> 
                        <p> Gestão e controle de chamados feito em ReactJS. Tecnologias: Router dom, firebase... </p>

                    </ContentCards>              
                </ProjectsContent>

                <ProjectsContent>
                    <ContentCards>
                        <div>
                            Site Institucional
                        </div>
                        <img src={imageSite} /> 
                        <p> Site institucional feito com as tecnologias HTML, CSS e Javascript </p>

                    </ContentCards>              
                </ProjectsContent>

            </MainProjects>
        </>
    );
}