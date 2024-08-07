import { MdMarkEmailRead } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";
import { TbChartDots3 } from "react-icons/tb";
import { FaRegCalendarCheck } from "react-icons/fa";
import { MdFreeCancellation } from "react-icons/md";


export default function Demande(props){
    return(
       <tr className="achat">
                <td  style={{fontWeight: "500", color: "black"}}>{props.name}</td>
                <td>{props.cni}</td>
                <td>{props.chef}</td>
                <td  style={{fontWeight: "500", color: "#7FC008"}}>{props.totale}</td>
                <td> <span className={props.status}>{props.status}</span></td>
                <td><input type="radio" name="check-for-update" /></td>
       </tr>
    )
}