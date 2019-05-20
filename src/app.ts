/*
    Creator       : Luqmanul Hakim
    Project Name  : Express On Steroid  (TypeScript And HandlerBars)
*/
import mongoose from "mongoose";
import initLoadEnv from "./config/env";
import initExpress from "./config/express";
import initMongoDB from "./config/mongodb";

// Load Env File
initLoadEnv();

initMongoDB(() => {
  const server = initExpress();

  // Handling terminate gracefully
  process.on("SIGTERM", () => {
    console.log("SIGTERM signal received."); // tslint:disable-line
    console.log("Closing Express Server"); // tslint:disable-line
    server.close(() => {
      console.log("Express server closed."); // tslint:disable-line
    });
    mongoose.connection.close(false, () => {
      console.log("MongoDB connection closed."); // tslint:disable-line
      process.exit(0);
    });
  });
});
