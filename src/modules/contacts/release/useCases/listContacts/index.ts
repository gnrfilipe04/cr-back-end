import ContactRepository from "../../repositories/ContactRepository";
import ListContactsController from "./ListContactsController";
import ListContactsUseCase from "./ListContactsUseCase";

const contactRepository = new ContactRepository();
const listContactsUseCase = new ListContactsUseCase(contactRepository);
const listContactsController = new ListContactsController(listContactsUseCase);

export default listContactsController;
