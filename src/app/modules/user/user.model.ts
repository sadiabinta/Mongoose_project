import { Schema, model, connect } from "mongoose";
import { User, UserAddress, UserFullName, UserOrder } from "./user.interface";

const userNameSchema = new Schema<UserFullName>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});
const userAddressSchema = new Schema<UserAddress>({
  street: {
    type: String,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});
const userOrderSchema = new Schema<UserOrder>({
  productName: {
    type: String,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
});
const userSchema = new Schema<User>({
  userId: { type: Number, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: userNameSchema,
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  hobbies: { type: [String], required: true },
  address: userAddressSchema,
  orders: { type: [userOrderSchema], required: false },
});

export const UserModel = model<User>("User", userSchema);
