import Input from '../components/Input'
import somaplogo from '../assets/somap-logo.png'
import '../css/dashboard.css'
import Menu from '../components/Menu'
import DashboardContent from '../components/DashboardContent'
import TraitementContent from '../components/TraitementContent'
function Dashboard(){
    return(
        <div className="dashboard">
            <Menu name="Mohamed" email="mohamed.lousour@gmail.com"></Menu>
            <TraitementContent></TraitementContent>
        </div>
    )
}
export default Dashboard;