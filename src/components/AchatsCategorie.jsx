import { useState } from "react"
import AchatCategorie from "./AchatCategorie"
export default function AchatCategoriesCategorie(){
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
            <table className='achats-categorie'>
            <tr className='AchatCategories-title'>
                <th><input type="checkbox" onChange={(e) => checkall(e)}/></th>
                <th>Nom et prenom</th>
                <th>Prix</th>
                <th>Quantite</th>
                <th>Nature</th>
                <th>Categorie</th>
                <th>status</th>
                <th>Piece justificatif</th>
                <th>Date</th>
                <th>Action</th>
            </tr>
            <AchatCategorie name="zakaria oumghar" price="4.000" quantity="60kg" categorie="painture" nature="colorado" state="confirmée" prouf="" date="01/08/2024"></AchatCategorie>
            <AchatCategorie name="zakaria oumghar" price="4.000" quantity="60kg" categorie="painture" nature="colorado" state="confirmée" prouf="" date="01/08/2024"></AchatCategorie>
            <AchatCategorie name="zakaria oumghar" price="4.000" quantity="60kg" categorie="painture" nature="colorado" state="confirmée" prouf="" date="01/08/2024"></AchatCategorie>
            <AchatCategorie name="zakaria oumghar" price="4.000" quantity="60kg" categorie="painture" nature="colorado" state="non confirmée" prouf="" date="01/08/2024"></AchatCategorie>
            <AchatCategorie name="zakaria oumghar" price="4.000" quantity="60kg" categorie="painture" nature="colorado" state="confirmée" prouf="" date="01/08/2024"></AchatCategorie>

        </table>
    )
}