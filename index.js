require('dotenv').config()
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {

// console.log(`Database name is ${process.env.DB_NAME}`);
// console.log(`Database username is ${process.env.DB_USERNAME}`);
// console.log(`Database password is ${process.env.DB_PASSWORD}`);
      
  res.json({ message: "ok" });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});