import defaultPicture from '../../assets/test.png'
import styled from "styled-components";
import colors from "../../utils/style/colors.tsx";
// import colors from '../../utils/style/colors'

// -----------------PROPS-----------------//
interface CardProps {
    label: string
    title: string
    picture?: string // Optional
}
// -----------------STYLES-----------------//
const CardLabel = styled.span`
    color: #5843e4;
    font-size: 22px;
    font-weight: bold;
`;

const CardImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
`;

const CardWrapper = styled.div`
    color:black;
  display: flex;
  flex-direction: column;
  padding: 15px;
  // background-color: ;
  border-radius: 30px;
  width: 350px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`

const ContainerStyle = styled.div`
    border-radius: 30px;
    padding: 20px;
    box-shadow: 2px 2px 10px #e2e3e9;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`

// -----------------COMPONENT-----------------//
function Card({ label = " ", title = " ", picture = defaultPicture }: CardProps) {
    return (
        <div className="container">
            <ContainerStyle className="container h-100 d-flex flex-column justify-content-around align-items-center">
                <CardWrapper>
                    <CardLabel>{label}</CardLabel>
                    <CardImage src={picture} alt="freelance"/>
                    <span>{title}</span>
                </CardWrapper>

            </ContainerStyle>

        </div>

    );
}

export default Card