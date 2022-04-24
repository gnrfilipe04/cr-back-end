import Account from "../../../../database/models/AccountModel";
import IAccountDTO from "../../dtos/IAccountDTO";
import IAccountRepository from "../../interfaces/IAccountRepository";

class AccountRepository implements IAccountRepository {
    async create(data: IAccountDTO): Promise<IAccountDTO> {
        const account = new Account(data);
        await account.save();

        return account;
    }

    async findByEmail(email: string): Promise<IAccountDTO> {
        const accountFinded = await Account.findOne({ email }).exec();

        return accountFinded;
    }
}

export default AccountRepository;
