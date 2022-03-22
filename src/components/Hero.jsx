import {
  Stack,
  Flex,
  Box,
  Text,
  VStack,
  useBreakpointValue,
  useColorModeValue,
  Image,
  HStack,
} from "@chakra-ui/react";

import {useState} from 'react'


export default function Hero(){
    const arrowStyles = {
      cursor: "pointer",
      pos: "absolute",
      top: "50%",
      w: "auto",
      mt: "-22px",
      p: "16px",
      color: "white",
      fontWeight: "bold",
      fontSize: "18px",
      transition: "0.6s ease",
      borderRadius: "0 3px 3px 0",
      userSelect: "none",
      _hover: {
        opacity: 0.8,
        bg: "black",
      },
    };
  
    const slides = [
      {
        img: "/hero.webp",
      },
      {
        img: "/hero.webp",
      },
      {
        img: "/hero.webp",
      },
      {
        img: "/hero.webp",
      },
      {
        img: "/hero.webp",
      },
    ];
  
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const slidesCount = slides.length;
  
    const prevSlide = () => {
      setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };
    const nextSlide = () => {
      setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };
    const setSlide = (slide) => {
      setCurrentSlide(slide);
    };
    const carouselStyle = {
      transition: "all .5s",
      ml: `-${currentSlide * 100}%`,
    };
  
    return (
        <Box>
        <Flex
          w={"full"}
          h={"100vh"}
          backgroundImage={"/hero.webp"}
          backgroundSize={"cover"}
          backgroundPosition={"center center"}
        />
      </Box>
    );
  };

// export default function Hero() {
//   return (
//     <Box>
//       <Flex
//         w={"full"}
//         h={"100vh"}
//         backgroundImage={"/hero.webp"}
//         backgroundSize={"cover"}
//         backgroundPosition={"center center"}
//       />
//     </Box>
//   );
// }

{/* <Flex
w={"full"}
        h={"100vh"}
  bg={useColorModeValue("gray.200", "gray.600")}
  // p={10}
  mb={20}
  alignItems="center"
  justifyContent="center"
>
  <Flex w="full" overflow="hidden" pos="relative">
    <Flex h="full" w="full" {...carouselStyle}>
      {slides.map((slide, sid) => (
        <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
          
          <Image
            src={slide.img}
            alt="carousel image"
            boxSize="full"
            backgroundSize="cover"
          />
        </Box>
      ))}
    </Flex>
    <Text {...arrowStyles} left="0" onClick={prevSlide}>
      &#10094;
    </Text>
    <Text {...arrowStyles} right="0" onClick={nextSlide}>
      &#10095;
    </Text>
    {/* <HStack justify="center" h="50vh" pos="absolute" bottom="8px" w="full">
      {Array.from({ length: slidesCount }).map((_, slide) => (
        <Box
          key={`dots-${slide}`}
          cursor="pointer"
          boxSize={["7px", , "15px"]}
          m="0 2px"
          bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
          rounded="50%"
          display="inline-block"
          transition="background-color 0.6s ease"
          _hover={{ bg: "blackAlpha.800" }}
          onClick={() => setSlide(slide)}
        ></Box>
      ))}
    </HStack> 
  </Flex>
</Flex> */}
