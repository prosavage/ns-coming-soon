import { NextApiRequest, NextApiResponse } from "next";
import filterRequest from "../../lib/FilterRequestType";
import RequestType from "../../lib/RequestType";
import withDatabase from "./../../lib/Database";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!filterRequest(req, res, RequestType.POST)) return;
  const db = await withDatabase();
  if (!req.body.email)  
  const email = req.body.email;
  res.status(200).json({ data: db.collection("users").find({}).toArray() })
}