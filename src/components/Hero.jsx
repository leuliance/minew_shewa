import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

import {  useQuery } from 'react-query'


// Settings for the slider
const settings = {
  dots: true,
  arrows: true,
  fade: true,
  // cssEase: "linear",
  infinite: true,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
  // responsive: [
  //   {
  //     breakpoint: 1700,
  //     settings: {
  //       slidesToShow: 5,
  //       slidesToScroll: 3,
  //     },
  //   },
  //   {
  //     breakpoint: 1200,
  //     settings: {
  //       slidesToShow: 4,
  //       slidesToScroll: 3,
  //     },
  //   },
  //   {
  //     breakpoint: 992,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 3,
  //     },
  //   },
  //   {
  //     breakpoint: 800,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 2,
  //     },
  //   },
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2,
  //       //   initialSlide: 3,
  //     },
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //     },
  //   },
  // ],
};

export default function Hero() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const sliderRef = React.useRef(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server

  const { isLoading, error, data } = useQuery('carousels', () =>
     fetch('https://minew-shewa.herokuapp.com/carousels').then(res =>
       res.json()
     )
   );

  const cards = [
    {
        image:'/hero.webp',
    //   image:
    //     "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    },
    {
        image:'/logo1.webp',
    //   image:
    //     "https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80",
    },
    {
        image:'/hero.webp',
    //   image:
    //     "https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    },
  ];

  return (
    <Box
      position={"relative"}
      // height={"100vh"}
      height={{base:"70vh",sm:"70vh",md:"100vh",lg:"100vh"}}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={99}
        shadow="lg"
        onClick={() => sliderRef?.current?.slickPrev()}
      >
        <ArrowBackIcon size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={99}
        shadow="lg"
        onClick={() => sliderRef?.current?.slickNext()}
      >
        <ArrowForwardIcon size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={sliderRef} >
        {isLoading ? <Box
            // key={index}
            height={"100vh"}
            position="relative"
            backgroundPosition="center contain"
            backgroundRepeat="no-repeat"
            backgroundSize={{base:"cover"}}
            
            // backgroundImage={card.image}
            backgroundImage={"/hero1.webp"}
          ></Box> : data.length  > 0 ? data[0]?.images?.map((card, index) => (
            <Box
              key={index}
              height={{base:"70vh",sm:"70vh",md:"100vh",lg:"100vh"}}

              position="relative"
              backgroundPosition={{base:"center center",sm:"center contain",md:"center contain",lg:"center contain"}}
              backgroundRepeat="no-repeat"
              backgroundSize={{base:"contain",md:"cover",lg:"cover"}}
              
              // backgroundImage={card.image}
              backgroundImage={`url(${card.url})`}
            ></Box>
          )): null}
        
      </Slider>
    </Box>
  );
}
