import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { IWeatherAPI, IWeatherDay } from "@/types/weather";

export default function useWeather(zipcode: number) {
  return useQuery({
    queryKey: ["weather", zipcode, Date],
    queryFn: async () => {
      const { data }: { data: IWeatherAPI } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode}&units=imperial&appid=f8a771601a9624cb98f25476e904ee37`
      );

      let currentDay = new Date();

      const weatherDays: IWeatherDay[] = [];
      let minTemp = data.list[0].main.temp_min;
      let maxTemp = data.list[0].main.temp_max;

      data.list.forEach((day, index) => {
        const date = new Date(day.dt * 1000);

        if (day.main.temp_max > maxTemp) {
          maxTemp = day.main.temp_max;
        }

        if (day.main.temp_min < minTemp) {
          minTemp = day.main.temp_min;
        }

        if (
          date.getDay() !== currentDay.getDay() ||
          index === data.list.length - 1
        ) {
          if (currentDay.toDateString() !== new Date().toDateString()) {
            const weatherDay: IWeatherDay = {
              date: currentDay,
              iconName: day.weather[0].icon,
              maxTemp: Math.round(maxTemp),
              minTemp: Math.round(minTemp),
            };
            weatherDays.push(weatherDay);
          }

          maxTemp = day.main.temp_max;
          minTemp = day.main.temp_min;
          currentDay = date;
        }
      });

      return { city: data.city.name, weatherDays };
    },
  });
}
