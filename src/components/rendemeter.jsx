
import GaugeComponent from 'react-gauge-component'

export function Rendemeter({ title, mesure }) {
    const textWithUnit = (value) => {

        if (Number.isInteger(value)) {
            return value.toFixed(0) + '%';
        }
        else {
            return value.toFixed(1) + '%';
        }

    }
    //
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
                        nbSubArcs: 10,
                        width: 0.2,
                        padding: 0.005,
                        colorArray: ['rgb(228,254,255)'],
                        subArcs: [{}]
                    }}

                    pointer={{
                        color: 'rgb(241,241,241)',
                        length: 0.80,
                        width: 15,
                    }}

                    value={mesure}
                    minValue={0}
                    maxValue={100} />
            </div>

        </div>
    );
}