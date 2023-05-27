import { RouterProvider } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./context/ThemeProvider";
import { appRoutes } from "./routes/router";

function App() {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={appRoutes} />
      </ThemeProvider>
    </>
  );
}

export default App;
