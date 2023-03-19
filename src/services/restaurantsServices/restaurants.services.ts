import { IRestaurant, RestaurantModel } from "../../model/restaurantsModel/restaurant.model";

export const getRestaurants = async () => {
    try {
        const restaurants: IRestaurant[] = await RestaurantModel.find();
        console.log(restaurants);
        return restaurants;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}

