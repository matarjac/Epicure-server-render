import express from "express";
import { getAllRestaurants } from "../../controllers/restaurantsControllers/restaurants.controllers";

const router = express.Router();
router.get("/", getAllRestaurants);


export default router;