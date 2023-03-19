import mongoose from "mongoose";
import { Schema } from "mongoose";

export interface IUser {
    firstName: string,
    lastName: string,
    email: string,
    userName: string,
    password: string,
    token?: string,
    isAdmin: boolean

}

export const userSchema = new Schema<IUser>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    userName: { type: String, required: true },
    password: { type: String, required: true },
    token: { type: String, required: false },
    isAdmin: {type: Boolean, required: true}

})

export const UserModel = mongoose.model<IUser>("users", userSchema);