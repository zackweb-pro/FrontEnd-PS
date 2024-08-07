import { useState } from 'react';
import Pointagerow from './Pointagerow';
import { TbChartDots3 } from "react-icons/tb";

export default function Achats(){
    let [clicked, checkclicked] = useState()
    function checkall(e){
        checkclicked(e.target.checked)
            Array.from(e.target.parentElement.parentElement.parentElement.children).forEach((c, i)=>{
                if(i!= 0){
                        c.children[0].children[0].checked = !clicked
                        console.log(clicked)
                    
                }   
        })
    }
    return(
        <table className='achats'>
            <tr className='achats-title'>
                <th><input type="checkbox" onChange={(e) => checkall(e)}/></th>
                <th>Nom et prenom</th>
                <th>Cni</th>
                <th>responsable</th>
                <th>Totale</th>
                <th>Etat d'aujourd'hui</th>
                <th>Changer l'etat</th>
            </tr>
            <Pointagerow name="zakaria oumghar" chef="Mohamed Lousour" cni="WAXXXXXX" status="present" totale="21jrs"  date="01/08/2024"></Pointagerow>
            <Pointagerow name="zakaria oumghar" chef="Mohamed Lousour" status="neutre" cni="WAXXXXXX" totale="21jrs"  date="01/08/2024"></Pointagerow>
            <Pointagerow name="zakaria oumghar" chef="Mohamed Lousour" cni="WAXXXXXX"  status="abscent" totale="21jrs"  date="01/08/2024"></Pointagerow>
            <Pointagerow name="zakaria oumghar" chef="Mohamed Lousour" cni="WAXXXXXX"  status="present" totale="21jrs"  date="01/08/2024"></Pointagerow>

        </table>
    )
}