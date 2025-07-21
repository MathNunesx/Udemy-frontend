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
    class CheckingAccount {
        overdraftlimit;
        constructor(overdraftlimit) {
            this.overdraftlimit = overdraftlimit;
        }
        getOverdraftlimit() {
            return this.overdraftlimit;
        }
    }
    const a = new BankAccount('Luiz', 150000);
    const b = new CheckingAccount(250000);
    console.log(a);
    console.log(typeof a);
    console.log(a instanceof BankAccount);
    console.log(a instanceof CheckingAccount);
    function showDetails(account) {
        if (account instanceof BankAccount) {
            console.log(account.getHolder());
        }
        else if (account instanceof CheckingAccount) {
            console.log(account.getOverdraftlimit());
        }
        else {
            console.error('COnta não identificada');
        }
    }
    showDetails(a);
    showDetails(b);
};
