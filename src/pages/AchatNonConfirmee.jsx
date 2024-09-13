import Input from '../components/Input'
import somaplogo from '../assets/somap-logo.png'
import '../css/dashboard.css'
import Menu from '../components/Menu'
import DashboardContent from '../components/DashboardContent'
import AchatNonConfirmeeContent from "../components/AchatNonConfirmeeContent"

function Dashboard(){
    return(
        <div className="dashboard">
            <Menu name="Mohamed" email="mohamed.lousour@gmail.com"></Menu>
            <AchatNonConfirmeeContent></AchatNonConfirmeeContent>
        </div>
    )
}
export default Dashboard;