import { useEffect, useState } from 'react';
import Personnelsrow from './Personnelsrow';
import { TbChartDots3 } from "react-icons/tb";

export default function Achats(){
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
                <th>Nom et prenom</th>
                <th>cni</th>
                <th>responsable</th>
                <th>Totale</th>
                <th>Etat d'aujourd'hui</th>
                <th>Action</th>
            </tr>
        {/* {console.log(employees)}  */}
        {employees?.length ? employees.map((employee, i)=> <Personnelsrow name={`${employee.prenom} ${employee.nom}`} chef={employee.respo_id} cni={employee.cni} status={employee.Etat_today.toLowerCase()} totale={`${employee.jours_totale}jrs`}></Personnelsrow>)
            : <h3 style={{color: "#636364"}}>There are no records yet</h3>
        }

        </table>
    )
}