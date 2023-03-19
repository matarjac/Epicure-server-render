import mongoose from 'mongoose';
import { Schema } from 'mongoose';

export interface IChef {
    name: string,
    id: number,
    isChefOfTheWeek: boolean,
    img: string,
    isNew: boolean,
    mostViewed: boolean
}

export const chefSchema = new Schema<IChef>({
    name: {type: String, required: true},
    id: {type: Number, required: true},
    isChefOfTheWeek: {type:Boolean, required: true},
    img: {type: String, required:true},
    isNew: {type: Boolean, required: true},
    mostViewed: {type: Boolean, required: true}
})

export const ChefModel = mongoose.model<IChef>("chefs", chefSchema)