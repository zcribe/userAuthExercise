import { Router, Request, Response } from "express";
import bcrypt from "bcrypt";

import User from "../models/user";

const loginRouter = Router();

loginRouter.post('/', async (request: Request, response: Response ) => {
    const {username, password} = request.body;

    const user = await User.findOne({username})

    const passwordCorrect = user === null ? false: await bcrypt.compare(password, user.passwordHash)

    if (!(user && passwordCorrect)){
        return response.status(401).json({
            error: 'invalid username or password'
        })
    }

    response.status(200).send({username: user.username})
})

export default loginRouter;