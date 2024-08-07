import Input from '../components/Input'
import somaplogo from '../assets/somap-logo.png'
import '../css/dashboard.css'
import Menu from '../components/Menu'
import PersonnelsContent from "../components/PersonnelsContent"

export default function Pointage(){
    return(
        <div className="dashboard">
            <Menu name="Mohamed" email="mohamed.lousour@gmail.com"></Menu>
            <PersonnelsContent></PersonnelsContent>
        </div>
    )
}