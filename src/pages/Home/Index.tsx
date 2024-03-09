import styled from "styled-components";
import image from '../../assets/home-illustration.svg'
import {Link} from "react-router-dom";
import colors from "../../utils/style/colors.tsx";


const ContainerStyle = styled.div`
    background-color: ${colors.backgroundLight};
`;

const StyledText = styled.p`
    color: #16113b;
    font-size: 30px;
    font-weight: bold;
`;

const StyledLink = styled(Link)`
    margin-top: 20px;
    padding: 15px;
    color: #2b47d3;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
            props.$isFullLink &&
            `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`;

const CardImage = styled.img`
`;

function Index() {
    return (
        <div className="container">
            <ContainerStyle className="row justify-content-center align-items-center d-flex p-5">
                <div className="col-6 justify-content-center p-4">
                    <StyledText>
                        Repérez vos besoins, <br/>
                        on s'occupe du reste, <br/>
                        avec les meilleurs <br/>
                        talents
                    </StyledText>
                    <StyledLink to="/survey/1" $isFullLink>
                       Faire le test
                    </StyledLink>
                </div>
                <CardImage className="col-6" src={image}></CardImage>
            </ContainerStyle>
        </div>
    );
}

export default Index
