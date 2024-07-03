/* eslint-disable react-refresh/only-export-components */
import { useContext, createContext, useEffect, useState } from "react";

export interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: string;
}

interface TransactionsContextType {
  transactions: Transaction[];
}

export const TransactionsContext = createContext({} as TransactionsContextType);

interface TransactionsContextProviderProps {
  children: React.ReactNode;
}
export function TransactionsContextProvider({
  children,
}: TransactionsContextProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function loadTransactions() {
    const response = await fetch("http://localhost:3333/transactions");
    const data = await response.json();
    setTransactions(data);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
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
