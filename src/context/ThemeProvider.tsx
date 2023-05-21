import { createContext, useCallback, useMemo, useState } from "react";

interface ThemeCntxt {
  isLightmode: boolean;
  changeMode: () => void;
}

export const ThemeContext = createContext<ThemeCntxt | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isLightmode, setIsLightmode] = useState(true);
  const changeMode = useCallback(
    () => setIsLightmode(!isLightmode),
    [isLightmode]
  );
  const contextValue = useMemo(() => {
    return {
      isLightmode,
      changeMode,
    };
  }, [isLightmode, changeMode]);
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
