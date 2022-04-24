import { Request, Response } from "express";

import ListContactsUseCase from "./ListContactsUseCase";

class ListContactsController {
    constructor(private listContactsUseCase: ListContactsUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const listContacts = await this.listContactsUseCase.execute();

        return response.status(200).send(listContacts);
    }
}

export default ListContactsController;
