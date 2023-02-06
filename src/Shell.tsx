import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { App } from "./App";

const ThemeModeContext = React.createContext({ toggleColorMode: () => {} });

type ThemeModeType = "light" | "dark";

export function Shell() {
  const [themeMode, setThemeMode] = React.useState<ThemeModeType>("dark");

  const colorModeMemo = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const themeMemo = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
        },
      }),
    [themeMode]
  );

  return (
    <ThemeModeContext.Provider value={colorModeMemo}>
      <ThemeProvider theme={themeMemo}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
