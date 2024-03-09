import { useState } from 'react';

function Pendu() {

    const [mot, setMot] = useState("run"); // Mot à deviner
    const [nombreDeLettres, setNombreDeLettres] = useState(mot.length); // Nombre de lettres dans le mot
    const [lettresDevinees, setLettresDevinees] = useState(new Set<string >()); // Lettres devinées
    const [essais, setEssais] = useState(nombreDeLettres + 2); // Nombre d'essais
    const [gagne, setGagne] = useState(false);
    // Fonction qui gère le click sur une lettre
    const handleClick = (lettre: string) => {
        setLettresDevinees((lettresDevineesPrev)=> {
            const newLettresDevinees = new Set(lettresDevineesPrev);
            newLettresDevinees.add(lettre);
            if (!mot.includes(lettre)){
                setEssais(essais -1); // Retire un essai
            }
            if(mot.split("").every((lettre) => newLettresDevinees.has(lettre))) {
                setGagne(true);
                alert("Gagné !");
            }
            return newLettresDevinees;
        })

    };

    // Fonction qui affiche le mot avec les lettres devinées
    const afficherMot = () => {
        return mot.split("").map(lettre => lettresDevinees.has(lettre) ? lettre : "_").join(" "); // Si la lettre est dans le set, on l'affiche, sinon on affiche un '_'
    };

    // Fonction qui vérifie si la partie est terminée
    const estTermine = () => {
        return afficherMot() === mot || essais === 0 ; // Si le mot est deviné ou si le nombre d'essais est à 0, la partie est terminée
    }

    return (
        <div>
            <h2 className="text-center">Pendu</h2>

            <div className="card d-flex flex-column p-2 justify-content-center align-items-center">

                <p className="text-center text-capitalize">{afficherMot()}</p>

                <div>
                    {`abcdefghijklmnopqrstuvwxyz`.split("").map(lettre =>
                        <button type="button" className="btn btn-info m-1 " key={lettre}
                                onClick={() => handleClick(lettre)}
                                disabled={lettresDevinees.has(lettre) || estTermine()}> {/* Si la lettre est déjà devinée ou si la partie est terminée, on désactive le bouton */}
                            {lettre}
                        </button>
                    )}
                </div>

                <p className="mb-2 mt-2 text-center">Essais restants : {essais}</p>
                {
                    <p className="text-center">{gagne ? 'Gagné' : essais === 0 ? 'Perdu' : ''}</p>
                }
            </div>
        </div>
    );
}

export default Pendu;