import { NextApiRequest, NextApiResponse } from "next";
import filterRequest from "../../lib/FilterRequestType";
import RequestType from "../../lib/RequestType";
import validateBody from "../../lib/ValidateBody";
import withDatabase from "./../../lib/Database";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (!filterRequest(req, res, RequestType.POST)) return;
    const db = await withDatabase();
    if (!validateBody(req, res, "name", "email", "message")) return;
    db.collection("contact").insertOne({ ...req.body });
    res.status(200).json({ message: "Successfully sent message." })
}