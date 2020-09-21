import { NextApiRequest, NextApiResponse } from "next";
import RequestType from "./RequestType";

const filterRequest = (req: NextApiRequest, res: NextApiResponse, type: RequestType) => {
    if (req.method !== type.toString()) {
        res.status(405).send({message: `Wrong request method, use ${type}`});
        return false;
    }
    return true;
}

export default filterRequest;