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

  class CheckingAccount {
    private overdraftlimit: number;

    constructor(overdraftlimit: number) {
      this.overdraftlimit = overdraftlimit;
    }

    public getOverdraftlimit(): number {
      return this.overdraftlimit;
    }
  }

  const a = new BankAccount('Luiz', 150000);
  const b = new CheckingAccount(250000);

  console.log(a);
  console.log(typeof a);
  console.log(a instanceof BankAccount);
  console.log(a instanceof CheckingAccount);

  function showDetails(account: BankAccount | CheckingAccount): void {
    if (account instanceof BankAccount) {
      console.log(account.getHolder());
    } else if (account instanceof CheckingAccount) {
      console.log(account.getOverdraftlimit());
    } else {
      console.error('COnta não identificada');
    }
  }

  showDetails(a)
  showDetails(b)
};
