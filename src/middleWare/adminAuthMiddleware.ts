import { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken');

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "No authorization header provided." });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: "No JWT token provided." });
    }
    try {
        const decodedToken = jwt.verify(token, process.env.TOKEN_KEY) as { _id: string, isAdmin: boolean }
        if (!decodedToken.isAdmin) {
            return res.status(401).json({ message: "You are not authorised to perform this action." });
        }
        next();
    }
    catch (error) {
        return res.status(401).json({ message: 'Invalid JWT token.' });
    }
}

export default isAdmin;