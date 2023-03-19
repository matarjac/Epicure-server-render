import mongoose from 'mongoose';
import { Schema } from 'mongoose';

export interface IRestaurant {
    img: string,
    name: string,
    chef?: string,
    rating: number,
    id?: number,
    chefID?: number,
    isPopular?: boolean,
    New?: boolean,
    dishes?: number[],
    openHour: number,
    closeHour: number
}

export const restaurantSchema = new Schema<IRestaurant>({
    img: { type: String, require: true },
    name: { type: String, require: true },
    chef: { type: String, require: false },
    rating: { type: Number, require: true },
    id: { type: Number, require: false },
    chefID: { type: Number, require: false },
    isPopular: { type: Boolean, require: false },
    New: { type: Boolean, require: false },
    dishes: { type: [Number], require: false },
    openHour: { type: Number, require: true },
    closeHour: { type: Number, require: true }
})

export const RestaurantModel = mongoose.model<IRestaurant>("restaurants", restaurantSchema)