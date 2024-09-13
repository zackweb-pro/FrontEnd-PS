import { useState } from "react";
import Achat from "./Achat";
import { TbChartDots3 } from "react-icons/tb";
import { useEffect } from "react";
export default function Achats() {
  let [clicked, checkclicked] = useState();
  function checkall(e) {
    checkclicked(e.target.checked);
    Array.from(
      e.target.parentElement.parentElement.parentElement.children
    ).forEach((c, i) => {
      if (i != 0) {
        c.children[0].children[0].checked = !clicked;
        console.log(clicked);
      }
    });
  }
  const [achats, setachats] = useState([]);

  let achatsFun = async () => {
    await fetch("http://localhost:8080/api/notconfirmedpurchases")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setachats(data);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
      });
  };
  useEffect(() => {
    achatsFun();
  }, []);
  return (
    <table className="achats">
      <tr className="achats-title">
        <th>
          <input type="checkbox" onChange={(e) => checkall(e)} />
        </th>
        <th>Nom et prenom</th>
        <th>Prix</th>
        <th>Quantite</th>
        <th>Nature</th>
        <th>Categorie</th>
        <th>Piece justificatif</th>
        <th>Date</th>
        {/* <th>Action</th> */}
      </tr>
      {achats?.length ? (
        achats.map((achat, i) => (
          <Achat
            name={`${achat.prenom} ${achat.nom}`}
            price={achat.price}
            quantity={`${achat.quantity} ${achat.unite}`}
            categorie={achat.categorie_name}
            nature={achat.purchase_name}
            prouf=""
            date={achat.date}
          ></Achat>
        ))
      ) : (
        <h3 style={{ color: "#636364", margin: "auto" }}>
          There are no records yet
        </h3>
      )}
    </table>
  );
}
