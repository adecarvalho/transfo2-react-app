import { useContext, useEffect, useState } from "react";
import { ReglageCard } from "./reglage_card";
import { StoreContext } from "../store/store_context";

export function Reglages() {

    const [tension, setTension] = useState(0);
    const [module, setModule] = useState(20);
    const [phase, setPhase] = useState(0);

    const { setNewReglage } = useContext(StoreContext);

    useEffect(() => {
        update();
    }, []);

    //
    function update() {
        const reglages = {
            u1eff: tension,
            module: module,
            phase: phase
        };
        setNewReglage(reglages);
    }
    //
    function onTensionValueChange(val) {
        setTension(val);
        update();
    }
    //
    function onModuleValueChange(val) {
        setModule(val);
        update();
    }
    //
    function onPhaseValueChange(val) {
        setPhase(val);
        update();
    }

    //
    return (
        <div className="w3-container w3-margin-top">
            <div className="w3-row">
                <div className="w3-third w3-container">
                    {/* reglage tension U1 eff */}
                    <ReglageCard icon="volt" title='U1eff' unit='V' value={tension} min='0' max='230' step='5'
                        onValueChange={onTensionValueChange}
                    ></ReglageCard>
                </div>
                <div className="w3-third w3-container">
                    {/* reglage module charge */}
                    <ReglageCard icon="ohm" title='Charge' unit='&Omega;' value={module} min='20' max='500' step='2'
                        onValueChange={onModuleValueChange}
                    ></ReglageCard>
                </div>
                <div className="w3-third w3-container">
                    {/* reglage phase charge */}
                    <ReglageCard icon="phase" title='Phase' unit='&deg;' value={phase} min='-90' max='90' step='5'
                        onValueChange={onPhaseValueChange}
                    ></ReglageCard>
                </div>
            </div>

        </div>

    );
}