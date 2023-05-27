import { render, screen, user, expect } from "../../tests/test-utils";
import Layout from "./Layout";

describe("Layout", () => {
  test("renders correctly", () => {
    render(<Layout children={<h1></h1>} />);
    const loginButton = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginButton).toBeInTheDocument();
  });
  test("start training button is not rendered", () => {
    render(<Layout children={<h1></h1>} />);
    const startTrainingButton = screen.queryByRole("button", {
      name: /start training/i,
    });
    expect(startTrainingButton).not.toBeInTheDocument();
  });

  test("start training button is eventually displayed", async () => {
    render(<Layout children={<h1></h1>} />);
    const startTrainingButton = await screen.findByRole(
      "button",
      {
        name: /start training/i,
      },
      { timeout: 2000 }
    );
    expect(startTrainingButton).toBeInTheDocument();
  });

  test("initially theme should be light", () => {
    render(<Layout children={<h1></h1>} />);
    const changeThemeButton = screen.getByRole("button", {
      name: "Dark Mode",
    });
    expect(changeThemeButton).toBeInTheDocument();
  });

  test("change theme to dark mode after clicking dark mode button", async () => {
    user.setup();
    render(<Layout children={<h1></h1>} />);
    const changeThemeButton = screen.getByRole("button", {
      name: "Dark Mode",
    });
    await user.click(changeThemeButton);

    expect(
      screen.getByRole("button", {
        name: "Light Mode",
      })
    ).toBeInTheDocument();
  });
});
