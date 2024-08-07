import Chart from "./Chart";
import Depenses from "./Depenses";
import Clock from "./Clock";
import Visualisation from "./Visualisation";
import TotaleDepense from "./TotaleDepense";
import virementimg from "../assets/01981c77-936d-49b4-97f7-a97daca371e0.jpg"
import { GiMoneyStack } from "react-icons/gi";
import Input from "./Input";
import VirementHistory from "./VirementHistory";

export default function Whatisnew(){
    return(
        <div className=" settings-table">

            <img style={{width: "250px"}} src={virementimg} alt="" />

                <form className="setting-inputs">
                    <h3 style={{margin: "20px 0", textAlign: "center"}}>Fait attention les changements sont irreversible!</h3>
                <Input icon={<GiMoneyStack />} name="Changer votre nom" id="salairejr" description=""></Input>
                <Input icon={<GiMoneyStack />} name="Changer votre prenom" id="salairejr" description=""></Input>
                <Input icon={<GiMoneyStack />} name="Changer votre email" id="salairejr" description=""></Input>
                <Input icon={<GiMoneyStack />} name="Changer votre mot de passe" id="salairejr" description=""></Input>
                <Input icon={<GiMoneyStack />} name="confirmer votre mot de passe" id="salairejr" description=""></Input>
                <button className="confirm-btn" style={{marginTop: "10px", width: "315px"}}>Confirmer les changement</button>

                </form>


        </div>
    ); 
}