import Chart from "./Chart";
import Depenses from "./Depenses";
import Clock from "./Clock";
import Visualisation from "./Visualisation";
import TotaleDepense from "./TotaleDepense";
import virementimg from "../assets/19199681.jpg"
import { GiMoneyStack } from "react-icons/gi";
import Input from "./Input";
import VirementHistory from "./VirementHistory";

export default function Whatisnew(){
    return(
        <div className="whatisnew virement-table">
            
            <div className="sectionone">
            <img style={{width: "300px"}} src={virementimg} alt="" />

                <form className="inputs-section">
                    <h3 style={{margin: "20px 0", textAlign: "center"}}>Entrer les salaires en Dirham</h3>
                <Input icon={<GiMoneyStack />} name="Le salaire des employees par jour" id="salairejr" description=""></Input>
                <Input icon={<GiMoneyStack />} name="le salaire des respo" id="salairechef" description=""></Input>
                <Input icon={<GiMoneyStack />} name="Autre charge..." id="autrechargesalaire" description=""></Input>
                <button className="confirm-btn" style={{marginTop: "10px"}}>Confirmer le virement</button>

                </form>

            </div>
            <div className="sectiontwo">
            <div className="virement-history">
                    <VirementHistory depense="2000000" semployee="80.000dhs (150dhs)" srespo="100.000" autre="0" anconf="0" aconf="143.324" date="mars, 2024"></VirementHistory>
                    <VirementHistory depense="2000000" semployee="80.000dhs (150dhs)" srespo="100.000" autre="0" anconf="0" aconf="143.324" date="june, 2024"></VirementHistory>
                    <VirementHistory depense="2000000" semployee="80.000dhs (150dhs)" srespo="100.000" autre="0" anconf="0" aconf="143.324" date="may, 2024"></VirementHistory>
                    <VirementHistory depense="2000000" semployee="80.000dhs (150dhs)" srespo="100.000" autre="0" anconf="0" aconf="143.324" date="april, 2024"></VirementHistory>
                    <VirementHistory depense="2000000" semployee="80.000dhs (150dhs)" srespo="100.000" autre="0" anconf="0" aconf="143.324" date="july, 2024"></VirementHistory>


                </div>
            </div>
        </div>
    ); 
}