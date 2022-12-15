import { Container, Heading, Link, Stack, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <Container maxW="3xl">
      <Stack
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          About Me
        </Heading>
        <Text color={"gray.500"}>
          My name is Ethan Campbell. I am a professional web developer living in
          Carmel, Indiana. I have been working for almost a decade in various
          sectors including finance, automotive, and healthcare. I graduated
          from Rose-Hulman Institute of Technology with a double major in
          Computer Science and Software Engineering. I also have minors in
          Economics and Mathematics. I play a dozen instruments and sing, I have
          travelled to a dozen countries, and enjoy board games. I am married
          and have a wonderful son who is still a toddler.
          <br />
          <br />
          This github repo for this site is located at{" "}
          <Link
            color={"teal.500"}
            href={"https://github.com/thaniel5/ethangcampbell"}
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/thaniel5/ethangcampbell
          </Link>
        </Text>
      </Stack>
    </Container>
  );
}
