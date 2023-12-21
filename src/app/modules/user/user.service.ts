import { User } from "./user.interface";
import { UserModel } from "./user.model";

const createUserIntoDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

const getAllUserFromDB = async () => {
  const result = await UserModel.find();
  return result;
};
const getSingleUserFromDB = async (userId: number) => {
  const result = await UserModel.findOne({ userId });
  return result;
};
const getUpdatedUserFromDB = async (userId: number, age: number) => {
  const result = await UserModel.findOneAndUpdate({ userId }, { age: age });
  return result;
};
const deleteUserFromDB = async (userId: number) => {
  const result = await UserModel.updateOne({ userId }, { isDeleted: true });
  return result;
};

export const userServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  getUpdatedUserFromDB,
  deleteUserFromDB,
};
