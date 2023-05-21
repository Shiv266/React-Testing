import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

function Application() {
  const theme = useContext(ThemeContext);
  return (
    <div className="flex justify-center mt-16 py-4 flex-col items-center">
      <h1
        className={`${
          theme?.isLightmode ? "text-gray-800" : "text-white"
        } font-medium text-lg`}
      >
        Application Form
      </h1>
      <h2 className={`${theme?.isLightmode ? "text-gray-800" : "text-white"}`}>
        Section 1
      </h2>
      <p className={`${theme?.isLightmode ? "text-gray-800" : "text-white"}`}>
        All fields are mandatory
      </p>
      <div className="flex">
        <img
          src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
          className="w-24 h-24 mt-4 z-10"
          alt="laptop"
        />
        <span
          className="w-8 h-8 -ml-2 border border-white text-center py-0.5 cursor-pointer bg-slate-700 text-white rounded-full z-50"
          title="close"
        >
          x
        </span>
      </div>
      <div
        className={`${
          theme?.isLightmode ? "text-gray-800" : "text-white"
        } mt-4`}
        data-testid="custom-element"
      >
        Custom HTML element
      </div>
      <form className="mt-8">
        <div className="flex px-8 flex-col space-y-2">
          <label
            htmlFor="name"
            className={`${theme?.isLightmode ? "text-gray-800" : "text-white"}`}
          >
            Name
          </label>
          <input
            id="name"
            value="shivam"
            onChange={() => console.log("")}
            type="text"
            className="border px-4 py-1.5 w-48 rounded-md"
            placeholder="Enter name"
          />
        </div>
        <div className="flex px-8 flex-col mt-4 space-y-2">
          <label
            htmlFor="country"
            className={`${theme?.isLightmode ? "text-gray-800" : "text-white"}`}
          >
            Country
          </label>
          <select
            className="border focus:outline-none px-4 py-1.5 w-48 rounded-md"
            id="country"
          >
            <option value="" label="Select a Country" />
            <option value="US" label="US" />
            <option value="UK" label="UK" />
            <option value="India" label="India" />
          </select>
        </div>
        <div className="mt-12 px-8">
          <button className="bg-blue-300 w-48 py-2 rounded-md">Sumit</button>
        </div>
      </form>
    </div>
  );
}

export default Application;
