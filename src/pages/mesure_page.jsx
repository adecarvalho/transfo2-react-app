import { Mesures } from "../components/mesures"
import { Navigation } from "../layout/navigation"
import { Reglages } from "../components/reglages"
import { Footer } from "../layout/footer"

export const MesurePage = () => {
    const style = {
        fontSize: '35px',
        color: 'gray',
        fontFamily: "Lobster"
    }
    //
    return (
        <>
            <Navigation></Navigation>
            {/*  */}
            <div className="w3-container w3-center w3-margin">
                <h1 style={style}>Mesures en Charge</h1>
            </div>
            <Reglages></Reglages>
            {/*  */}
            <Mesures></Mesures>
            {/*  */}
            <Footer></Footer>
        </>

    )
}