/* eslint-disable react-refresh/only-export-components */
import { useContext, createContext, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: string;
}

interface NewTransactionData {
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
}

interface TransactionsContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createNewTransaction: (newTransactionData: NewTransactionData) => void;
}

export const TransactionsContext = createContext({} as TransactionsContextType);

interface TransactionsContextProviderProps {
  children: React.ReactNode;
}
export function TransactionsContextProvider({
  children,
}: TransactionsContextProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    const data = await useFetch({ method: "GET" });

    if (query && query.length >= 1) {
      const queryTransactions = data.filter((transactions: Transaction) =>
        transactions.description
          .toLocaleLowerCase()
          .includes(query.toLocaleLowerCase())
      );
      setTransactions(queryTransactions);
    } else {
      setTransactions(data);
    }
  }

  async function createNewTransaction(newTransactionData: NewTransactionData) {
    const { category, description, price, type } = newTransactionData;

    const data = await useFetch({
      method: "POST",
      data: {
        description,
        type,
        category,
        price,
        createdAt: new Date().toISOString(),
      },
    });

    setTransactions((state) => [data, ...state]);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createNewTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);
  return context;
}
