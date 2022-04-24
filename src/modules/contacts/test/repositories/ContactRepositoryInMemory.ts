import { IContactDTO } from "../../dtos/IContactDTO";
import { IContactRepository } from "../../interfaces/IContactRepository";

class ContactRepositoryInMemory implements IContactRepository {
    contacts: IContactDTO[] = [];

    async create(data: IContactDTO): Promise<IContactDTO> {
        this.contacts.push(data);

        return data;
        // IMPLEMENTS CELEBRATE
    }

    async findByEmail(email: string): Promise<IContactDTO> {
        const contactFinded = this.contacts.find(
            (contact) => contact.email === email
        );

        return contactFinded;
    }

    async listContacts(): Promise<IContactDTO[]> {
        return this.contacts;
    }
}

export default ContactRepositoryInMemory;
