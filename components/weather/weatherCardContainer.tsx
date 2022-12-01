import { Heading, Spinner, Stack, Text, VStack } from "@chakra-ui/react";

import WeatherCard from "./weatherCard";
import { IWeatherDay } from "@/types/weather";

export default function WeatherCardContainer({
  city,
  weatherDays,
  error,
}: {
  city: string | undefined;
  weatherDays: IWeatherDay[] | undefined;
  error: unknown;
}) {
  if (weatherDays) {
    return (
      <VStack spacing={{ base: 4, md: 10 }}>
        <Heading as={"h2"} size={"xl"}>
          {city}
        </Heading>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 8, md: 10 }}
        >
          {weatherDays?.map((weatherDay) => (
            <WeatherCard
              key={weatherDay.date.toISOString()}
              weatherDay={weatherDay}
            />
          ))}
        </Stack>
      </VStack>
    );
  }

  if (error) return <Text>Error fetching weather</Text>;

  return <Spinner size={"xl"} />;
}
