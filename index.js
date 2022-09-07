const express = require('express');
const ejs = require('ejs');
const path = require('path');
const qrcode = require('qrcode');
const https = require('https');
// const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.port || 4567;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
const options = {
    key: fs.readFileSync(path.join(__dirname, 'localhost-key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'localhost.pem')),
  };

app.use(express.static("public"));

app.get("/", (req, res, next) => {
    res.render("index");
  });

  app.post("/scan", (req, res, next ) =>{
  try {
    const input = req.body.text;
    qrcode.toDataURL(input, (err,src) => {
        res.render("scan", { qr_code: src,})
    })
  } catch (err) {
    res.send("Something went wrong");
    next();
  }
  });
https.createServer(options, app).listen(port, () => {
    console.log(`HTTP/2 listening on port https://localhost:${port}`);
  });