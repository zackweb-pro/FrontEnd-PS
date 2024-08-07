import { RiMoneyDollarCircleLine } from "react-icons/ri";

export default function TotaleDepense(props){
    const monthNamesFr = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

    return(
        <div className="totale-depense">
            <div className="totale-depense-title">
                <RiMoneyDollarCircleLine className="totale-depense-icon" />
                <div className="totale-depense-periode-container">
                    <h1 className="totale-depense-mois">Totale des depenses</h1>
                    <p className="totale-depense-periode">01-{new Date().getDate()} {monthNamesFr[new Date().getMonth()]} • {new Date().getFullYear()}</p>
                </div>
            </div>
            <div className="chiffre-depense">{props.depense}dhs</div>
        </div>
    )
}