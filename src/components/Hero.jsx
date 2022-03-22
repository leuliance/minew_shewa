import {
    Stack,
    Flex,
    Box,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function Hero() {
    return (
        <Box >
<Flex
      
        w={'full'}
        h={'100vh'}
        backgroundImage={
          '/hero.webp'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}/>
        </Box>
      
    );
  }