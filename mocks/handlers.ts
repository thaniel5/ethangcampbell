import { rest } from "msw";

import weatherMock from "./weatherMock";
import { IWeatherAPI } from "@/types/weather";

export const handlers = [
  rest.get(
    "https://api.openweathermap.org/data/2.5/forecast",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(weatherMock));
    }
  ),
];
