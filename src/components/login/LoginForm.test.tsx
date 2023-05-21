import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import LoginForm from "./LoginForm";

const formData = {
  email: "vikas@test.com",
  password: "12345",
};

// const handleSubmit = jest.fn();

describe("Login", () => {
  test("renders correctly", () => {
    render(<LoginForm />);
    const loginHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(loginHeading).toBeInTheDocument();

    const emailInputElement = screen.getByLabelText(/email/i);
    expect(emailInputElement).toBeInTheDocument();

    const passwordInputElement = screen.getByLabelText(/password/i);
    expect(passwordInputElement).toBeInTheDocument();

    const loginButton = screen.getByRole("button", {
      name: "Login",
    });

    expect(loginButton).toBeInTheDocument();
  });
  test("submitting the form onSubmit with email and password", async () => {
    render(<LoginForm />);

    const emailInputElement = screen.getByLabelText(/email/i);
    await user.type(emailInputElement, formData.email);
    expect(emailInputElement).toHaveValue(formData.email);

    const passwordInputElement = screen.getByLabelText(/password/i);
    await user.type(passwordInputElement, formData.password);
    expect(passwordInputElement).toHaveValue(formData.password);

    const loginButton = screen.getByRole("button", {
      name: "Login",
    });

    await user.click(loginButton);
  });
});
