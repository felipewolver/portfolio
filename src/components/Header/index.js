
import { useState } from 'react'; 

import { Menu, MenuButton } from './style';
import './header.css';


export default function Header() {

    const [show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow(!show);
    }
    
    // tag vazia <></> eh soh um fragmento de estilização par nao afetar o layout pois eh obrigatorio no react criar uma div container no return
    return (
        <>
            <nav className="navbar">
                <div className="max-width">
                    <div className="logo">
                        <a href='#home'> Felipe Ferreira </a>
                    </div>

                    <Menu className="menu" show={show} onClick={toggleMenu} >
                        <li><a href="#home">Home</a> </li>
                        <li><a href="#skills">Especialidades</a> </li>
                        <li><a href="#about">Sobre</a> </li>
                        <li><a href="#projects">Projetos</a> </li>
                        <li><a href="#contact">Contato</a> </li>
                    </Menu>
                    
                    <MenuButton className='menu-btn' show={show} onClick={toggleMenu} >
                        <div  />
                        <div  />
                        <div  />
                    </MenuButton>
                  
                </div>
            
            </nav>
        </>
    );

}