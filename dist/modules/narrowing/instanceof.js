export const bootstrap = () => {
    class BankAccount {
        holder;
        balance;
        constructor(holder, balance) {
            this.holder = holder;
            this.balance = balance;
        }
        getHolder() {
            return this.holder;
        }
    }
    class CheckingAccount extends BankAccount {
        overdraftlimit;
        constructor(holder, balance, overdraftlimit) {
            super(holder, balance);
            this.overdraftlimit = overdraftlimit;
        }
        getOverdraftlimit() {
            return this.overdraftlimit;
        }
    }
    class SavingsAccount extends BankAccount {
        interestRate;
        constructor(holder, balance, interestRate) {
            super(holder, balance);
            this.interestRate = interestRate;
        }
        getInterestRate() {
            return this.interestRate;
        }
    }
    // Lista de contas
    const accountList = [
        new CheckingAccount('Nunes', 1520, 900),
        new SavingsAccount('Livia', 4000, 0.007),
        new CheckingAccount('Lucas', 2000, 800),
        new SavingsAccount('Rivaldo', 1700, 0.005),
    ];
    function processAccounts(accounts) {
        accounts.forEach((account) => {
            if (account instanceof CheckingAccount) {
                console.log('Processando a conta corrente: ', account.getOverdraftlimit());
            }
            else if (account instanceof SavingsAccount) {
                console.log('Processando a conta poupança: ', account.getInterestRate());
            }
        });
    }
    processAccounts(accountList);
};
