import { Request, Response } from "express";
import Repository from "./repository";

interface IResultUsecase {
  data: any;
  errRepo: any;
  errUcase: any;
}

class UserUsecase {
  public repo: Repository;
  constructor() {
    this.repo = new Repository();
  }

  public async GetAll(): Promise<IResultUsecase> {
    const result: IResultUsecase = {
      data: null,
      errRepo: null,
      errUcase: null
    };
    const resultRepo = await this.repo.GetAll();
    const { data, errorRepo } = resultRepo;
    if (errorRepo) {
      result.errRepo = errorRepo;
      return result;
    }
    result.data = data;
    return result;
  }
}

export default UserUsecase;
