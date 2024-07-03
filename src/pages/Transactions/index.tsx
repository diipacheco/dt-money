import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { useTransactions } from "../../contexts/TransactionsContext";

import { Search } from "./components/Search";

import { Container, TransactionsPrice, TransactionsTable } from "./styles";

export function Transactions() {
  const { transactions } = useTransactions();
  return (
    <>
      <Header />
      <Summary />

      <Container>
        <Search />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <TransactionsPrice variant={transaction.type}>
                    {transaction.price}
                  </TransactionsPrice>
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </Container>
    </>
  );
}
