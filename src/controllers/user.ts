import { Router, type Request, type Response } from "express";

const userRouter = Router();

userRouter.get("/", async (request: Request, response: Response) => {
  response.send("Hello World!");
});

export default userRouter;
