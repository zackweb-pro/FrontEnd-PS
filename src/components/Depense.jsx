export default function Depense(props){
    return(
        <div className="depense">
            <div className="info-depense">
                    <div className="nom-depense">{props.category} - {props.name}</div>
                    <div className="cout-depense">-{props.price}DHS</div>
            </div>
            <div className="timeandagent">
                {props.time} • {props.agent}
            </div>
        </div>
    )
}