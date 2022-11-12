const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
app.use(cors());
app.use(express.json());
// db connection
const dbo = require("./db/conn");
app.use("/api/auth", require("./routes/authRoute"));
app.listen(port, () => {
  dbo();
  console.log(`Server is running on port: ${port}`);
});
