import { Request, Response, Router } from "express";
import userRoutes from "./module/user/delivery";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  res.send("This is route api version 1");
});
routes.use("/users", userRoutes);

export default routes;
