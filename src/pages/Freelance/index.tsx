import Card from "../../components/Card";
// import freelanceProfiles from "../../data/data.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
`;

function Freelances() {

    const [freelancersList, setFreelancesList] = useState([]);
    const [error, setError] = useState(false)

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

        return (
            <div className="container h-100 d-flex flex-column justify-content-around align-items-center text-black">
                <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
                <CardsContainer>
                    {freelancersList.map((profile, index) => (
                        <Card
                            key={`${profile.name}-${index}`}
                            label={profile.job}
                            picture={profile.picture}
                            title={profile.name}
                        />
                    ))}
                </CardsContainer>
            </div>
        )
    }

    export default Freelances
