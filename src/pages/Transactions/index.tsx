import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { Search } from "./components/Search";

import { Container, TransactionsPrice, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <>
      <Header />
      <Summary />

      <Container>
        <Search />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <TransactionsPrice variant="income">
                  R$ 12.000,00
                </TransactionsPrice>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>

            <tr>
              <td width="50%">Hambúrguer</td>
              <td>
                <TransactionsPrice variant="outcome">
                  - R$ 59,00
                </TransactionsPrice>
              </td>
              <td>Alimentação</td>
              <td>13/04/2022</td>
            </tr>

            <tr>
              <td width="50%">Aluguel do apartamento</td>
              <td>
                <TransactionsPrice variant="outcome">
                  - R$ 1.200,00
                </TransactionsPrice>
              </td>
              <td>Casa</td>
              <td>13/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </Container>
    </>
  );
}
