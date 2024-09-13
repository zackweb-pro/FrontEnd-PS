import Chart from "./Chart";
import Depenses from "./Depenses";
import Clock from "./Clock";
import Visualisation from "./Visualisation";
import TotaleDepense from "./TotaleDepense";
import virementimg from "../assets/Gear_doodle_setting_icon_hand_drawn_cartoon_art_illustration.jpg";
import { GiMoneyStack } from "react-icons/gi";
import Input from "./Input";
import VirementHistory from "./VirementHistory";
import { RiShieldUserFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { PiPasswordFill } from "react-icons/pi";

export default function Whatisnew() {
  return (
    <div className=" settings-table">
      <img style={{ width: "250px" }} src={virementimg} alt="" />

      <form className="setting-inputs">
        <h3 style={{ margin: "20px 0", textAlign: "center", color: "#B5A9A9" }}>
          Attention les changements sont irréversibles!
        </h3>
        <Input
          icon={<RiShieldUserFill />}
          name="Changer votre nom"
          id="salairejr"
          description=""
        ></Input>
        <Input
          icon={<RiShieldUserFill />}
          name="Changer votre prenom"
          id="salairejr"
          description=""
        ></Input>
        <Input
          icon={<MdEmail />}
          name="Changer votre email"
          id="salairejr"
          description=""
        ></Input>
        <Input
          icon={<PiPasswordFill />}
          name="Changer votre mot de passe"
          type="password"
          id="salairejr"
          description=""
        ></Input>
        <Input
          icon={<PiPasswordFill />}
          name="confirmer votre mot de passe"
          type="password"
          id="salairejr"
          description=""
        ></Input>
        <button
          className="confirm-btn"
          style={{ marginTop: "10px", width: "315px" }}
        >
          Confirmer les changement
        </button>
      </form>
    </div>
  );
}
