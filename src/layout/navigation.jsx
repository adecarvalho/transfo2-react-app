import { Link } from "react-router-dom"

export const Navigation = () => {
    return (
        <nav className="w3-bar w3-teal w3-xlarge w3-card-2">
            <Link to="/" className="w3-bar-item w3-button w3-hover-pale-green"><i class="fa fa-home"></i></Link>
            <Link to="/saisie" className="w3-bar-item w3-button w3-hover-pale-green"><i class="fa fa-list"></i></Link>
            {/* <Link to="/mesure" className="w3-bar-item w3-button"><i class="fa fa-tachometer"></i></Link> */}
        </nav>)

}