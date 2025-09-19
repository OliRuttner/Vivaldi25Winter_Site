import InfoBestCJ from "./InfoBestCJ";
import InfoBia from "./InfoBia";

const Footer = () => {
    return ( <div className="footer">
        <h2>Contact:</h2>
        <div className="organizers">
            <img className="bia-poza" src={require("./bia.jpg")} alt="Kiss Bianca" />
            <InfoBia />
            <InfoBestCJ />
        </div>
    </div> );
}
 
export default Footer;