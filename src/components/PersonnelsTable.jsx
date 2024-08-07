import { useState } from 'react';
import Personnelsrow from './Personnelsrow';
import { TbChartDots3 } from "react-icons/tb";

export default function Achats(){

    return(
        <table className='achats'>
            <tr className='achats-title'>
                <th>Nom et prenom</th>
                <th>cni</th>
                <th>responsable</th>
                <th>Totale</th>
                <th>Etat d'aujourd'hui</th>
                <th>Action</th>
            </tr>
            <Personnelsrow name="zakaria oumghar" chef="Mohamed Lousour" cni="WAXXXXXX" status="abscent" totale="21jrs"></Personnelsrow>
            <Personnelsrow name="zakaria oumghar" chef="Mohamed Lousour" cni="WAXXXXXX" status="present" totale="21jrs"></Personnelsrow>
            <Personnelsrow name="zakaria oumghar" chef="Mohamed Lousour" cni="WAXXXXXX" status="neutre" totale="21jrs"  ></Personnelsrow>
            <Personnelsrow name="zakaria oumghar" chef="Mohamed Lousour" cni="WAXXXXXX" status="present" totale="21jrs"></Personnelsrow>

        </table>
    )
}