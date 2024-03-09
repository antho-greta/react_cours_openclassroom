import { Link } from 'react-router-dom';
import styled from "styled-components";
import colors from "../../utils/style/colors.tsx";
import logo from "../../assets/dark-logo.png";

const StyledLink = styled(Link)`
    padding: 15px;
    color: #2b47d3;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
            props.$isFullLink &&
            `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`;

const StyledLogo = styled.img`
    width: 200px;
    height: auto;
`;

function Header() {
    return(
        <nav className="nav navbar ps-5 pe-5 mb-3">
            <StyledLink to="/"><StyledLogo src={logo} alt="logo"></StyledLogo></StyledLink>
            <div>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/Freelance">Profil</StyledLink>
                <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>

                <StyledLink to="/Jeux/">Jeux</StyledLink>
                <StyledLink to="/repertoire">Repertoire</StyledLink>
            </div>
        </nav>
    )
}

export default Header;