import { MagnifyingGlass } from "phosphor-react";

import { Container } from "./styles";

export function Search() {
  return (
    <Container>
      <input type="text" placeholder="Busque uma transação" />
      <button type="button">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </Container>
  );
}
