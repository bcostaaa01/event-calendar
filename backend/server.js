const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/events", (req, res) => {
  const events = require("./sportData.json");
  res.json(events);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
