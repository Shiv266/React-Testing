import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    navigate("/");
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-24 lg:px-8">
      <div className="max-w-3xl mx-auto py-8 border">
        <h1 className="text-center font-medium text-lg">
          Login to your account
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center mt-8 pb-8 space-y-6 flex-col items-center"
        >
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="border px-4 py-1.5 rounded-md focus:outline-none"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="border px-4 py-1.5 rounded-md focus:outline-none"
            />
          </div>
          <div className="">
            <button className="bg-blue-300 px-32 mt-4 w-full py-2 rounded-md">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
