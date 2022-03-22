import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  useColorMode,
  useDisclosure,
  useColorModeValue,
  Text,
  Container,
  Heading,
  Stack,
  VStack,
  StackDivider,
  SimpleGrid,
  Icon,
  Image,
} from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";

const Feature = ({ title,description, icon, iconBg, bg,color }) => {
  return (
    <Stack
      p={8}
      direction={"row"}
      align={"center"}
      justify="space-around"
      bg={bg}
    >
      <Flex
        w={"96px"}
        h={"96px"}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <VStack w={{base:"180px",sm:"210px",md:"210px",xl:"210px"}} align="flex-start">
      <Text fontWeight={600} color={color}>{title}</Text>
      <Text fontWeight={300} fontSize={"14px"} color={color}>{description}</Text>

      </VStack>
      
    </Stack>
  );
};

export default function HowItWorks() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const firstBgColor = useColorModeValue("#ED6100","black");
  const secondBgColor = useColorModeValue("#FFCD80","#121212");
  const firstColor = useColorModeValue("#FFF5E5","#121212");
  const secondColor = useColorModeValue("white","#181818");

  return (
    <Box
      //   bg={useColorModeValue("white", "gray.900")}
      bg={`linear-gradient(to bottom, ${firstColor} 50%, ${secondColor} 50%)`}
      px={4}
      py={2}
      //   h={864}
      w={"full"}
    >
      <Container maxW={"6xl"} py={6}>
        <SimpleGrid alignItems={"center"}  columns={{ base: 1, md: 2 }} spacing={20}>
          <Stack
            bg={
                // colorMode === "light" ? "linear-gradient(to bottom,#ED6100 50%, #FFCD80 50%, #FFCD80 50%)" :
              `linear-gradient(to bottom,${firstBgColor} 34%, ${secondBgColor} 33%, ${secondBgColor} 33%)`
            }
            // maxH="550px"
          >
            <Feature
            //   bg={useColorModeValue("#ED6100","#121212")}
              icon={<Icon as={MoonIcon} color={"yellow.500"} w={5} h={5} />}
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              title={"STEP 1"}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis
              scelerisque at quam congue posuere libero in sit quam. Consequat,
              scelerisque."
              color={useColorModeValue("white", "white")}
            />
            <Feature
            //   bg={useColorModeValue("#FFCD80","#181818")}
              icon={<Icon as={MoonIcon} color={"green.500"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              title={"STEP 2"}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis
              scelerisque at quam congue posuere libero in sit quam. Consequat,
              scelerisque."
              color={useColorModeValue("black", "white")}
            />
            <Feature
            //   bg={useColorModeValue("#FFCD80","#181818")}
              icon={<Icon as={MoonIcon} color={"purple.500"} w={5} h={5} />}
              iconBg={useColorModeValue("purple.100", "purple.900")}
              title={"STEP 3"}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis
              scelerisque at quam congue posuere libero in sit quam. Consequat,
              scelerisque."
              color={useColorModeValue("black", "white")}
            />
          </Stack>
          <Flex align={"center"} flexDir={"column"}>
            <Heading maxW="445px" py={4} fontSize={"48px"} color={useColorModeValue("black", "white")}>
              How to use our CBRT in few easy steps.
            </Heading>

            <Image
              rounded={"md"}
              alt={"feature image"}
              src={
                "/crbt.webp"
              }
              h="480px"
              maxW="full"
              objectFit="fill"
            />
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
