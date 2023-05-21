import { render, screen } from "@testing-library/react";
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
