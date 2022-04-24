import { IContactDTO } from "../dtos/IContactDTO";

interface IContactRepository {
    create(data: IContactDTO): Promise<IContactDTO>;
    findByEmail(email: string): Promise<IContactDTO>;
    listContacts(): Promise<IContactDTO[]>;
}

export { IContactRepository };
