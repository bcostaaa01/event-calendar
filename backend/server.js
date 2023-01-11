const express = require("express");
const app = express();
const port = 3000;

app.get("./events", (req, res) => {
  const events = require("./data/sportData.json");
  res.json(events);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
