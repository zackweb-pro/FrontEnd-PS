import '../css/clock.css'
import { useState } from 'react';
export default function Clock(){
    const monthNamesFr = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
    const semaine = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
    let [time, setcurrenttime] = useState(new Date().toLocaleTimeString("en-MA",{ hour12: false }))
    function updatetime(){
        let time = new Date().toLocaleTimeString("en-MA",{ hour12: false })
        setcurrenttime(time);
    }
    setInterval(() => {
        updatetime()
    }, 100);
    return(
        <div className="clock centered-clock">
            <div className="day-in-clock">{semaine[new Date().getDay()]}</div>
            <div className="digital-border">
                <div className="content-digital-clock">{time}</div>
        
            </div>
            <div className="month-in-clock">{new Date().getDate()} {monthNamesFr[new Date().getMonth()]}</div>
        </div>
    )
}