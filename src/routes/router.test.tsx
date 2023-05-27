import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { routes } from "./router";
import { render, screen } from "@testing-library/react";

describe("Router test", () => {
  test("event route", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/login", "/"],
      initialIndex: 0,
    });
    render(<RouterProvider router={router} />);

    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toBeInTheDocument();
  });
});
