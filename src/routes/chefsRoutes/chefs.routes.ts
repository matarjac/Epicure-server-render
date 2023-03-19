import express from "express";
import { isAdmin } from "../../middleWare/adminAuthMiddleware";
import { getAllChefs, deleteChef } from "../../controllers/chefsControllers/chefs.controllers";

const router = express.Router();
router.get("/", getAllChefs);
router.delete("/delete", isAdmin, deleteChef);

export default router;