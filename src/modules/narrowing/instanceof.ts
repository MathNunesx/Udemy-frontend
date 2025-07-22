export const bootstrap = (): void => {
  class BankAccount {
    protected holder: string;
    protected balance: number;

    constructor(holder: string, balance: number) {
      this.holder = holder;
      this.balance = balance;
    }

    public getHolder(): string {
      return this.holder;
    }
  }

  class CheckingAccount extends BankAccount {
    private overdraftlimit: number;

    constructor(holder: string, balance: number, overdraftlimit: number) {
      super(holder, balance);
      this.overdraftlimit = overdraftlimit;
    }

    public getOverdraftlimit(): number {
      return this.overdraftlimit;
    }
  }

  class SavingsAccount extends BankAccount {
    private interestRate: number;

    constructor(holder: string, balance: number, interestRate: number) {
      super(holder, balance);
      this.interestRate = interestRate;
    }

    public getInterestRate(): number {
      return this.interestRate;
    }
  }

  // Lista de contas

  const accountList: BankAccount[] = [
    new CheckingAccount('Nunes', 1520, 900),
    new SavingsAccount('Livia', 4000, 0.007),
    new CheckingAccount('Lucas', 2000, 800),
    new SavingsAccount('Rivaldo', 1700, 0.005),
  ];

  function processAccounts(accounts: BankAccount[]): void {
    accounts.forEach((account) => {
      if (account instanceof CheckingAccount) {
        console.log(
          'Processando a conta corrente: ',
          account.getOverdraftlimit(),
        );
      } else if (account instanceof SavingsAccount) {
        console.log(
          'Processando a conta poupança: ',
          account.getInterestRate(),
        );
      }
    });
  }

  processAccounts(accountList);
};
