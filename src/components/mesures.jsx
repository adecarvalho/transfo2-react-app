import { useContext } from "react";
import { Amperemeter } from "./amperemeter";
import { Rendemeter } from "./rendemeter";
import { Voltmeter } from "./voltmeter";
import { Wattmeter } from "./wattmeter";
import { StoreContext } from "../store/store_context";

export function Mesures() {

    const { theMesures } = useContext(StoreContext);

    //
    return (
        <>
            <div className="w3-container w3-margin-top">
                <div className="w3-row">
                    <div className="w3-third w3-container">
                        <Voltmeter title='U2eff' mesure={theMesures.u2eff}></Voltmeter>
                    </div>
                    <div className="w3-third w3-container">
                        <Amperemeter title='I1eff' mesure={theMesures.i1eff}></Amperemeter>
                    </div>
                    <div className="w3-third w3-container">
                        <Amperemeter title='I2eff' mesure={theMesures.i2eff}></Amperemeter>
                    </div>
                </div>
            </div >
            {/*  */}
            <div className="w3-container w3-margin-top">
                <div className="w3-row">
                    <div className="w3-third w3-container">
                        <Wattmeter title='P1' mesure={theMesures.p1}></Wattmeter>
                    </div>
                    <div className="w3-third w3-container">
                        <Wattmeter title='P2' mesure={theMesures.p2}></Wattmeter>
                    </div>
                    <div className="w3-third w3-container">
                        <Rendemeter title='Rendement' mesure={theMesures.rendement}></Rendemeter>
                    </div>
                </div>
            </div >

        </>

    );
}