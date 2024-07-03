import Logo from "../../assets/logo.svg";

import { Container, Content, NewTransactionButton } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <aside>
          <img src={Logo} alt="" />
        </aside>

        <aside>
          <NewTransactionButton type="button">
            Nova transação
          </NewTransactionButton>
        </aside>
      </Content>
    </Container>
  );
}
