import { NextApiRequest, NextApiResponse } from "next";
import filterRequest from "../../lib/FilterRequestType";
import RequestType from "../../lib/RequestType";
import withDatabase from "./../../lib/Database";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!filterRequest(req, res, RequestType.POST)) return;
  const db = await withDatabase();
  const email = req.body.email;
  if (!email) {
    res.status(400).json({ message: "Please include a email field." })
    return;
  }
  if (await db.collection("users").findOne({ email })) {
    res.status(409).json({ message: "Already registered email." })
    return;
  }
  db.collection("users").insertOne({ email });
  res.status(200).json({ message: "Successfully registered email." })
}