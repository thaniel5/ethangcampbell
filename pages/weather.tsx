import { Container, Heading, VStack } from "@chakra-ui/react";
import { useState } from "react";

import WeatherForm from "@/components/weather/weatherForm";
import WeatherCardContainer from "@/components/weather/weatherCardContainer";
import useWeather from "@/hooks/useWeather";

export default function Weather() {
  const [zipcode, setZipcode] = useState(46033);
  const weather = useWeather(zipcode);

  function handleZipcodeChange(zipcode: number) {
    setZipcode(zipcode);
  }

  return (
    <Container maxW="8xl">
      <VStack spacing={{ base: 8, md: 14 }} py={10}>
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Weather App
        </Heading>
        <WeatherForm
          isLoading={weather.isLoading}
          handleZipcodeChange={handleZipcodeChange}
        />
        <WeatherCardContainer
          city={weather.data?.city}
          weatherDays={weather.data?.weatherDays}
          error={weather.error}
        />
      </VStack>
    </Container>
  );
}
