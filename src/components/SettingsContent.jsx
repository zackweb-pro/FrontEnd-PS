import Title from "./Title";
import "../css/dashboard-content.css";
import Logo from './Logo';
import SettingsTable from './SettingsTable';
export default function DashboardContent(){
    const monthNamesFr = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
    return(
        <main className='dashboard-content'>
            <Title content="Settings"/>
            <Logo/>
            {/* <div className="periode-time">1-{new Date().getDate()} {monthNamesFr[new Date().getMonth()]}, {new Date().getFullYear()}</div> */}
            <SettingsTable></SettingsTable>
        </main>
    );
}