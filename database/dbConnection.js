import mysql from "mysql2"



const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB
})


connection.connect((err) => {
    if (err) {
        throw err
    }
    console.log("connected to mysql server");
})


export default connection







