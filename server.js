const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

const FILE = "./database.json";

/* DATA OKU */
app.get("/data", (req, res) => {
  const data = fs.readFileSync(FILE, "utf8");
  res.json(JSON.parse(data));
});

/* DATA KAYDET */
app.post("/data", (req, res) => {
  fs.writeFileSync(FILE, JSON.stringify(req.body, null, 2));
  res.json({ status: "ok" });
});

/* HTML SERVE */
app.use(express.static(__dirname));

app.listen(3000, () => {
  console.log("Server çalışıyor: http://localhost:3000");
});