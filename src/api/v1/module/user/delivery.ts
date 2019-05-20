import { Request, Response, Router } from "express";
import Usecase from "./usecase";

class UserDelivery {
  public routerHandler: Router;
  constructor() {
    this.routerHandler = Router();
    this.initGetAll();
  }

  public initGetAll() {
    this.routerHandler.get("/", async (req: Request, res: Response) => {
      const userUsecase: Usecase = new Usecase();
      const users = await userUsecase.GetAll();
      return res.status(200).json(users);
    });
  }
}

// routerHandler.get("/", async (req: Request, res: Response) => {
//   const userUsecase: Usecase = new Usecase(req, res);
//   const users = await userUsecase.GetAll();
//   return res.status(200).json(users);
// });

// routerHandler.post("/", async (req: Request, res: Response) => {
//   await new User({
//     fullName: "Nama Lengkap",
//     email: "Email"
//   })
//     .save()
//     .then(user => {
//       return res.status(201).json(user);
//     })
//     .catch(err => res.status(400).send("Something went wrong"));
// });

export default new UserDelivery().routerHandler;
