import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "@/components/navbar";

test("renders a heading", () => {
  render(<Navbar />);

  expect(
    screen.getByRole("link", {
      name: /home/i,
    })
  ).toBeInTheDocument();
});

test("open mobile navbar", async () => {
  const user = userEvent.setup();
  render(<Navbar />);

  await user.click(
    screen.getByRole("button", {
      name: /toggle navigation/i,
    })
  );

  expect(screen.getAllByRole("link", { name: /home/i })[1]).toBeInTheDocument();
});
