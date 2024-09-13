import { useState } from "react";
import AchatCategorie from "./AchatCategorie";
import { useEffect } from "react";
export default function AchatCategoriesCategorie() {
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
    await fetch("http://localhost:8080/api/purchases")
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
    <table className="achats-categorie">
      <tr className="AchatCategories-title">
        <th>
          <input type="checkbox" onChange={(e) => checkall(e)} />
        </th>
        <th>Nom et prenom</th>
        <th>Prix</th>
        <th>Quantite</th>
        <th>Nature</th>
        <th>Categorie</th>
        <th>status</th>
        <th>Piece justificatif</th>
        <th>Date</th>
        {/* <th>Action</th> */}
      </tr>
      {achats?.length ? (
        achats.map((achat, i) => (
          <AchatCategorie
            name={`${achat.prenom} ${achat.nom}`}
            price={achat.price}
            quantity={`${achat.quantity} ${achat.unite}`}
            state={achat.confirmation}
            categorie={achat.categorie_name}
            nature={achat.purchase_name}
            prouf=""
            date={achat.date}
          ></AchatCategorie>
        ))
      ) : (
        <h3 style={{ color: "#636364" }}>There are no records yet</h3>
      )}
      {/* <AchatCategorie name="zakaria oumghar" price="4.000" quantity="60kg" categorie="painture" nature="colorado" state="confirmée" prouf="" date="01/08/2024"></AchatCategorie>
            <AchatCategorie name="zakaria oumghar" price="4.000" quantity="60kg" categorie="painture" nature="colorado" state="confirmée" prouf="" date="01/08/2024"></AchatCategorie>
            <AchatCategorie name="zakaria oumghar" price="4.000" quantity="60kg" categorie="painture" nature="colorado" state="confirmée" prouf="" date="01/08/2024"></AchatCategorie>
            <AchatCategorie name="zakaria oumghar" price="4.000" quantity="60kg" categorie="painture" nature="colorado" state="non confirmée" prouf="" date="01/08/2024"></AchatCategorie>
            <AchatCategorie name="zakaria oumghar" price="4.000" quantity="60kg" categorie="painture" nature="colorado" state="confirmée" prouf="" date="01/08/2024"></AchatCategorie> */}
    </table>
  );
}
