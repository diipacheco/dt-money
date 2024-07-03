import * as Dialog from "@radix-ui/react-dialog";

import Logo from "../../assets/logo.svg";
import { NewTransactionModal } from "../NewTransactionModal";

import { Container, Content, NewTransactionButton } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <aside>
          <img src={Logo} alt="" />
        </aside>

        <Dialog.Root>
          <aside>
            <Dialog.Trigger asChild>
              <NewTransactionButton type="button">
                Nova transação
              </NewTransactionButton>
            </Dialog.Trigger>

            <NewTransactionModal />
          </aside>
        </Dialog.Root>
      </Content>
    </Container>
  );
}
