import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

function Users() {
  const [users, setUsers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.map(({ name }: { name: string }) => name)))
      .catch(() => setError("Error in fetching user data"));
  }, []);
  return (
    <div className="flex mt-4 flex-col justify-center items-center">
      <h1
        className={`font-medium ${
          theme?.isLightmode ? "text-gray-800" : "text-white"
        }`}
      >
        Users
      </h1>
      {error && <p>{error}</p>}
      <ul className="mt-8">
        {users.map((user) => (
          <li
            className={`list-disc py-2 text-sm ${
              theme?.isLightmode ? "text-gray-800" : "text-white"
            }`}
            key={user}
          >
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
