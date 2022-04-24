import { Request, Response } from "express";

import AuthenticateAccountUseCase from "./AuthenticateAccountUseCase";

class AuthenticateAccountController {
    constructor(private authenticateUseCase: AuthenticateAccountUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;

        const account = await this.authenticateUseCase.execute(email, password);

        return response
            .status(202)
            .send({ message: "Account is valid!", account });
    }
}

export default AuthenticateAccountController;
