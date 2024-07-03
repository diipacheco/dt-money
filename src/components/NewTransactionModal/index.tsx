import * as Dialog from "@radix-ui/react-dialog";
import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { X, ArrowCircleUp, ArrowCircleDown } from "phosphor-react";

import {
  Close,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from "./styles";

const transactionFormSchema = z.object({
  description: z.string().min(1, "Informe a descrição da transação"),
  price: z.number().min(1, "Informe o preço da transação"),
  category: z.string().min(1, "Informe a categoria da transação"),
  type: z.enum(["income", "outcome"]),
});

type TransactionFormInputs = z.infer<typeof transactionFormSchema>;
export function NewTransactionModal() {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<TransactionFormInputs>({
    resolver: zodResolver(transactionFormSchema),
  });

  async function handleCreateNewTransaction(data: TransactionFormInputs) {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("creating a new transaction", data);
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>
        <Close>
          <X size={24} />
        </Close>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            {...register("description")}
            type="text"
            placeholder="Descrição"
            required
          />
          <input
            {...register("price", { valueAsNumber: true })}
            type="number"
            placeholder="Preço"
            required
          />
          <input
            {...register("category")}
            type="text"
            placeholder="Categoria"
            required
          />

          <Controller
            control={control}
            name="type"
            render={({ field: { onChange, value } }) => (
              <TransactionType onValueChange={onChange} value={value}>
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
            )}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
