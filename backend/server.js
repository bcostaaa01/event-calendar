const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const port = 3000;

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/events", (req, res) => {
    const events = require("./sportData.json");
    console.log(events)
    res.json(events);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

