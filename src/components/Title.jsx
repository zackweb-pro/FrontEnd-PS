export default function Title(props){

    return(
        <h1 className="Title-dashboard" style={{fontSize: props.fontsize}}>{props.content}</h1>
    );
}