import { Request, Response } from "express";
import { getDishes } from "../../services/dishesServices/dishes.services";

export const getAllDishes = async (req: Request, res: Response) => {
    try {
        const dishes = await getDishes();
        console.log(dishes);
        return res
            .status(200)
            // .header("Access-Control-Allow-Origin", "https://matar-epicure.onrender.com/")
            .json(dishes)
    }
    catch (err: any) {
        console.log(err);
        throw err;
    }

}

export default getAllDishes;