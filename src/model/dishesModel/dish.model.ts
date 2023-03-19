import mongoose from 'mongoose';
import { Schema } from 'mongoose';

export interface IDish {
    name: string,
    restaurantID: number,
    id: number,
    ingredients: string,
    foodType: string[],
    img: string,
    price: number,
    isPopular: boolean,
    category: string
}

export const dishSchema = new Schema<IDish>({
    name: { type: String, require: true },
    restaurantID: { type: Number, require: true },
    id: { type: Number, require: true },
    ingredients: { type: String, require: true },
    foodType: { type: [String], require: true },
    img: { type: String, require: true },
    price: { type: Number, require: true },
    isPopular: { type: Boolean, require: true },
    category: { type: String, require: true }
})

export const DishModel = mongoose.model<IDish>("dishes", dishSchema)