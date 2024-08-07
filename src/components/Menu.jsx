import '../css/Menu.css'
import Dashboard from '../pages/dashboard';
import { LiaTimesSolid } from "react-icons/lia";
import { RiMenu4Fill } from "react-icons/ri";
import { useState } from 'react';
import TraitementDemande from '../pages/TraitementDemande'
import { CiLogout } from "react-icons/ci";
import AchatNonConfirmee from '../pages/AchatNonConfirmee'
import { MdDashboard } from "react-icons/md";
import { VscRequestChanges } from "react-icons/vsc";
import { FaShoppingCart } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { HiUsers } from "react-icons/hi2";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

function Menu(props){
    let [icon, seticon] = useState(<LiaTimesSolid  className='menu-cancel'></LiaTimesSolid>)
    function clicking(e){
        console.log("hahahahaha")
       if( e.target.classList.contains("menu-activation")){
        seticon(<LiaTimesSolid  className='menu-cancel'></LiaTimesSolid>)
        document.querySelector(".dashboard-content").classList.remove("active")
       }else{
        seticon(<RiMenu4Fill className='menu-activation'></RiMenu4Fill>)
        document.querySelector(".dashboard-content").classList.add("active")

       }
    }
    function activelink(){
        Array.from(document.querySelector(".menu-links").children).forEach(e => {
            if(e.children[0].getAttribute("href") == window.location.pathname){
                e.children[0].classList.add("active-link")
            }
        });
    }
    window.onload = ()=>{
        activelink();
    }
    return(
            <div className='menu'>
                <div className="menu-icon" onClick={(e) => {clicking(e)}}>{icon}</div>
                <div className="infos">
                    <div className="name">{props.name}</div>
                    <div className="email">{props.email}</div>
                </div>
                <nav>
                    <ul className='menu-links'>
                        <li><a href='/dashboard'><MdDashboard /> Dashboard</a></li>
                        <li><a  href='/traitementdemande'><VscRequestChanges /> Les demandes</a></li>
                        <li><a href='/achatnonconfirmee'><FaShoppingCart /> Achat non confirmée</a></li>
                        <li><a href='/categorie'><BiSolidCategoryAlt /> Categorie</a></li>
                        <li><a href='/pointage'><TbRosetteDiscountCheckFilled /> Pointage</a></li>
                        <li><a href='/personnels'><HiUsers /> les Personnels</a></li>
                        <li><a href='/virement'><FaMoneyCheckAlt /> Virement</a></li>
                        <li><a href='/settings'><IoMdSettings /> Settings</a></li>
                        <li><a href='/'><CiLogout ></CiLogout> Log out</a></li>
                    </ul>
                </nav>
            </div>
    )
}
export default Menu;