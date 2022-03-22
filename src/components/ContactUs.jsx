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
  
  
  export default function ContactUs() {
      const boxBg = useColorModeValue("#FFF5E5");
      const bg = useColorModeValue("#ED6100","#212121");
      const btnBg = useColorModeValue("white","#ED6100");
    return (
        <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={20}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        shadow="xl"
        bg={useColorModeValue("white", "gray.800")}
        px={8}
        py={20}
        mx="auto"
      >
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, lg: 2 }}
          spacingY={{ base: 10, lg: 32 }}
          spacingX={{ base: 10, lg: 24 }}
        >
          
        </SimpleGrid>
      </Box>
    </Flex>
    );
  }
  


