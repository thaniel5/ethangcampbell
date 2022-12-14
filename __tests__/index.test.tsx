import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

test("renders a heading", () => {
  render(<Home />);

  expect(
    screen.getByRole("heading", {
      name: /Ethan Campbell/i,
    })
  ).toBeInTheDocument();
});
