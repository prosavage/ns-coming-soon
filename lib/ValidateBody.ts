import { body } from "express-validator";
import { NextApiRequest, NextApiResponse } from "next";

const validateBody = (req: NextApiRequest, res: NextApiResponse, ...fields: string[]) => {
    for (let field of fields) {
        if (!req.body[field]) {
            res.status(400).json({ message: `Please include a ${field} field.` })
            return false;
        }
    }
    return true;
}

export default validateBody;