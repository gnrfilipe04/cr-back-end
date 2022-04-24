import IAccountDTO from "../dtos/IAccountDTO";

interface IAccountRepository {
    create(account: IAccountDTO): Promise<IAccountDTO>;
    findByEmail(email: string): Promise<IAccountDTO>;
}

export default IAccountRepository;
