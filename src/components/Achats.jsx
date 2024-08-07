import { useState } from 'react';
import Achat from './Achat';
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
                <th>Prix</th>
                <th>Quantite</th>
                <th>Nature</th>
                <th>Categorie</th>
                <th>Piece justificatif</th>
                <th>Date</th>
                <th>Action</th>
            </tr>
            <Achat name="zakaria oumghar" price="4.000" quantity="60kg" categorie="painture" nature="colorado" prouf="" date="01/08/2024"></Achat>
            <Achat name="zakaria oumghar" price="4.000" quantity="60kg" categorie="painture" nature="colorado" prouf="" date="01/08/2024"></Achat>
            <Achat name="zakaria oumghar" price="4.000" quantity="60kg" categorie="painture" nature="colorado" prouf="" date="01/08/2024"></Achat>
            <Achat name="zakaria oumghar" price="4.000" quantity="60kg" categorie="painture" nature="colorado" prouf="" date="01/08/2024"></Achat>
            <Achat name="zakaria oumghar" price="4.000" quantity="60kg" categorie="painture" nature="colorado" prouf="" date="01/08/2024"></Achat>

        </table>
    )
}