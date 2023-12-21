import { Request, Response } from "express";
import { userServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;
    const result = await userServices.createUserIntoDB(userData);
    res.status(200).json({
      success: true,
      message: "User created successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUserFromDB();

    res.status(200).json({
      success: true,
      message: "User fetched successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId, 10);
    const result = await userServices.getSingleUserFromDB(userId);

    res.status(200).json({
      success: true,
      message: "Users fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(404).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId, 10);
    const result = await userServices.deleteUserFromDB(userId);

    res.status(200).json({
      success: true,
      message: "User deleted successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(404).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};
const getUpdatedUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId, 10);
    const userDataToUpdate = req.body.age;
    const result = await userServices.getUpdatedUserFromDB(
      userId,
      userDataToUpdate
    );

    res.status(200).json({
      success: true,
      message: "Users updated successfully!",
      data: result,
    });
  } catch (err: any) {
    console.log(err);
  }
};
export const UserControllers = {
  createUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
  getUpdatedUser,
};
