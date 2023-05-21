import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

function Counter() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  const theme = useContext(ThemeContext);
  return (
    <div className="flex justify-center flex-col  items-center mt-4">
      <h1 className={`${theme?.isLightmode ? "text-gray-800" : "text-white"}`}>
        {count}
      </h1>
      <button
        className="bg-blue-300 mt-4 w-28 py-1 rounded-md"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increment
      </button>
      <input
        type="number"
        className="border px-4 mt-6 py-1.5 w-48 rounded-md"
        name="amount"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <button
        className="bg-blue-300 mt-6 w-28 py-1 rounded-md"
        onClick={() => setCount(amount)}
      >
        Set
      </button>
    </div>
  );
}

export default Counter;
