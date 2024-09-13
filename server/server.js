const express = require("express")
const mysql = require("mysql")
const cors = require("cors")
const corsOptions = {
    origin: ["http://localhost:5173"],
}


const app = express()
app.use(cors(corsOptions))
const PORT = process.env.PORT || 8080
const db = mysql.createConnection(
    {host: "localhost",
        user: "root",
        password: "",
        database: "somap&service"
    }
)
app.get("/api/employees", (req, res)=>{
        const sql = "SELECT * FROM employees";
        db.query(sql, (err, data)=>{
            if(err) return res.json(err);
            return res.json(data)
        })
});
app.get("/api/notconfirmedresposables", (req, res)=>{
    const sql = "SELECT * FROM `responsables` WHERE confirmation='no';";
    db.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
});
app.get("/api/notconfirmedpurchases", (req, res)=>{
    const sql = "SELECT r.nom, r.prenom, p.id AS purchase_id, p.price, p.quantity, p.unite, p.name AS purchase_name, c.name AS categorie_name, p.status, p.justif, p.date , p.confirmation FROM purchases p JOIN responsables r ON p.buyer_id = r.id JOIN categories c ON p.categorie_id = c.id WHERE p.confirmation = 'non confirmée';";
    db.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
});
app.get("/api/purchases", (req, res)=>{
    const sql = "SELECT r.nom, r.prenom, p.id AS purchase_id, p.price, p.quantity, p.unite, p.name AS purchase_name, c.name AS categorie_name, p.status, p.justif, p.date , p.confirmation FROM purchases p JOIN responsables r ON p.buyer_id = r.id JOIN categories c ON p.categorie_id = c.id;";
    db.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
});
app.listen(PORT , ()=>{
    console.log("server started")
})
