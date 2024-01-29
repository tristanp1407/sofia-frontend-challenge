import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";

import { theme } from "@styles/theme";
import { GlobalStyle } from "@styles/global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
