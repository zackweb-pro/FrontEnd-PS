import Chart from "./Chart";
import Depenses from "./Depenses";
import Clock from "./Clock";
import Visualisation from "./Visualisation";
import TotaleDepense from "./TotaleDepense";
export default function Whatisnew(){
    return(
        <div className="whatisnew">
            
            <div className="sectionone">
                <Chart></Chart>
                <Depenses></Depenses>
            </div>
            <div className="sectiontwo">
                <Clock></Clock>
                <Visualisation></Visualisation>
                <TotaleDepense depense="262.000.000"></TotaleDepense>
            </div>
        </div>
    ); 
}