import Title from "./Title";
import "../css/dashboard-content.css";
import Logo from './Logo';
import PointageTable from './PointageTable'
import { LuArrowLeft } from "react-icons/lu";
import { LuArrowRight } from "react-icons/lu";
import Clock from "./Clock";
import Alert from "./Alert";
export default function DashboardContent(){
    function options(){
        let c = [];
        for(let i = 1; i<16; i++){
            c.push(<option value={i}>{i}</option>)
             
        }
        return c;
    }
    return(
        <main className='dashboard-content traitement-demande'>
            <Title content="Pointage des personnels" fontsize="35px"/> 
            <Logo/>
            <Clock></Clock>
            <PointageTable></PointageTable>
            <div className="control-achat-non-confirmee">
                <div className="arrow-control-sec">
                <LuArrowLeft className="arrow-control"></LuArrowLeft>
                <div className="page-number">1</div>
                <div className="all-pages">/14</div>
                <LuArrowRight className="arrow-control"></LuArrowRight>
                </div>
                <div className="confirmation-buttons">
                    <form action=''>
                    <button className="confirm-btn" onClick={(e)=>{ e.preventDefault(); alert("zakaria hhhhh")}}>Present</button>
                    <span style={{display: "inline-block", margin: "0 10px"}}></span>
                    <button className="cancel-btn" onClick={(e)=>{ e.preventDefault(); alert("zakaria hhhhh")}}> <div className="cancel-text-container">Abscent</div></button>
                    </form>
                </div>
                <div className="control-per-line">
                    <p>lignes par page</p>
                    <select className="select-pages" name="" id="">
                        {...options()}
                    </select>
                </div>
            </div>
        </main>
    );
}