import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  useColorMode,
  Flex,
} from "@chakra-ui/react";
import AnimatedNumbers from "react-animated-numbers";

// Replace test data with your own
const features = Array.apply(null, Array(8)).map(function (x, i) {
  return {
    id: i,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
  };
});

export default function Stats() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      w="full"
    //   h={"376"}
      flexDir="column"
      backgroundImage={
        colorMode === "light" ? "stats_light.webp" : "/stats_dark.webp"
      }
      mt={20}
      pb={20}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack spacing={1} as={Container} w="full" textAlign={"center"} mt="8">
        <Heading color={"white"} fontSize={"3xl"}>
          Some count that matters
        </Heading>
        <Text color={"white"} fontSize={"xl"}>
          Our achievement in the journey depicted in numbers
        </Text>
      </VStack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
          <VStack>
            <HStack>
              <AnimatedNumbers
                includeComma
                animateToNumber={649}
                fontStyle={{ fontSize: 54, color: "white",fontWeight:"bold" }}
                configs={[
                  { mass: 1, tension: 220, friction: 100 },
                  { mass: 1, tension: 180, friction: 130 },
                  { mass: 1, tension: 280, friction: 90 },
                  { mass: 1, tension: 180, friction: 135 },
                  { mass: 1, tension: 260, friction: 100 },
                  { mass: 1, tension: 210, friction: 180 },
                ]}
              ></AnimatedNumbers>
              <Text fontSize={"54px"} color="white" fontWeight="bold">
                m +
              </Text>
            </HStack>

            <Text fontSize={"18px"} color="white" fontWeight="bold">
              YouTube views
            </Text>
          </VStack>
          
          <VStack>
            <HStack>
              <AnimatedNumbers
                includeComma
                animateToNumber={500}
                fontStyle={{ fontSize: 54, color: "white",fontWeight:"bold" }}
                configs={[
                  { mass: 1, tension: 220, friction: 100 },
                  { mass: 1, tension: 180, friction: 130 },
                  { mass: 1, tension: 280, friction: 90 },
                  { mass: 1, tension: 180, friction: 135 },
                  { mass: 1, tension: 260, friction: 100 },
                  { mass: 1, tension: 210, friction: 180 },
                ]}
              ></AnimatedNumbers>
              <Text fontSize={"54px"} color="white" fontWeight="bold">
                +
              </Text>
            </HStack>

            <Text fontSize={"18px"} color="white" fontWeight="bold">
              Clients
            </Text>
          </VStack>
          <VStack>
            <HStack>
              <AnimatedNumbers
                includeComma
                animateToNumber={3.4}
                fontStyle={{ fontSize: 54, color: "white",fontWeight:"bold" }}
                configs={[
                  { mass: 1, tension: 220, friction: 100 },
                  { mass: 1, tension: 180, friction: 130 },
                  { mass: 1, tension: 280, friction: 90 },
                  { mass: 1, tension: 180, friction: 135 },
                  { mass: 1, tension: 260, friction: 100 },
                  { mass: 1, tension: 210, friction: 180 },
                ]}
              ></AnimatedNumbers>
              <Text fontSize={"54px"} color="white" fontWeight="bold">
                m +
              </Text>
            </HStack>

            <Text fontSize={"18px"} color="white" fontWeight="bold">
              YouTube Subscribers
            </Text>
          </VStack>
          <VStack>
            <AnimatedNumbers
              includeComma
              animateToNumber={6}
              fontStyle={{ fontSize: 54, color: "white", fontWeight:"bold" }}
              configs={[
                { mass: 1, tension: 220, friction: 100 },
                { mass: 1, tension: 180, friction: 130 },
                { mass: 1, tension: 280, friction: 90 },
                { mass: 1, tension: 180, friction: 135 },
                { mass: 1, tension: 260, friction: 100 },
                { mass: 1, tension: 210, friction: 180 },
              ]}
            ></AnimatedNumbers>

            <Text fontSize={"18px"} fontWeight="bold" color="white">
              Years
            </Text>
          </VStack>
        </SimpleGrid>
      </Container>
    </Flex>
  );
}
