import { v4 as uuidV4 } from "uuid";

import { AppError } from "../../../../../errors/AppError";
import { IContactDTO } from "../../../dtos/IContactDTO";
import CreateContactUseCase from "../../../release/useCases/createContact/CreateContactUseCase";
import ContactRepositoryInMemory from "../../repositories/ContactRepositoryInMemory";

let contactRepositoryInMemory: ContactRepositoryInMemory;
let createContactUseCase: CreateContactUseCase;

describe("Create contact", () => {
    contactRepositoryInMemory = new ContactRepositoryInMemory();
    createContactUseCase = new CreateContactUseCase(contactRepositoryInMemory);
});

it("should be able to create an contact", async () => {
    const contact: IContactDTO = {
        id: uuidV4(),
        adress: "Wadislau Kalata",
        birthDate: "19/02/1995",
        email: "gnr_filipe@hotmail.com",
        fistName: "Filipe",
        phone: "996805839",
        secondName: "Souza",
    };

    const result = await createContactUseCase.execute(contact);
    expect(result).toHaveProperty("id");
});

it("should not be able to create a contact if it already exists", async () => {
    const contactOne: IContactDTO = {
        id: uuidV4(),
        adress: "Wadislau Kalata",
        birthDate: "19/02/1995",
        email: "gnr_filipe@hotmail.com",
        fistName: "Filipe",
        phone: "996805839",
        secondName: "Souza",
    };

    const contactTwo: IContactDTO = {
        id: uuidV4(),
        adress: "Wadislau Kalata",
        birthDate: "19/02/1995",
        email: "gnr_filipe@hotmail.com",
        fistName: "Filipe",
        phone: "996805839",
        secondName: "Souza",
    };

    expect(async () => {
        await createContactUseCase.execute(contactOne);
        await createContactUseCase.execute(contactTwo);
    }).rejects.toBeInstanceOf(AppError);
});
