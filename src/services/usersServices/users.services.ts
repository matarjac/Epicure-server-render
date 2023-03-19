import { IUser, UserModel } from "../../model/usersModel/user.model";

export const addUser = async (user:IUser) => {
    try {
        const _user = new UserModel(user);
        await _user.save();
        return _user;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}

