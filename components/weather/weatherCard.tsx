import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import { IWeatherDay } from "@/types/weather";

export default function WeatherCard({
  weatherDay,
}: {
  weatherDay: IWeatherDay;
}) {
  return (
    <Card
      bg={"green.100"}
      size={"sm"}
      align={"center"}
      key={weatherDay.date.toString()}
    >
      <CardHeader>
        <Heading size={"md"}>{weatherDay.date.toDateString()}</Heading>
      </CardHeader>
      <CardBody>
        <VStack>
          <Image
            src={`http://openweathermap.org/img/w/${weatherDay.iconName}.png`}
            alt={weatherDay.iconName}
          />
          <Text fontSize={"5xl"} color={"red.500"}>
            {weatherDay.maxTemp}
          </Text>
          <Text fontSize={"2xl"} color={"blue.500"}>
            {weatherDay.minTemp}
          </Text>
        </VStack>
      </CardBody>
    </Card>
  );
}
