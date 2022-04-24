import { Request, Response } from "express";

import { IContactDTO } from "../../../dtos/IContactDTO";
import CreateContactUseCase from "./CreateContactUseCase";

class CreateContactController {
    constructor(private createContactUseCase: CreateContactUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { adress, birthDate, fistName, email, phone, secondName } =
            request.body as IContactDTO;

        const dataToDataBase = {
            adress,
            birthDate,
            fistName,
            email,
            phone,
            secondName,
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

        const contact = await this.createContactUseCase.execute(dataToDataBase);

        return response
            .status(201)
            .send({ message: "Contact has been created", contact });
    }
}

export default CreateContactController;
