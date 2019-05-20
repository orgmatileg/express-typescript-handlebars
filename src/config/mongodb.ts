import mongoose from "mongoose";

function initMongoDB(callback: () => void) {
  const MONGO_USER = process.env.MONGO_USER || "user";
  const MONGO_PASS = process.env.MONGO_PASS || "masuk123";

  mongoose
    .connect(
      `mongodb://${MONGO_USER}:${MONGO_PASS}@ds159216.mlab.com:59216/express-typescript`,
      { useNewUrlParser: true }
    )
    .then(() => {
      console.log("Success connect to MongoDB"); // tslint:disable-line
      callback();
    })
    .catch((err) => {
      console.log(`Failed connect to MongoDB cause => ${err}`); // tslint:disable-line
      process.exit(0);
    });
}

export default initMongoDB;
