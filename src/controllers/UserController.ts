import { Response, Request } from "express";

class UserController {
    async index(req: Request, res: Response): Promise<Response>{
        return res.send("Bolos top")
    }
}

export const userController = new UserController;