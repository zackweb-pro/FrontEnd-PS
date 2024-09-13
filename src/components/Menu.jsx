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
import {NavLink} from "react-router-dom";
export default function Menu(props){
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
    // let [activelink, setactivelink] = useState("")
    function activeLinkFun(e){
        Array.from(document.querySelector(".menu-links").children).forEach(c => {
           
                c.children[0].classList.remove("active-link")
            
        });
        Array.from(document.querySelector(".menu-links").children).forEach(c => {
           
            if(c.classList.contains(window.location.pathname)){
                c.children[0].classList.add("active-link")
            }
        
    });
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
                        <li><NavLink to='/dashboard'  className={({isActive}) => isActive ? "active-link" : "" }><MdDashboard /> Dashboard</NavLink></li>
                        <li><NavLink  to='/traitementdemande'  className={({isActive}) => isActive ? "active-link" : "" }><VscRequestChanges /> Les demandes</NavLink></li>
                        <li><NavLink to='/achatnonconfirmee'  className={({isActive}) => isActive ? "active-link" : "" }><FaShoppingCart /> Achat non confirmée</NavLink></li>
                        <li><NavLink to='/categorie'  className={({isActive}) => isActive ? "active-link" : "" }><BiSolidCategoryAlt /> Categorie</NavLink></li>
                        <li><NavLink to='/pointage'   className={({isActive}) => isActive ? "active-link" : "" }><TbRosetteDiscountCheckFilled /> Pointage</NavLink></li>
                        <li><NavLink to='/personnels'  className={({isActive}) => isActive ? "active-link" : "" }><HiUsers /> les Personnels</NavLink></li>
                        <li><NavLink to='/virement'   className={({isActive}) => isActive ? "active-link" : "" }><FaMoneyCheckAlt /> Virement</NavLink></li>
                        <li><NavLink to='/settings'  className={({isActive}) => isActive ? "active-link" : "" }><IoMdSettings /> Settings</NavLink></li>
                        <li><NavLink to='/'><CiLogout ></CiLogout> Log out</NavLink></li>
                    </ul>
                </nav>
            </div>
    )
}
