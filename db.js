import mysql from "mysql";

let conexion = mysql.createConnection({
    host:"db-appweb.cvuu0sq2e7al.us-east-2.rds.amazonaws.com",
    database: "db_users",
    user: "alvaro",
    password: "Andres0n.88"
})

conexion.connect((err) =>{
    if (err) {
        console.log("ERROR conectando a la base de datos" + err);
    } else {
        console.log("La conexion fue exitosa");
    }
})