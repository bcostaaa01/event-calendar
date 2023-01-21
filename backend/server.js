const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const port = process.env.PORT || 3000;
const events = require("./sportData.json");

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/events", (req, res) => {
  console.log(events);
  res.json(events);
});

app.use((err, res) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
