
const hostname = '127.0.0.5';

const express = require('express');

var cors = require('cors')

const app = express();
const port = 80;
app.use(express.json());

app.use(cors())

app.get('/bagianke01', (req, res) => {
  res.send('halaman berita politik')});

app.post("/bagianke01", (req, res) => {
  // Disini kodingan untuk menyimpan data kedalam database
  res.send(
    "Suhu : " +
      req.body.suhu +
      " intensitas cahaya " +
      req.body.intensitascahaya +
      " motion sensor " +
      req.body.motionsensor
  );
});

app.get('/bagianke02', (req, res) => {
  res.send('halaman berita otomotif')});

app.get('/bagianke03', (req, res) => {
  res.send({bagianke03: 1000})});

app.get("/getlist", (req, res) => {
  res.send({ sensor_suhu : [{ suhu: 1000, waktu : "2023-01-03 21:00" }, { suhu: 1500, waktu : "2023-01-03 21:01" }, { suhu:2000, waktu : "2023-01-03 21:02" }, { suhu: 2500, waktu : "2023-01-03 20:03" }]})
});

app.post('/partpost', (req, res) => {
  res.send("Data yang dikirim adalah " + req.body.suhu);
});
    //(Menyimpan ke database)

app.listen(port, () => {
  console.log(`cli-nodejs-api listening at http://localhost:${port}/`)
});


//(http://127.0.0.3/)