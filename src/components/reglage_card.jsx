
export function ReglageCard({ title, icon, value, unit, min, max, step, onValueChange }) {


    const style = {
        width: "90%",
        accentColor: "rgb(65,146,136)"
    }
    //

    function createFooter() {
        //
        switch (icon) {
            case "volt":
                return (<i className="fa fa-tachometer w3-margin"></i>);
            //
            case "ohm":
                return (<i className="fa fa-sliders w3-margin"></i>);
            //
            case "phase":
                return (<i className="fa fa-adjust w3-margin"></i>);

            default:
                break;
        }
    }

    //
    return (
        <div className="w3-card-4">

            <header className="w3-container w3-center">
                <h3>{title}</h3>
            </header>

            <div className="w3-container">
                <input type="range" style={style}
                    onChange={(e) => {
                        onValueChange(e.target.value);
                    }}
                    min={min} max={max} step={step} value={value}></input>
            </div>

            <footer className="w3-container">
                <h4> {createFooter()}<span>{value}</span> <span>{unit}</span></h4>
            </footer>

        </div>
    );
}