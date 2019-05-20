import User from "./model";

interface IResultRepository {
  data: any;
  errorRepo: any;
}

class UserRepository {
  public async GetAll(): Promise<IResultRepository> {
    const result: IResultRepository = {
      errorRepo: null,
      data: null
    };

    try {
      result.data = await User.find().exec();
      return result;
    } catch (err) {
      result.errorRepo = {
        message: "Error Repository",
        errorRepo: err
      };
      return result;
    }
  }
}

export default UserRepository;
