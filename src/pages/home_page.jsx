import { Navigation } from "../layout/navigation";
import kapp from "../assets/kapp.svg";
import { Link } from "react-router-dom";
import { Footer } from "../layout/footer";


export const HomePage = () => {

    const style = {
        fontSize: '35px',
        color: 'gray',
        fontFamily: ["Lobster", "sans-serif"]
    }

    //
    return (
        <>
            <Navigation></Navigation>
            {/*  */}
            <div className="w3-container w3-margin">
                <div className="w3-row-padding">
                    <div className="w3-quarter w3-container">
                        <h3></h3>
                    </div>
                    {/*  */}
                    <div className="w3-half w3-container">
                        <h2 className="w3-center" style={style}>Simulation du Transformateur Monophasé</h2>
                        <div class="w3-card-4 w3-center">
                            <img className="w3-image" src={kapp} alt="Alps"></img>
                            <div className="w3-container w3-center">
                                <h3>Modèle de Kapp</h3>
                                <p className="w3-left-align">Application web pour la Simulation
                                    d'un transformateur monophasé, dans l'hypothèse de Kapp.
                                </p>
                                <Link to="/saisie" className="w3-button w3-border 
                                w3-border-teal w3-round-xlarge w3-margin w3-hover-pale-green">Simulation</Link>
                            </div>

                        </div>
                    </div>
                    <div className="w3-quarter w3-container">
                        <h3></h3>
                    </div>
                </div>

            </div>
            {/*  */}
            <Footer></Footer>


        </>
    );
}