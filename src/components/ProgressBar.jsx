export default function ProgressBar(props){
    return(
        <div className="progress-bar">
            <div className="progress-info">
            <div className="progress-name">{props.name}</div>
            <div className="progress-price">{props.price}dhs</div>
            </div>
            <div className="progress">
                <input type="range" className="slider" value={props.progress} style={{background : "linear-gradient(to right, #00ffbc " + props.progress + "%, #d3d3d3 " + props.progress + "%)" }}/>
            </div>
        </div>
    )
}