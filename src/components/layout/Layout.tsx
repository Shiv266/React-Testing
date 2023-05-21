import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

function Layout({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1000);
  }, []);
  return (
    <div>
      <header className="bg-gray-600 py-5 border-b-2 shadow-lg">
        <div className="flex justify-end px-4">
          <button
            onClick={theme?.changeMode}
            className="bg-yellow-500 px-4 py-1 rounded-md cursor-pointer"
          >
            {theme?.isLightmode ? "Dark Mode" : "Light Mode"}
          </button>
          {isLoggedIn ? (
            <button className="bg-yellow-500 px-4 py-1 ml-6 rounded-md cursor-pointer">
              Start Training
            </button>
          ) : (
            <button
              onClick={() => setIsLoggedIn(true)}
              className="bg-yellow-500 px-4 ml-6 py-1 rounded-md cursor-pointer"
            >
              Login
            </button>
          )}
        </div>
      </header>
      <main className={`${theme?.isLightmode ? "bg-white" : "bg-gray-600"} -mt-8`}>
        {children}
      </main>
    </div>
  );
}

export default Layout;
