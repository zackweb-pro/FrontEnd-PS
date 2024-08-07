import Input from '../components/Input'
import somaplogo from '../assets/somap-logo.png'
import '../css/dashboard.css'
import Menu from '../components/Menu'
import DashboardContent from '../components/DashboardContent'
import PointageContent from "../components/PointageContent"

export default function Pointage(){
    return(
        <div className="dashboard">
            <Menu name="Mohamed" email="mohamed.lousour@gmail.com"></Menu>
            <PointageContent></PointageContent>
        </div>
    )
}