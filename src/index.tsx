import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route}  from "react-router-dom";
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Index.tsx';
import Survey from './pages/survey/Index.tsx';
import Header from './components/Header/';
import ClientForm from "./components/ClientForm";
import FreelanceForm from "./components/FreelanceForm";
import Error from "./components/Error/";
import Result from "./components/Result";
import Freelance from "./pages/Freelance";
import Jeux from "./pages/Jeux";
import Pendu from "./components/Games/Pendu.tsx";
import Morpion from "./components/Games/Morpion.tsx";
import {ThemeProvider} from "styled-components";
import Repertoire from "./pages/Repertoire";
import Footer from "./components/Footer";
import GlobalStyle from "./utils/style/GlobalStyle.tsx";

// const GlobalStyle = createGlobalStyle`
//     * {
//         font-family: 'Trebuchet MS', Helvetica, sans-serif;
//     }
//
//     body {
//         background-color: ${({ theme }) => theme.colors.secondary};
//         margin: 0;
//     }
// `;

const theme = {
    colors: {
        primary: '#0070f3',
        secondary: '#1a2d8a',
    },
    fonts: {
        main: 'Helvetica, sans-serif',
        code: 'Courier, monospace',
    },
    spacing: {
        small: '8px',
        medium: '16px',
        large: '32px',
    },
};

/**
 * Router de l'application
 */
ReactDOM.render(
    <React.StrictMode>
        <Router>

            <ThemeProvider theme={ theme}>
                <GlobalStyle/>
                <Header/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>

                        <Route path="/survey/:questionNumber" element={<Survey/>}>
                            {/* On imbrique les composants dans survey */}
                            <Route path="client" element={<ClientForm/>}/>
                            <Route path="freelance" element={<FreelanceForm/>}/>
                        </Route>

                        <Route path="/survey/resultats" element={<Result/>}/>

                        <Route path="/Freelance" element={<Freelance/>}/>

                        <Route path="/Jeux" element={<Jeux/>}>
                            <Route path="pendu" element={<Pendu/>}/>
                            <Route path="morpion" element={<Morpion/>}/>
                        </Route>

                        <Route path="/repertoire" element={<Repertoire/>}/>

                        {/* Route d'erreur par defaut, à placer en dernière */}
                        <Route path="*" element={<Error/>}/>
                    </Routes>

                <Footer/>
            </ThemeProvider>
        </Router>

    </React.StrictMode>,
    document.getElementById('root')
);

