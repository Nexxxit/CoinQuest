import {makeAutoObservable} from 'mobx'


interface ITransaction {
    id: string;
    amount: number;
    description: string;
    category: string;
    date: Date;
    type: 'income' | 'expense';
}

class TransactionStore {

    transactionList: ITransaction[] = []

    constructor() {
        makeAutoObservable(this)
    }

    addTransaction(transaction: ITransaction) {
        this.transactionList = [...this.transactionList, transaction];
    }
}

export default new TransactionStore();