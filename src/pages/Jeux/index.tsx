import {Link, Outlet} from "react-router-dom";

function Index() {

    return(
        <div className="container h-100 d-flex flex-column justify-content-around align-items-center">

            <h1>Jeux</h1>
            <div className="row justify-content-center align-items-center w-50">
                <nav className="nav navbar">
                    <Link to={`/jeux/pendu`}>Pendu</Link>
                    <Link to={`/jeux/morpion`}>Morpion</Link>
                </nav>
            </div>

            <Outlet/> {/* Outlet permet d'afficher les composants enfants de Jeux */}
        </div>

    )
}

export default Index