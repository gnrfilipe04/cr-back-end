import { compare } from "bcryptjs";

import { AppError } from "../../../../../errors/AppError";
import IAccountDTO from "../../../dtos/IAccountDTO";
import IAccountRepository from "../../../interfaces/IAccountRepository";

class AuthenticateAccountUseCase {
    constructor(private accountsRepository: IAccountRepository) {}

    async execute(email: string, password: string): Promise<IAccountDTO> {
        const account = await this.accountsRepository.findByEmail(email);

        if (!account) {
            throw new AppError("Email or password invalid!");
        }

        const passwordWatch = await compare(password, account.password);

        if (!passwordWatch) {
            throw new AppError("Email or password invalid!");
        }

        return account;
    }
}

export default AuthenticateAccountUseCase;
