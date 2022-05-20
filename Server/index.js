const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

// Add mysql database connection
const db = mysql.createPool({
  host: 'mysql', // the host name MYSQL_DATABASE: node_mysql
  user: 'root', // database user MYSQL_USER: MYSQL_USER
  password: 'root', // database user password MYSQL_PASSWORD: MYSQL_PASSWORD
  database: 'mobee' // database name MYSQL_HOST_IP: mysql_db
})

// Enable cors security headers
app.use(cors())

// add an express method to parse the POST method
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// home page
app.get('/', (req, res) => {
  res.send('Hi There')
});

// example page
app.get('/example', (req, res) => {
  res.send('example')
});
3


// get all of the users in the database
app.get('/get/allUsers', (req, res) => {
  const SelectQuery = " SELECT * FROM USUARIOS";
  db.query(SelectQuery, (err, result) => {
    res.send(result)
  })
})

// get all of one user in the database
app.get('/get/user/name=:name', (req, res) => {
  const name = req.params.name;
  const SelectQuery = "SELECT * FROM USUARIOS WHERE NOMBRE = ?";
  db.query(SelectQuery, name ,(err, result) => {
    if (err) res.send(err)
    else res.send(result)
  })
})

// get all of one user in the database
app.get('/get/user/email=:email', (req, res) => {
  const email = req.params.email;
  const SelectQuery = "SELECT * FROM USUARIOS WHERE CORREO = ?";
  db.query(SelectQuery, email ,(err, result) => {
    if (err) res.send(err)
    else res.send(result)
  })
})




// add a user to the database
app.get("/insert/user/:name/:email/:password", (req, res) => {
  // const bookName = req.body.setBookName;
  // const bookReview = req.body.setReview;

  const name = req.params.name;
  const email = req.params.email;
  const password = req.params.password;

  const InsertQuery = "INSERT INTO USUARIOS (NOMBRE, CORREO, CONTRASENA) VALUES (?, ?, ?)";
  db.query(InsertQuery, [name, email, password], (err) => {
    if (err) res.send(err)
    else res.send(`Has añadido el usuario con nombre: ${name}, correo: ${email} y contraseña: ${password}`)
  })
})

// delete a user from the database
app.get("/delete/user:userId", (req, res) => {
  const userId = req.params.userId;
  const DeleteQuery = "DELETE FROM USUARIOS WHERE ID = ?";

  db.query(DeleteQuery, userId, (err) => {
    if (err) res.send(err);
    else res.send(`Has borrado el usuario con id -> ${userId}`);
  })
})

// update a user name
app.get("/update/user:userId/toName/:name", (req, res) => {
  const userId = req.params.userId;
  const name = req.params.name;
  const UpdateQuery = "UPDATE USUARIOS SET NOMBRE = ? WHERE ID = ?";

  db.query(UpdateQuery, [name, userId], (err) => {
    if (err) res.send(err)
    else res.send(`Has actualizado el nombre a ${name} del usuario con id ${userId}`)
  })
})

// update a user email
app.get("/update/user:userId/toEmail/:email", (req, res) => {
  const userId = req.params.userId;
  const email = req.params.email;
  const UpdateQuery = "UPDATE USUARIOS SET CORREO = ? WHERE ID = ?";

  db.query(UpdateQuery, [email, userId], (err) => {
    if (err) res.send(err)
    else res.send(`Has actualizado el correo a ${email} del usuario con id ${userId}`)
  })
})

// update a user password
app.get("/update/user:userId/toPassword/:password", (req, res) => {
  const userId = req.params.userId;
  const password = req.params.password;
  const UpdateQuery = "UPDATE USUARIOS SET CONTRASENA = ? WHERE ID = ?";

  db.query(UpdateQuery, [password, userId], (err) => {
    if (err) res.send(err)
    else res.send(`Has actualizado la contraseña a ${password} del usuario con id ${userId}`)
  })
})

app.listen('3001', () => { })