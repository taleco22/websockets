const express = require("express");
const socket = require("socket.io");

const app = express();

app.use(express.static("public"));

app.listen(4000, () => console.log("listening on port 4000"));