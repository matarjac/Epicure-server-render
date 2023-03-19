import express from 'express';
import { addNewUser, logInUser } from "../../controllers/usersControllers/users.controllers"

const router = express.Router();
router.post("/", addNewUser);
router.post("/login", logInUser);

export default router;