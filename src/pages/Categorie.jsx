import Input from '../components/Input'
import somaplogo from '../assets/somap-logo.png'
import '../css/dashboard.css'
import Menu from '../components/Menu'
import CategorieContent from '../components/CategorieContent'

function Dashboard(){
    return(
        <div className="dashboard">
            <Menu name="Mohamed" email="mohamed.lousour@gmail.com"></Menu>
            <CategorieContent></CategorieContent>
        </div>
    )
}
export default Dashboard;