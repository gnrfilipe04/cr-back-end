import IAccountDTO from "../../dtos/IAccountDTO";
import IAccountRepository from "../../interfaces/IAccountRepository";

class AccountRepositoryInMemory implements IAccountRepository {
    accounts: IAccountDTO[] = [];

    async create(account: IAccountDTO): Promise<IAccountDTO> {
        this.accounts.push(account);
        return account;
    }

    async findByEmail(email: string): Promise<IAccountDTO> {
        const accountFinded = this.accounts.find(
            (account) => account.email === email
        );
        return accountFinded;
    }
}

export default AccountRepositoryInMemory;
