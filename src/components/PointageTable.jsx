import { useState } from 'react';
import Pointagerow from './Pointagerow';
import { TbChartDots3 } from "react-icons/tb";
import { useEffect } from 'react';
export default function Achats(){
    let [clicked, checkclicked] = useState()
    function checkall(e){
        checkclicked(e.target.checked)
            Array.from(e.target.parentElement.parentElement.parentElement.children).forEach((c, i)=>{
                if(i!= 0){
                        c.children[0].children[0].checked = !clicked
                        console.log(clicked)
                    
                }   
        })
    }
    const [employees, setEmployees] = useState([]);

    let employeesFun = async() => {
        await fetch("http://localhost:8080/api/employees")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setEmployees(data);
            })
            .catch(err => {
                console.error('Fetch error:', err);
            });
    }
    useEffect(()=>{
        employeesFun()
    }, []);
    return(
        <table className='achats'>
            <tr className='achats-title'>
                <th><input type="checkbox" onChange={(e) => checkall(e)}/></th>
                <th>Nom et prenom</th>
                <th>Cni</th>
                <th>responsable</th>
                <th>Totale</th>
                <th>Etat d'aujourd'hui</th>
                <th>Changer l'etat</th>
            </tr>
                    {/* {console.log(employees)}  */}
        {employees?.length ? employees.map((employee, i)=> <Pointagerow name={`${employee.prenom} ${employee.nom}`} chef={employee.respo_id} cni={employee.cni} status={employee.Etat_today.toLowerCase()} totale={`${employee.jours_totale}jrs`}></Pointagerow>)
            : <h3 style={{color: "#636364"}}>There are no records yet</h3>
        }


        </table>
    )
}