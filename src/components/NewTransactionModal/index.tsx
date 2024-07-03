import * as Dialog from "@radix-ui/react-dialog";
import { X, ArrowCircleUp, ArrowCircleDown } from "phosphor-react";

import {
  Close,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from "./styles";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>
        <Close>
          <X size={24} />
        </Close>

        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="text" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <TransactionType>
            <TransactionTypeButton
              value="income"
              type="button"
              variant="income"
            >
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>

            <TransactionTypeButton
              value="outcome"
              type="button"
              variant="outcome"
            >
              <ArrowCircleDown size={24} />
              Saída
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
