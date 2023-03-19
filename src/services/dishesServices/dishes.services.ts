import { IDish, DishModel } from "../../model/dishesModel/dish.model";

export const getDishes = async () => {
    try {
        const dishes: IDish[] = await DishModel.find();
        console.log(dishes);
        return dishes;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}

