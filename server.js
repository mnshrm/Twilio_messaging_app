const app = require("./app.js");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

// uncaught exception
process.on("uncaughtException", (err) => {
  console.log(err);
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to uncaught exception`);

  server.close(() => {
    process.exit(1);
  });
});

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("server has started");
});

// unhandled Promise rejection error handling
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to unhandles promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
