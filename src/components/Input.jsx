function Input(props){
    return(
        <div className={`input-name ${props.classname}`}>
            <input id={props.id} type={props.type} placeholder={props.description} required/>
            <p>{props.name}</p>
            <div className="icon">{props.icon}</div>
        </div>
    );
}
Input.defaultProps ={
    type: "text"
}
export default Input;