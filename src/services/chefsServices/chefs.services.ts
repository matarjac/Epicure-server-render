import { IChef, ChefModel } from "../../model/chefsModel/chef.model";

export const getChefs = async () => {
    try {
        const chefs: IChef[] = await ChefModel.find();
        console.log(chefs);
        return chefs;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}

export const deleteChefByID = async (id: { id: string }) => {
    try {
        await ChefModel.findByIdAndDelete(id);
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}

