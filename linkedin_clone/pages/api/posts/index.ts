import { Timestamp } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../util/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  const { db } = await connectToDatabase();

  if (method === "GET") {
    try {
      const posts = await db
        .collection("posts")
        .find()
        .sort({ timeStamp: -1 })
        .toArray();

      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === "POST") {
    try {
      const post = await db
        .collection("posts")
        // @ts-ignore
        .insertOne({ ...body, timeStamp: new Timestamp() });

      res.status(201).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
