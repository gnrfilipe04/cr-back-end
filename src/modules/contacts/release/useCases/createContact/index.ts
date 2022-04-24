import ContactRepository from "../../repositories/ContactRepository";
import CreateContactController from "./CreateContactController";
import CreateContactUseCase from "./CreateContactUseCase";

const contactRepository = new ContactRepository();

const createContactUseCase = new CreateContactUseCase(contactRepository);
const createContactController = new CreateContactController(
    createContactUseCase
);

export default createContactController;
