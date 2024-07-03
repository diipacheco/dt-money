import * as z from "zod";
import { useForm } from "react-hook-form";
import { MagnifyingGlass } from "phosphor-react";
import { zodResolver } from "@hookform/resolvers/zod";

import { useTransactions } from "../../../../contexts/TransactionsContext";

import { Container } from "./styles";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;
export function Search() {
  const { fetchTransactions } = useTransactions();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query);
  }

  return (
    <Container onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque uma transação"
        {...register("query")}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </Container>
  );
}
