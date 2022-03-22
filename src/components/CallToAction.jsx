import {
    Box,
    Stack,
    SimpleGrid,
    Button,
    Flex,
    Divider,
    Grid,
    chakra,
    Container,
    useColorModeValue,
    Image,
  } from "@chakra-ui/react";
  
  
  export default function CallToAction() {
      const boxBg = useColorModeValue("#FFF5E5");
      const bg = useColorModeValue("#ED6100","#212121");
      const btnBg = useColorModeValue("white","#ED6100");
    return (
        <Flex
        bg={boxBg}
        p={14}
        w="full"
        alignItems="center"
        justifyContent="center"
        
      >
        <Box
          bgGradient="linear(to-r, white, purple.300)"
          bg={bg}
          rounded={"xl"}
        >
          <SimpleGrid
            maxW="7xl"
            w={{ md: "3xl", lg: "6xl" }}
            alignItems="center"
            columns={{ base: 1, lg: 2, xl: 3 }}
            spacing={4}
            mx="auto"
            
            
            // px={{ base: 4, lg: 8 }}
            display={{ lg: "flex" }}
          >
            <Box flex={1} px={{ base: 4, lg: 8 }} py={{ base: 12, lg: 16 }}>
              <chakra.h2
                fontSize={{ base: "20px", sm: "20px" }}
                fontWeight="medium"
                letterSpacing="tight"
                lineHeight="shorter"
                color={"white"}
                mb={6}
              >
                <chakra.span display="block">Want to turn the wait for an answer into an entertaining,</chakra.span>
                <chakra.span
                  display="block"
                  color={"white"}
                >
                  social, and informative experience? 
                </chakra.span>
              </chakra.h2>
              <Stack direction={{ base: "column", sm: "row" }} spacing={2}>
                
                <Box  display="inline-flex" rounded="md" shadow="md">
                  <chakra.a
                    w="full"
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    px={4}
                    py={2}
                    border="solid transparent"
                    fontWeight="bold"
                    rounded="md"
                    color="brand.600"
                    bg={btnBg}
                    _hover={{
                      bg: "brand.50",
                    }}
                  >
                    Try it out
                  </chakra.a>
                </Box>
              </Stack>
            </Box>
            <Box flex={1}    >
            <Image src="/hero.webp"  h="full" 
            // borderRadius= "200px 0px 0px 200px"
            />
                {/* <Box pos={"absolute"} w="50%" h="full" bottom="50" right={"0"} bg={"green"}>
                <Image src="/hero.webp"  />
                </Box>
                <Box pos={"absolute"} w="40%" h="full" bottom="122" right={"60%"} bg={"green"}>
                <Image src="/hero.webp"  />
                </Box>
                <Box pos={"absolute"} w="40%" h="full" bottom="0" right={"60%"} bg={"green"}>
                <Image src="/hero.webp"  />
                </Box> */}
            </Box>
          </SimpleGrid>
        </Box>
      </Flex>
    );
  }
  