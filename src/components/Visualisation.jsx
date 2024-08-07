import ProgressBar from "./ProgressBar"
export default function Visualisation(){
    return(
        <div className="visualisation">
            <h1 className="titre-visualisation">Les depenses par categories</h1>
            <ProgressBar name="painture" price="40.000" progress="40"></ProgressBar>
            <ProgressBar name="Material" price="30.000" progress="30"></ProgressBar>
            <ProgressBar name="Transport" price="20.000" progress="20"></ProgressBar>
            <ProgressBar name="Autre" price="10.000" progress="10"></ProgressBar>
        </div>
    )
}