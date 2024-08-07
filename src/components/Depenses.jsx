import Depense from "./Depense"
export default function Depenses(){
    return(
        <div className="depenses">
            <div className="depenseone">
                <h1 className="depense-title">Aujourd'hui</h1>
                <div className="lesdepenses">
                    <Depense category="Transport" name="Plein essence" price="2.650" time={new Date().toLocaleTimeString()} agent="Aymane"/>
                    <Depense category="Materiel" name="Brosse" price="20" time={new Date().toLocaleTimeString()} agent="Mohamed"/>
                    <Depense category="Autre" name="La nourriture des salaries" price="650" time={new Date().toLocaleTimeString()} agent="Youness"/>

                </div>
            </div>
            <div className="depenseone" style={{marginTop:"10px"}}>
                <h1 className="depense-title">Depenses de ce mois</h1>
                <div className="lesdepenses">
                    <Depense category="Painture" name="Atlas"  price="6.000" time={new Date().toLocaleTimeString()} agent="Aymane"/>
                    <Depense category="Transport" name="maintenance"  price="5.600" time={new Date().toLocaleTimeString()} agent="Mohamed"/>
                    <Depense category="Autre" name="La nourriture des salaries" price="650" time={new Date().toLocaleTimeString()} agent="Youness"/>
                    <Depense category="Transport" name="maintenance"  price="5.600" time={new Date().toLocaleTimeString()} agent="Mohamed"/>
                    <Depense category="Transport" name="maintenance"  price="5.600" time={new Date().toLocaleTimeString()} agent="Mohamed"/>
                    <Depense category="Autre" name="La nourriture des salaries" price="650" time={new Date().toLocaleTimeString()} agent="Youness"/>
                    <Depense category="Autre" name="La nourriture des salaries" price="650" time={new Date().toLocaleTimeString()} agent="Youness"/>
                </div>
            </div>
        </div>
    )
}