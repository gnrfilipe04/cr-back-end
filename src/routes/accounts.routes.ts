import { Router } from "express";

import authenticateAccountController from "../modules/accounts/release/useCases/authenticateAccount";
import createAccountController from "../modules/accounts/release/useCases/createAccount";

const accountsRoutes = Router();

accountsRoutes.post("/", (request, response) => {
    return createAccountController.handle(request, response);
});

accountsRoutes.post("/authenticate", (request, response) => {
    return authenticateAccountController.handle(request, response);
});

export default accountsRoutes;
