import { v4 as uuidV4 } from "uuid";

import { IContactDTO } from "../../../dtos/IContactDTO";
import CreateContactUseCase from "../../../release/useCases/createContact/CreateContactUseCase";
import ListContactsUseCase from "../../../release/useCases/listContacts/ListContactsUseCase";
import ContactRepositoryInMemory from "../../repositories/ContactRepositoryInMemory";

let contactRepositoryInMemory: ContactRepositoryInMemory;
let createContactUseCase: CreateContactUseCase;
let listContactsUseCase: ListContactsUseCase;

describe("Create contact", () => {
    contactRepositoryInMemory = new ContactRepositoryInMemory();
    createContactUseCase = new CreateContactUseCase(contactRepositoryInMemory);
    listContactsUseCase = new ListContactsUseCase(contactRepositoryInMemory);
});

it("should be able to list all contacts", async () => {
    const contactOne: IContactDTO = {
        id: "1",
        adress: "Wadislau Kalata",
        birthDate: "19/02/1995",
        email: "primaryContact@hotmail.com",
        fistName: "Filipe",
        phone: "996805839",
        secondName: "Souza",
    };

    await createContactUseCase.execute(contactOne);

    const result = await listContactsUseCase.execute();
    expect(result).toEqual(expect.arrayContaining([contactOne]));
});
