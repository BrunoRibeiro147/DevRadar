require("dotenv/config")
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const routes = require("../src/routes");
const { setupWebSocket } = require("./webSocket");

const app = express();

const server = http.Server(app);

setupWebSocket(server);

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(routes);

server.listen(3333);
