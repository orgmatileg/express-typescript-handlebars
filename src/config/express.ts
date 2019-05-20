import express, {
  Application,
  json,
  Request,
  Response,
  urlencoded
} from "express";
import exphbs from "express-handlebars";
import { Server } from "http";
import routesAPI from "../api/routes";

function initExpress(): Server {
  const app: Application = express();

  // Set Template engine to handlebars
  app.engine("hbs", exphbs());
  app.set("view engine", "hbs");

  // Middleware
  app.use(json());
  app.use(urlencoded({ extended: false }));

  // Check API Health / Ping
  app.get("/", (req: Request, res: Response) => {
    return res.send("OK");
  });

  // Example Using Handlebars Template Engine
  // More info: https://handlebarsjs.com/
  app.get("/home", (req: Request, res: Response) => {
    return res.render("home", {
      contohText: "Lorem Ipsum mas bro",
      title: "Express Typescript"
    });
  });

  // Router V1
  app.use("/api", routesAPI);

  // Init Express
  const PORT: string | number = process.env.PORT || 8080;
  return app.listen(
    PORT,
    () => console.log(`Server started on port ${PORT}`) // tslint:disable-line
  );
}

export default initExpress;
