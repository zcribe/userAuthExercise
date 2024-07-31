import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "./config";
import User from "../models/user";


interface DecodedToken {
  id: string;
}

const authorization = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const token = request.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new Error("token missing");
    }

    const decodedToken = jwt.verify(token, config.SECRET) as DecodedToken;

    const user = await User.findById(decodedToken.id);

    if (!user) {
      throw new Error("user not found");
    }

    next();
  } catch (error) {
    response.status(401).send({ error: "authentication failed" });
  }
};

export default authorization;
