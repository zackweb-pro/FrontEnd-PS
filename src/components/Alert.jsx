export default function Alert(props){
    return(
        <div className="overlay">
             <div className="alert">
                <p>Est ce que vous êtes sûr de cette Action?</p>
                <form action={props.data}>
                    <button className="alert-cancel" type="submit">Abotir</button>
                    <button className="alert-confirm" type="submit">Confirmer</button>
                </form>
            </div>
        </div>

    )
}