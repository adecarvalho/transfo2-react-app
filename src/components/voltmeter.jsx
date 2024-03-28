
import GaugeComponent from 'react-gauge-component'
//
export function Voltmeter({ title, mesure }) {
    //

    const textWithUnit = (value) => {

        if (Number.isInteger(value)) {
            return value.toFixed(0) + 'V';
        }
        else {
            return value.toFixed(1) + 'V';
        }

    }
    //
    return (
        <div className="w3-card-2 w3-blue-gray">

            <header className="w3-container w3-center">
                <h3>{title}</h3>
            </header>

            <div className="w3-container">
                <GaugeComponent
                    type="radial"
                    labels={{
                        valueLabel: {
                            formatTextValue: textWithUnit
                        },
                    }}

                    arc={{
                        nbSubArcs: 20,
                        width: 0.2,
                        padding: 0.005,
                        colorArray: ['rgb(255,254,209)'],
                        subArcs: [{}]
                    }}

                    pointer={{
                        color: 'rgb(241,241,241)',
                        length: 0.80,
                        width: 15,
                        elastic: false,
                        animationDelay: 0
                    }}

                    value={mesure}
                    minValue={0}
                    maxValue={230} />
            </div>

        </div>
    );
}