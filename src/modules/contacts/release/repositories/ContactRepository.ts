import Contact from "../../../../database/models/ContactModel";
import { IContactDTO } from "../../dtos/IContactDTO";
import { IContactRepository } from "../../interfaces/IContactRepository";

class ContactRepository implements IContactRepository {
    async create(data: IContactDTO): Promise<IContactDTO> {
        const contact = new Contact(data);
        await contact.save();

        return data;
        // IMPLEMENTS CELEBRATE
    }

    async findByEmail(email: string): Promise<IContactDTO> {
        const contactFinded = await Contact.findOne({ email }).exec();

        return contactFinded;
    }

    async listContacts(): Promise<IContactDTO[]> {
        const allContacts = await Contact.find();
        return allContacts;
    }
}

export default ContactRepository;
