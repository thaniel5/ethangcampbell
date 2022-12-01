import { rest } from "msw";
import { screen } from "@testing-library/react";

import { renderWithClient } from "@/mocks/utils";
import { server } from "@/mocks/server";
import Weather from "@/pages/weather";

test("successful weather query", async () => {
  renderWithClient(<Weather />);

  expect(await screen.findByText(/59/i)).toBeInTheDocument();
});

test("failed weather query", async () => {
  server.use(
    rest.get("*", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  renderWithClient(<Weather />);

  expect(
    await screen.findByText(/Error fetching weather/i)
  ).toBeInTheDocument();
});
