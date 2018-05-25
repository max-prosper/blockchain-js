const express = require("express");
const bodyParser = require("body-parser");
const Blockchain = require("../blockchain");

const PORT = process.env.PORT || 3001;

const app = express();
const bc = new Blockchain();

app.use(bodyParser.json());

app.get("/blocks", (req, res) => {
  res.json(bc.chain);
});

app.post("/mine", (req, res) => {
  const block = bc.addBlock(req.body.data);
  console.log(`New block added: ${block.toString()}`);

  res.redirect("/blocks");
});

app.listen(PORT, () => console.log(`App is up and running on port ${PORT}`));
