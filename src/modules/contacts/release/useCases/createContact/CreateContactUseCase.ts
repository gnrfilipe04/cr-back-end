import { v4 as uuidV4 } from "uuid";

import { AppError } from "../../../../../errors/AppError";
import { IContactDTO } from "../../../dtos/IContactDTO";
import { IContactRepository } from "../../../interfaces/IContactRepository";

class CreateContactUseCase {
    constructor(private contactsRepository: IContactRepository) {}

    async execute(data: IContactDTO): Promise<IContactDTO> {
        const contactAlreadyExists = await this.contactsRepository.findByEmail(
            data.email
        );

        if (contactAlreadyExists) {
            throw new AppError("Contact already exists");
        }

        const contact = await this.contactsRepository.create({
            ...data,
            id: data.id || uuidV4(),
        });
        return contact;
    }
}

export default CreateContactUseCase;
