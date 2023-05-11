
import { HomeContent, HomeContentText, ImageRight } from './styles';
import myPortfolio from '../../assets/images/Visionary-technology.gif'

export default function Home() {

    return (
        <>
            <HomeContent id="home">
                <div className="max-width">
                    <HomeContentText>
                        <div className="text-1">
                            Ola! Meu nome é 
                        </div>
                
                        <div className="text-2">
                            Felipe Ferreira
                        </div>
               
                        <div className="text-3">
                            Sou <span className='typing'>  </span>
                        </div>
                        <a href="#contact" > Contratar agora mesmo </a>

                     
                    </HomeContentText>
                
                </div>
                <ImageRight>
                            <img src={myPortfolio} alt='MyPortfolio' />
                </ImageRight>
    
            </HomeContent>
        </>
    );
}