export default function Categories(){
    return(
        <div className="categories">
            <form action="">
                <button className="cancel-btn cancel-btn-categorie"><div className="cancel-text-container cancel-text-categorie">Afficher tout</div></button>
                <button className="confirm-btn confirm-btn-categorie">Painture</button>
                <button className="cancel-btn cancel-btn-categorie"><div className="cancel-text-container cancel-text-categorie">materiel</div></button>
                <button className="cancel-btn cancel-btn-categorie"><div className="cancel-text-container cancel-text-categorie">trasport</div></button>
                <button className="cancel-btn cancel-btn-categorie"><div className="cancel-text-container cancel-text-categorie">autre</div></button>
                <div className="categorie-plus">
                    <span contenteditable="true">+</span>
                </div>
                <button className="confirm-btn confirm-btn-categorie confirm-new-categorie">Confirm</button>
            </form>
        </div>
    )
}