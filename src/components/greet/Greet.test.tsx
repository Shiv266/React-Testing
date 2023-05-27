import { render, screen,expect } from "../../tests/test-utils";

import Greet from "./Greet";

describe("Greet", () => {
  test("Greet renders correctly", () => {
    render(<Greet />);
    const mainHeading = screen.getByText(/hello/i);
    expect(mainHeading).toBeInTheDocument();
  });

  test("Greet renders correctly", () => {
    render(<Greet name="Shivam Singh" />);
    const fullHeading = screen.getByText(/hello shivam singh/i);
    expect(fullHeading).toBeInTheDocument();
  });
});
