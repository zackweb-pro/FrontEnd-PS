import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaAngleDoubleDown } from "react-icons/fa";

export default function VirementHistory(props) {
  const monthNamesFr = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ];

  return (
    <div class="card-virement">
      <div class="card-content-virement">
        <div className="totale-depense-title">
          <RiMoneyDollarCircleLine className="totale-depense-icon" />
          <div className="totale-depense-periode-container">
            <h1 className="totale-depense-mois">Virement</h1>
            <p className="totale-depense-periode">{props.date}</p>
          </div>
          <div className="totale-shortcut">200000000dhs</div>
        </div>
        <div className="chiffre-depense depense-virement shrink-div-content">
          <p>
            totale: <span className="lmofid">{props.depense}dhs</span>{" "}
          </p>
          <p>
            Salaire des employee:{" "}
            <span className="lmofid">{props.semployee}dhs</span>
          </p>
          <p>
            Salaire des respo: <span className="lmofid">{props.srespo}dhs</span>
          </p>
          <p>
            Autre charge: <span className="lmofid">{props.autre}dhs</span>
          </p>
          <p>
            Achat confirmée: <span className="lmofid">{props.aconf}dhs</span>
          </p>
          <p>
            Achat non confirmée:{" "}
            <span className="lmofid">{props.anconf}dhs</span>
          </p>
        </div>{" "}
        <input type="checkbox" className="expand-btn" />
      </div>
    </div>
  );
}
