import { render, screen, user, expect, vi } from "../../tests/test-utils";
import LoginForm from "./LoginForm";

const formData = {
  email: "vikas@test.com",
  password: "12345",
};

const handleSubmit = vi.fn();

describe("Login", () => {
  test("renders correctly", () => {
    render(<LoginForm />);
    const loginHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(loginHeading).toBeInTheDocument();

    const emailInputElement = getEmailElement();
    expect(emailInputElement).toBeInTheDocument();

    const passwordInputElement = getPasswordElement();
    expect(passwordInputElement).toBeInTheDocument();

    const loginButton = getSubmitButton();

    expect(loginButton).toBeInTheDocument();
  });
  test("submitting the form onSubmit with email and password", async () => {
    render(<LoginForm />);

    const emailInputElement = getEmailElement();
    await user.type(emailInputElement, formData.email);
    expect(emailInputElement).toHaveValue(formData.email);

    const passwordInputElement = getPasswordElement();
    await user.type(passwordInputElement, formData.password);
    expect(passwordInputElement).toHaveValue(formData.password);

    const loginButton = getSubmitButton();
    await user.click(loginButton);
  });
});

function getEmailElement() {
  return screen.getByLabelText(/email/i);
}

function getPasswordElement() {
  return screen.getByLabelText(/password/i);
}

function getSubmitButton() {
  return screen.getByRole("button", {
    name: "Login",
  });
}
