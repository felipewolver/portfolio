// a prop theme do component ThemeProvider foi inserirdo para chamar a variável media de global.js
///import { ThemeProvider } from 'styled-components';
//import { media } from './global'

import Header from './components/Header';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import './index.css';


/* Não estah chamando <ThemeProvider theme={{...media}} /> */

function App() {
    return (
        <div>
            
            <Header />
            <Home />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
} 

export default App;
