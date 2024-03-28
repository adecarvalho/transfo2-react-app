import { useContext, useState } from "react";
import { Footer } from "../layout/footer";
import { Navigation } from "../layout/navigation";
import { StoreContext } from "../store/store_context";
import { useNavigate } from "react-router-dom";

//
export const FormPage = () => {

    const navigate = useNavigate();

    const [theError, setTheError] = useState('');

    const { theModeleKapp, setKappModele } = useContext(StoreContext);
    //
    const kapp = {
        rapport_m: 0,
        resistance_rp: 0,
        inductance_lp: 0,
        resistance_rs: 0,
        reactance_xs: 0
    }
    //
    const styleTitle = {
        fontSize: '35px',
        color: 'white',
        fontFamily: ["Lobster", "sans-serif"]
    }
    //
    const styleTextField = {
        width: "75%",
        fontSize: "1.2rem",
        fontFamily: ["Lobster", "sans-serif", "arial"],
        background: "rgb(227,253,224)",
    }
    //
    function isValidate(datas) {
        //resistance_rp
        const rp = datas.get('resistance_rp').trim();
        if (isNaN(rp) || Number(rp) == 0) {
            setTheError("Résistance Rp non valide !");
            return false;
        }
        //inductance_lp
        const lp = datas.get('inductance_lp').trim();
        if (isNaN(lp) || Number(lp) == 0) {
            setTheError("Inductance Lp non valide !");
            return false;
        }
        //
        //resistance_rs
        const rs = datas.get('resistance_rs').trim();
        if (isNaN(rs) || Number(rs) == 0) {
            setTheError("Résistance Rs non valide !");
            return false;
        }
        //
        const xs = datas.get('reactance_xs').trim();
        if (isNaN(xs) || Number(xs) == 0) {
            setTheError("Réactance Xs non valide !");
            return false;
        }
        //
        const m = datas.get('rapport_m').trim();
        if (isNaN(m) || Number(m) == 0) {
            setTheError("Rapport m non valide !");
            return false;
        }
        kapp.rapport_m = Number(m);
        kapp.resistance_rp = Number(rp);
        kapp.inductance_lp = Number(lp);
        kapp.resistance_rs = Number(rs);
        kapp.reactance_xs = Number(xs);
        //
        return true;
    }
    //
    function handleSubmit(e) {
        e.preventDefault();

        const datas = new FormData(e.target);

        const res = isValidate(datas);
        if (res) {
            setKappModele(kapp);
            setTheError('');
            navigate("/mesure");
        }
    }
    //
    return (
        <>
            <Navigation></Navigation>
            {/*  */}
            <div>
                <div className="w3-row-padding">
                    <div class="w3-container w3-margin w3-twothird">
                        <div className="w3-card">
                            <header className="w3-container w3-teal w3-center">
                                <h1 style={styleTitle}>Saisie du Modèle de Kapp</h1>
                            </header>
                            {/*  form */}
                            <form onSubmit={handleSubmit} className="w3-container w3-margin">
                                {/*  Elements Rp et Lp */}
                                <div class="w3-row-padding">
                                    <div className="w3-half">
                                        <label htmlFor="resistance_rp">Résistance Rp</label>
                                        <input defaultValue={theModeleKapp.resistance_rp} name="resistance_rp"
                                            id="resistance_rp" required autoComplete="off" className="w3-input 
                                         w3-animate-input" type="text" style={styleTextField}></input>
                                    </div>
                                    <div className="w3-half">
                                        <label htmlFor="inductance_lp">Inductance Lp</label>
                                        <input defaultValue={theModeleKapp.inductance_lp} name="inductance_lp"
                                            id="inductance_lp" required autoComplete="off" className="w3-input 
                                        w3-animate-input" type="text" style={styleTextField}></input>
                                    </div>
                                </div>
                                {/* Elements Rs et Xs*/}
                                <div className="w3-row-padding">
                                    <div class="w3-half">
                                        <label htmlFor="resistance_rs">Résistance Rs</label>
                                        <input defaultValue={theModeleKapp.resistance_rs} name="resistance_rs"
                                            id="resistance_rs" required autoComplete="off" className="w3-input 
                                        w3-animate-input" type="text" style={styleTextField}></input>
                                    </div>
                                    <div className="w3-half">
                                        <label htmlFor="reactance_xs">Réactance Xs</label>
                                        <input defaultValue={theModeleKapp.reactance_xs} name="reactance_xs"
                                            id="reactance_xs" required autoComplete="off" className="w3-input 
                                        w3-animate-input" type="text" style={styleTextField}></input>
                                    </div>
                                </div>
                                {/* Elements m et Erreurs*/}
                                <div className="w3-row-padding">
                                    <div class="w3-half">
                                        <label htmlFor="rapport_m">Rapport m:</label>
                                        <input defaultValue={theModeleKapp.rapport_m} name="rapport_m"
                                            id="rapport_m" required autoComplete="off" className="w3-input 
                                        w3-animate-input" type="text" style={styleTextField}></input>
                                    </div>
                                    <div className="w3-half">

                                        {theError ? <div className="w3-panel w3-pale-red w3-round-xlarge">
                                            <p>{theError}</p>
                                        </div> : <div></div>}
                                    </div>

                                </div>
                                <button className="w3-button w3-border w3-border-teal 
                                w3-round-xlarge w3-margin w3-hover-pale-green">Valider</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            {/*  */}
            <Footer></Footer>
        </>
    );

}