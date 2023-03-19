import { Request, Response } from "express";
import { getChefs, deleteChefByID } from "../../services/chefsServices/chefs.services";

export const getAllChefs = async (req: Request, res: Response) => {
    try {
        const chefs = await getChefs();
        console.log(chefs);
        return res
            .status(200)
            .json(chefs)
    }
    catch (err: any) {
        console.log(err);
        throw err;
    }

}

export const deleteChef = async (req: Request, res: Response) => {
    try {
        const chefID = req.body;
        await deleteChefByID(chefID.id);
        return res
            .status(200)
            .json({
                status: 200,
                id: chefID,
                message: "chef deleted successfully"
            })
    }
    catch (err) {
        console.log(err);
        return res.status(400);
    }
}

export default getAllChefs;