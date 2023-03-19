import { Request, Response } from "express";
import { getRestaurants } from "../../services/restaurantsServices/restaurants.services";

export const getAllRestaurants = async (req: Request, res: Response) => {
    try {
        const restaurants = await getRestaurants();
        console.log(restaurants);
        return res
            .status(200)
            .json(restaurants)
    }
    catch (err: any) {
        console.log(err);
        throw err;
    }

}

export default getAllRestaurants;