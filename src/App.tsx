import "./App.css";
import Application from "./components/application/Application";
import Counter from "./components/counter/Counter";
import Layout from "./components/layout/Layout";
// import LoginForm from "./components/login/LoginForm";
import Skills from "./components/skills/Skills";
import Users from "./components/users/Users";
import { ThemeProvider } from "./context/ThemeProvider";
export const skills = ["HTML", "CSS", "REACT"];

function App() {
  return (
    <>
      {/* <LoginForm /> */}
      <ThemeProvider>
        <Layout>
          <div className="grid sm:grid-cols-4 divide-x-2 mt-8 grid-cols-1">
            <div className="col-span-1">
              <Counter />
            </div>
            <div className="col-span-1">
              <Application />
            </div>
            <div className="col-span-1">
              <Users />
            </div>
            <div className="col-span-1">
              <Skills skills={skills} />
            </div>
          </div>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
