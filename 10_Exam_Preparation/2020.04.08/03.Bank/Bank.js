class Bank {
    #bankName;

    constructor(bankName) {
        this.#bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        let customerObj = this.allCustomers.find(c => c.personalId == customer.personalId);

        if (customerObj) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }
        let objToAdd = {...customer};
        objToAdd.totalMoney = 0;
        objToAdd.transactions = []
        this.allCustomers.push(objToAdd);
        return customer;
    }

    depositMoney(personalId, amount) {
        let customerObj = this.allCustomers.find(c => c.personalId == personalId);

        if (customerObj == undefined) {
            throw new Error('We have no customer with this ID!');
        }

        customerObj.totalMoney += amount;
        customerObj.transactions.push(`${customerObj.firstName} ${customerObj.lastName} made deposit of ${amount}$!`);

        return `${customerObj.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        let customerObj = this.allCustomers.find(c => c.personalId == personalId);

        if (customerObj == undefined) {
            throw new Error('We have no customer with this ID!');
        }

        if (customerObj.totalMoney < amount) {
            throw new Error(`${customerObj.firstName} ${customerObj.lastName} does not have enough money to withdraw that amount!`);
        }

        customerObj.totalMoney -= amount;
        customerObj.transactions.push(`${customerObj.firstName} ${customerObj.lastName} withdrew ${amount}$!`);

        return `${customerObj.totalMoney}$`;
    }

    customerInfo(personalId) {
        let customerObj = this.allCustomers.find(c => c.personalId == personalId);

        if (customerObj == undefined) {
            throw new Error('We have no customer with this ID!');
        }

        let result = [];
        result.push(`Bank name: ${this.#bankName}`);
        result.push(`Customer name: ${customerObj.firstName} ${customerObj.lastName}`);
        result.push(`Customer ID: ${customerObj.personalId}`);
        result.push(`Total Money: ${customerObj.totalMoney}$`);
        result.push(`Transactions:`);
        for (let i = customerObj.transactions.length - 1; i >= 0; i--) {
            result.push(`${i+1}. `+ customerObj.transactions[i]);
        }
        return result.join('\n');
    }
}


let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
