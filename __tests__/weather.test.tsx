import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithClient } from "@/mocks/utils";
import Weather from "@/pages/weather";

test("type zipcode and hit enter", async () => {
  const user = userEvent.setup();
  renderWithClient(<Weather />);

  const zipcodeTextbox = screen.getByRole("spinbutton", { name: /zipcode/i });

  await user.clear(zipcodeTextbox);
  await user.type(zipcodeTextbox, "63901");
  await user.keyboard("{enter}");

  expect(await screen.findByText(/59/i)).toBeInTheDocument();
});
