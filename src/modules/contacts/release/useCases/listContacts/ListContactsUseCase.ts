import { IContactDTO } from "../../../dtos/IContactDTO";
import ContactRepository from "../../repositories/ContactRepository";

class ListContactsUseCase {
    constructor(private contactsRepository: ContactRepository) {}

    async execute(): Promise<IContactDTO[]> {
        const listContacts = await this.contactsRepository.listContacts();
        return listContacts;
    }
}

export default ListContactsUseCase;
