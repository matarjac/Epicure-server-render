import { Request, Response } from 'express';
import { addUser } from '../../services/usersServices/users.services';
import { UserModel } from '../../model/usersModel/user.model';


const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

export const addNewUser = async (req: Request, res: Response) => {
    try {
        const { firstName, lastName, email, userName, password } = req.body;

        if (!(firstName && lastName && email && userName && password)) {
            res.status(400).send("all fields are required")
        }
        const oldUser = await UserModel.findOne({ email });

        if (oldUser) {
            return res.status(409).send("User with this email already exists. please log in.")
        }

        const encrypted_password = await bcrypt.hash(password, 10);

        const user = await addUser({
            firstName,
            lastName,
            userName,
            email: email.toLowerCase(),
            password: encrypted_password,
            isAdmin: false
        });

        // const token = jwt.sign(
        //     { user_id: user._id, email, isAdmin:false },
        //     process.env.TOKEN_KEY,
        //     {
        //         expiresIn: "2h",
        //     }
        // );
        // user.token = token;
        // user.save()

        return res
            .status(200)
            .json({
                status: 200,
                data: user,
                message: "user created successfully"
            })
    }
    catch (err: any) {
        console.log(err);
    }
}

export const logInUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        if (!(email && password)) {
            res.status(400).send('All fields are required.');
        }
        const user = await UserModel.findOne({ email });

        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign(
                { user_id: user._id, email, isAdmin: user.isAdmin },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );

            user.token = token;
            return res.status(200).json({ user });
        }
        res.status(400).send("Invalid Credentials");
    }
    catch (err) {
        console.log(err);
    }
}
