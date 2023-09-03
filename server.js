const mongoose = require("mongoose");
// const { DB_HOST } = require("./config"); //прибери це!
require("dotenv").config({ override: true, debug: true }); //додай це! як ти без цього взагалі здав?

const { DB_HOST, PORT = 3000 } = process.env; // додай це!
console.log(process.env.DB_HOST);
console.log(process.env.SECRET_KEY);

const app = require("./app");

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      // додала порт, так краще
      console.log("Database connection successful");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
