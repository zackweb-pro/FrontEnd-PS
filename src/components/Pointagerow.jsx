import { MdMarkEmailRead } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";
import { TbChartDots3 } from "react-icons/tb";
import { FaRegCalendarCheck } from "react-icons/fa";
import { MdFreeCancellation } from "react-icons/md";


export default function Demande(props){
    return(
       <tr className="achat">
                <td><input type="checkbox" /></td>
                <td style={{fontWeight: "500", color: "black"}}>{props.name}</td>
                <td>{props.cni}</td>
                <td>{props.chef}</td>
                <td  style={{fontWeight: "500", color: "#7FC008"}}>{props.totale}</td>
                <td> <span className={props.status}>{props.status}</span></td>
                <td>

                    <form action="" className="pointagebuttonswrapper">
                <button style={{background: "none", border: "none", outline: "none"}} type="submit">

                <MdFreeCancellation  style={{cursor: "pointer", color: "red", fontSize: "26px"}}/>
                </button>
                <button type="submit" style={{background: "none", border: "none", outline: "none"}}>

                <FaRegCalendarCheck  style={{cursor: "pointer", color: "green", fontSize: "22px"}}/>
                </button>

                    </form>
                </td>
       </tr>
    )
}