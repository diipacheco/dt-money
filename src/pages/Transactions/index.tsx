import { useContextSelector } from "use-context-selector";

import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";

import { Search } from "./components/Search";

import { Container, TransactionsPrice, TransactionsTable } from "./styles";

export function Transactions() {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => context.transactions
  );
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
                    {transaction.type === "outcome" && "- "}
                    {priceFormatter.format(transaction.price)}
                  </TransactionsPrice>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </Container>
    </>
  );
}
