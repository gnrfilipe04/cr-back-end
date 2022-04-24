import { Request, Response } from "express";

import IAccountDTO from "../../../dtos/IAccountDTO";
import CreateAccountUseCase from "./CreateAccountUseCase";

class CreateAccountController {
    constructor(private createAccountUseCase: CreateAccountUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { email, name, password } = request.body as IAccountDTO;

        const dataToDataBase = {
            email,
            name,
            password,
        };

        const getInvalidFields = () => {
            const bodyToEntries = Object.entries(dataToDataBase).filter(
                ([key, value]) => !value && key
            );
            return Object.fromEntries(bodyToEntries);
        };

        const fieldInvalid = getInvalidFields();

        if (Object.keys(fieldInvalid).length) {
            const primaryFieldError = Object.keys(fieldInvalid)[0];
            return response.status(400).send({
                message: `Field invalid: ${primaryFieldError}`,
            });
        }

        const account = await this.createAccountUseCase.execute(dataToDataBase);

        return response
            .status(201)
            .send({ message: "Account has been created", account });
    }
}

export default CreateAccountController;
