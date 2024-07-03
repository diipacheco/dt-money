import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/GlobalStyles";

import { TransactionsContextProvider } from "./contexts/TransactionsContext";
import { Transactions } from "./pages/Transactions";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <TransactionsContextProvider>
        <Transactions />
      </TransactionsContextProvider>
    </ThemeProvider>
  );
}
