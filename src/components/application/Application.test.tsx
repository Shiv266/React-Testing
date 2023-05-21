import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    // const pageHeading = screen.getByRole("heading", {
    //   name: "Application Form",
    // });
    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      name: "Section 1",
    });
    expect(sectionHeading).toBeInTheDocument();

    const paraElement = screen.getByText("All fields are mandatory");
    expect(paraElement).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: /name/i,
    });
    expect(nameElement).toBeInTheDocument();

    const imageElement = screen.getByAltText("laptop");
    expect(imageElement).toBeInTheDocument();

    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();

    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();

    // getByDisplayValue

    const nameElement4 = screen.getByDisplayValue("shivam");
    expect(nameElement4).toBeInTheDocument();

    // using label
    // if tow element have same label value then we use `selector`
    const nameElement2 = screen.getByLabelText(/name/i, {
      selector: "input",
    });
    expect(nameElement2).toBeInTheDocument();

    // using placeholder
    const nameElement3 = screen.getByPlaceholderText("Enter name");
    expect(nameElement3).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
