import Application from "./application/Application";
import Counter from "./counter/Counter";
import Layout from "./layout/Layout";
import Skills from "./skills/Skills";
import Users from "./users/Users";
export const skills = ["HTML", "CSS", "REACT"];

function Main() {
  return (
    <Layout>
      <h1>Hello</h1>
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
  );
}

export default Main;
