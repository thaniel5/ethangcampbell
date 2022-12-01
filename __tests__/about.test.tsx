import { render, screen } from "@testing-library/react";
import About from "@/pages/about";

test("renders a heading", () => {
  render(<About />);

  expect(
    screen.getByRole("heading", {
      name: /About Me/i,
    })
  ).toBeInTheDocument();
});
