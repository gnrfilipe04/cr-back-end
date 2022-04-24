import { Router } from "express";

import createContactController from "../modules/contacts/release/useCases/createContact";
import listContactController from "../modules/contacts/release/useCases/listContacts";

const contactsRoutes = Router();

contactsRoutes.post("/", (request, response) => {
    return createContactController.handle(request, response);
});

contactsRoutes.get("/", (request, response) => {
    return listContactController.handle(request, response);
});

export default contactsRoutes;
