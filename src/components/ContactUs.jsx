import {
  Box,
  Stack,
  SimpleGrid,
  Button,
  Flex,
  Heading,
  Text,
  HStack,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Textarea,
  chakra,
  useColorModeValue,
  Image,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { PhoneIcon, EmailIcon, AtSignIcon, TimeIcon } from "@chakra-ui/icons";

const Feature = ({ children, heading, title, subtitle }) => {
  return (
    <VStack p={6} align={"flex-start"}>
      {children}
      <chakra.p fontSize={"20px"} fontWeight="medium">
        {heading}
      </chakra.p>
      <chakra.p fontSize={"14px"}>{title}</chakra.p>
      <chakra.p fontSize={"14px"}>{subtitle}</chakra.p>
    </VStack>
  );
};

export default function ContactUs() {
  const boxBg = useColorModeValue("#FFF5E5");
  const bg = useColorModeValue("#FFF5E5", "#212121");
  const inputBgColor = useColorModeValue("white", "black");
  const inputplaceHolderColor = useColorModeValue("black", "white");
  return (
    <Flex
      bg={useColorModeValue("white", "#181818")}
      p={10}
      w="auto"
      justifyContent="center"
      alignItems="center"
      flexDir={"column"}
    >
      <chakra.p fontSize={"20px"}>Contact us</chakra.p>
      <Heading
        fontSize={{
          base: "4xl",
          md: "5xl",
        }}
      >
        Get in Touch
      </Heading>
      <Box
        // shadow="xl"
        // bg={useColorModeValue("white", "gray.800")}
        px={8}
        // py={10}
        mx="auto"
      >
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, lg: 2 }}
          //   spacingY={{ base: 10, lg: 32 }}
          spacingX={{ base: 10, lg: 24 }}
        >
          <Grid
            flex={1}
            h="full"
            w={"full"}
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(4, 1fr)"
            rowGap={6}
            columnGap={10}
            spacingX={10}
            py={12}
            px={6}
          >
            <GridItem colSpan={2} bg={bg} rounded={"xl"}>
              <Feature
                heading={"Address"}
                title="lC Bldg, bole"
                subtitle="Addis Ababa, Ethiopia"
              >
                <AtSignIcon color="#ED6100" fontSize="50px" />
              </Feature>
            </GridItem>
            <GridItem colSpan={2} bg={bg} rounded={"xl"}>
              <Feature
                heading={"Call Us"}
                title="+251-915-001851"
                subtitle="+251-915-001851"
              >
                <PhoneIcon color="#ED6100" fontSize="50px" />
              </Feature>
            </GridItem>
            <GridItem colSpan={2} bg={bg} rounded={"xl"}>
              <Feature
                heading={"Email Us"}
                title="abc@minewshew.com"
                subtitle="info@minewshew.com"
              >
                <EmailIcon color="#ED6100" fontSize="50px" />
              </Feature>
            </GridItem>
            <GridItem colSpan={2} bg={bg} rounded={"xl"}>
              <Feature
                heading={"Open Hours"}
                title="Monday - Saturday"
                subtitle="9:00 AM - 5:00 PM"
              >
                <TimeIcon color="#ED6100" fontSize="50px" />
              </Feature>
            </GridItem>
          </Grid>
          <Stack flex={1} spacing={8} mx={"auto"} py={12} px={6}>
            <Box
              rounded={"lg"}
              bg={bg}
              //   boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={10}>
                <HStack>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      {/* <FormLabel>First Name</FormLabel> */}
                      <Input
                        type="text"
                        bg={inputBgColor}
                        _placeholder={{
                          color: inputplaceHolderColor,
                        }}
                        placeholder="Your Name"
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName">
                      {/* <FormLabel>Last Name</FormLabel> */}
                      <Input
                        type="text"
                        bg={inputBgColor}
                        _placeholder={{
                          color: inputplaceHolderColor,
                        }}
                        placeholder="Your email"
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="email" isRequired>
                  {/* <FormLabel>Email address</FormLabel> */}
                  <Input
                    type="email"
                    bg={inputBgColor}
                    _placeholder={{
                      color: inputplaceHolderColor,
                    }}
                    placeholder="subject"
                  />
                </FormControl>
                <FormControl id="name">
                  {/* <FormLabel>Message</FormLabel> */}
                  <Textarea
                    // size={"lg"}
                    bg={inputBgColor}
                    _placeholder={{
                      color: inputplaceHolderColor,
                    }}
                    placeholder="message"
                  />
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    mx={10}
                    bg={"#ED6100"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Send Message
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
