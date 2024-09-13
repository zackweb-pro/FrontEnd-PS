import Demande from './Demande';
import { useEffect } from 'react';
import { useState } from 'react';
export default function Demandes(){
    const [demandes, setdemandes] = useState([]);

    let demandesFun = async() => {
        await fetch("http://localhost:8080/api/notconfirmedresposables")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setdemandes(data);
            })
            .catch(err => {
                console.error('Fetch error:', err);
            });
    }
    useEffect(()=>{
        demandesFun()
    }, []);
    return(
        <div className="demandes">
                    {/* {console.log(employees)}  */}
        {demandes?.length ? demandes.map((demande, i)=> <Demande name={`${demande.prenom} ${demande.nom}`} email={demande.email} post={demande.poste}></Demande>)
            : <h3 style={{color: "#636364"}}>There are no records yet</h3>
        }

        </div>
    )
}