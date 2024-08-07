import Input from '../components/Input'
import somaplogo from '../assets/somap-logo.png'
import '../css/dashboard.css'
import Menu from '../components/Menu'
import DashboardContent from '../components/DashboardContent'
import Alert from '../components/Alert'
function Dashboard(){
    return(
        <div className="dashboard">
            {/* <Alert data=""></Alert> */}
            <Menu name="Mohamed" email="mohamed.lousour@gmail.com"></Menu>
            <DashboardContent></DashboardContent>
        </div>
    )
}
export default Dashboard;