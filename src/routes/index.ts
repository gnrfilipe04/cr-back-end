import { Router } from "express";

import accountsRoutes from "./accounts.routes";
import contactsRoutes from "./contacts.routes";

const router = Router();

router.use("/contacts", contactsRoutes);
router.use("/accounts", accountsRoutes);

export default router;
