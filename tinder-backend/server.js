import express from "express";
import mongoose from "mongoose";
import dbCrads from "./dbCrads.js";
import Cors from "cors";

const app = express();
const port = process.env.PORT || 8001;
const connection_url =
  "mongodb+srv://yash:yash@cluster0.0qee5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
app.use(express.json());
app.use(Cors());

app.get("/", (req, res) => res.status(200).send("HELLO WORLD"));
app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;
  dbCrads.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  dbCrads.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
app.listen(port, () => console.log(`listening on localhost :${port}`));
