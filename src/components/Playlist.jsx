import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  Flex,
  Grid,
  GridItem,
  Image,
  Heading,
} from "@chakra-ui/react";
import { BellIcon, CalendarIcon, ChatIcon } from "@chakra-ui/icons";

import ReactPlayer from "react-player/lazy";

import {  useQuery } from 'react-query'


export default function PlayList() {
  const { isLoading, error, data } = useQuery('playlists', () =>
     fetch('https://minew-shewa.herokuapp.com/playlists').then(res =>
       res.json()
     )
   );

   console.log(data)
  return (
    <Flex
    id="playlist"
      bg={useColorModeValue("white", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      justifyContent="center"
      alignItems="center"
      w="full"
      flexDir={"column"}
    >
      <Heading
        fontSize={{
          base: "4xl",
          md: "5xl",
        }}
        color={useColorModeValue("black", "white")}
        pt={10}
      >
        Your favorite playlists
      </Heading>
      <Container
        as={Stack}
        maxW="7xl"
        w={{ md: "3xl", lg: "6xl" }}
        alignItems="center"
        py={10}
        rounded="lg"
      >
        {isLoading ||  error ? <Box
            // key={index}
            height={"10vh"}
            position="relative"
            backgroundPosition="center contain"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            
            // backgroundImage={card.image}
            backgroundImage={"/hero1.webp"}
          ></Box> : data.length  > 0 ? <ReactPlayer
          url={data[0]?.youtubeLink}
          width={"100%"}
          pip={true}
          controls={true}
          style={{
            borderRadius:"40px",
          }}
        /> :  null}
        
        {/* <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={2} h="auto" w="500px" colSpan={1} bg="tomato" >
              <Image src='/hero.webp' h="full" objectFit={"center"}/>
          </GridItem>
          <GridItem colSpan={4} bg="tomato" >
          <Image src='/hero.webp' h="full" objectFit={"center"}/>
          </GridItem>
          <GridItem colSpan={2} bg="papayawhip" />
          <GridItem colSpan={2} bg="papayawhip" />
        </Grid>
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={2} h="600px" w="700px" colSpan={1} bg="tomato" />
          
          <GridItem colSpan={2}  bg="papayawhip" />
          <GridItem colSpan={2} bg="papayawhip" />
          <GridItem colSpan={4}  bg="papayawhip" />
          <GridItem colSpan={2} bg="papayawhip" /> 
        </Grid> */}
      </Container>
    </Flex>
  );
}

const IMAGES = [
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" },
    ],
    caption: "Boats (Jeshu John - designerspics.com)",
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail:
      "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
];
