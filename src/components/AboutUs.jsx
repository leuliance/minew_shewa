import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
} from "@chakra-ui/react";

const Feature = ({ heading, text }) => {
  return (
    <GridItem>
      <chakra.h3 fontSize="xl" fontWeight="600">
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
    </GridItem>
  );
};

export default function AboutUs() {
  return (
    <Box as={Container} maxW="6xl" mt={10} p={4}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={1}
        alignItems="center"
      >
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" justify={"flex-start"}>
            <chakra.p fontSize="40px" fontWeight="700" textAlign={{base:"center",md:"left",lg:"left"}}>
              {"We Deliver Amazing and Quality Ethiopian Musics."}
            </chakra.p>
            {/* <chakra.p fontSize="40px" fontWeight="700">
              {""}
            </chakra.p> */}
          </VStack>
        </GridItem>
        <GridItem colSpan={1}>
          <Flex>
            <chakra.p fontSize={"18px"} fontWeight="normal" textAlign={{base:"center",md:"left",lg:"left"}}>
              We Are Here to Deliver Amazing and Quality Ethiopian Musics to
              You. We Produce, Record and Promote Quality Musics, Arrange
              Concerts And Help Our Artists to Get to the Next Level.
            </chakra.p>
          </Flex>
        </GridItem>
      </Grid>
      <Divider my={"6"} />
      <Flex
        maxW="7xl"
        h={"200"}
        backgroundImage={"/banner.webp"}
        rounded="xl"
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      />
    </Box>
  );
}
