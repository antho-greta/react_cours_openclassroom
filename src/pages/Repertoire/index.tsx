import Card from "../../components/Card";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import colors from "../../utils/style/colors.tsx";

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
`;

const StyledButton = styled.button`
    background-color: #2b47d3;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    margin: 0 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #1a2d8a;
    }
`;

function repertoire() {
    const [freelancersList, setFreelancesList] = useState([]);
    const [filter, setFilter] = useState('all');
    const filteredFreelancers = freelancersList.filter(shouldDisplay);

    useEffect(() => {
        fetch(`http://localhost:8000/freelances`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(({freelancersList}) => {
                if (Array.isArray(freelancersList) && freelancersList.length > 0) {
                    setFreelancesList(freelancersList);
                } else {
                    console.error('Data is not an array or is empty');
                }
            }).catch((error) => {
            console.error('Error fetching data', error);
        });
    }, []);


    function shouldDisplay(freelance){
        const firstLetter = freelance.name[0].toLowerCase();
        if(filter === 'all'){
            return true;
        }else if (filter === 'af' && firstLetter >= 'a' && firstLetter <= 'f'){
            return true;
        } else if (filter === 'gm' && firstLetter >= 'g' && firstLetter <= 'm') {
            return true;

        } else if (filter === 'ns' && firstLetter >= 'n' && firstLetter <= 's') {
            return true;
        }else if (filter === 'tz' && firstLetter >= 't' && firstLetter <= 'z') {
            return true;
        }
        return false;
    }


    return (
        <div className="container text-black text-center">
            <h1>Répertoire 📚 </h1>
            <div className="mb-3">
                <StyledButton onClick={() => setFilter('all')}>Tous</StyledButton>
                <StyledButton onClick={() => setFilter('af')}>A-F</StyledButton>
                <StyledButton onClick={() => setFilter('gm')}>G-M</StyledButton>
                <StyledButton onClick={() => setFilter('ns')}>N-S</StyledButton>
                <StyledButton onClick={() => setFilter('tz')}>T-Z</StyledButton>
            </div>
            <CardsContainer>
                {filteredFreelancers.length > 0 ? (
                filteredFreelancers.filter(shouldDisplay).map((profile, index) => (
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.job}
                        picture={profile.picture}
                        title={profile.name}
                    />
                ))
                ) : (
                    <h2>Aucun freelance trouvé !</h2>
                )}
            </CardsContainer>
        </div>
    );
}

export default repertoire;