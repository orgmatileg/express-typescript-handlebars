import { Request, Response, Router } from "express";
import routesV1 from "./v1/routes";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  res.send("This is route api");
});
routes.use("/v1", routesV1);

export default routes;
