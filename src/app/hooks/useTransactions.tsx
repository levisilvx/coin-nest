import { createContext, useEffect, useState, ReactNode, useContext } from "react";
import { api } from "../services/api";

interface Transaction {
  id: number,
  title: string,
  type: string,
  amount: number,
  category: string,
  createdAt: string,
}

type TransactionInput = Pick<Transaction, 'title' | 'type' | 'amount' | 'category'>
  
interface TransactionsProviderProps {
  children: ReactNode,
}

interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get("transactions")
      .then(response => setTransactions(response.data.transactions))
  }, []);

  const createTransaction = async (transactionInput: TransactionInput) => {
    const response = await api.post('./transactions', {
      ...transactionInput,
      createdAt: new Date(),
    });

    const { transaction } = response.data;
    
    setTransactions([
      transaction,
      ...transactions,
      
    ])
  }

  return(
    <TransactionsContext.Provider value={{ transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions(){
  const context = useContext(TransactionsContext);

  return context;
}