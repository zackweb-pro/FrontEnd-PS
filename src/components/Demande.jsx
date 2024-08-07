import { MdMarkEmailRead } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";


export default function Demande(props){
    return(
        <div className="demande">
            <div className="name-compte-demande">{props.name}</div>
            <div className="demande-infos">
                <div className="demander-email"><span><MdMarkEmailRead className="demande-icons"/> email</span> {props.email}</div>
                <div className="demander-post"><span><MdOutlineWork className="demande-icons"/> poste</span> {props.post}</div>
            </div>
            <div className="confirmation-buttons">
                <form action="">
                    <button className="cancel-btn"><div className="cancel-text-container">Supprimer</div></button>
                    <button className="confirm-btn">Confirmer</button>
                </form>
            </div>
        </div>
    )
}