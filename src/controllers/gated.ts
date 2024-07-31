import { Router, Request, Response } from "express";
import authorization from "../utils/middleware"; 

const gatedRouter = Router();

gatedRouter.get('/', authorization, async (request:Request, response: Response) => {
    response.send('<h1>In Gated area</h1>')
})

export default gatedRouter;