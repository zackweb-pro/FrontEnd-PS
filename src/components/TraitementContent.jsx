import Title from "./Title";
import "../css/dashboard-content.css";
import Logo from './Logo';
import Demandes from './Demandes'
export default function DashboardContent(){
    return(
        <main className='dashboard-content traitement-demande'>
            <Title content="Demande des comptes" fontsize="30px"/> 
            <Logo/>
            <Demandes></Demandes>
        </main>
    );
}