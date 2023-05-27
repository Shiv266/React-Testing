import { render, screen,expect } from "../../tests/test-utils";
import Users from "./Users";

describe("Users", () => {
  test("renders correctly", () => {
    render(<Users />);
    const usersHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(usersHeading).toBeInTheDocument();
  });
  test("renders a list of users", async () => {
    render(<Users />);
    const userList = screen.getByRole("list");
    expect(userList).toBeInTheDocument();

    // TODO used mock api response

    const userListItem = await screen.findAllByRole("listitem");
    expect(userListItem).toHaveLength(3);
  });
});
