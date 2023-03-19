import express from "express";
import { getAllDishes } from "../../controllers/dishesControllers/dishes.controllers";

const router = express.Router();
router.get("/", getAllDishes);

export default router;