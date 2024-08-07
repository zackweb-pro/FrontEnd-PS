import { MdMarkEmailRead } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";
import { TbChartDots3 } from "react-icons/tb";


export default function Demande(props){
    return(
       <tr className="achat">
                <td><input type="checkbox" /></td>
                <td>{props.name}</td>
                <td style={{fontWeight: "600", color: "black"}}>{props.price}Dhs</td>
                <td>{props.quantity}</td>
                <td>{props.nature}</td>
                <td>{props.categorie}</td>
                <td><a style={{color: "#43BE83", textDecoration: "none"}} href={props.prouf}>justif</a></td>
                <td>{props.date}</td>
                <td><TbChartDots3 className="icon-achat" style={{cursor: "pointer"}}></TbChartDots3></td>
       </tr>
    )
}