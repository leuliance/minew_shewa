import {
    Box,
    chakra,
    Container,
    Divider,
    Link,
    Stack,
    Text,
    useColorModeValue,
    useColorMode,
    VisuallyHidden,
    Image,
  } from '@chakra-ui/react';
  import {  BellIcon,CalendarIcon,ChatIcon } from '@chakra-ui/icons';
  
  const Logo = (props) => {
    const { colorMode } = useColorMode();
    return (
        <Image 
        src={colorMode === "light" ? "/logo.webp" :"/logo1.webp"}
        h="72px"
        w="72px"
        objectFit={"contain"}
        />
    );
  };
  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
            <Divider/>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={10}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
              <Text >© {new Date().getFullYear()} Minew Shewa Entertainment. All rights reserved</Text>
          <Box w={{ base: 'auto', md: "20%",lg:"30%" }}>
            <Logo />
          </Box>
          
          
          <Stack direction={'row'} spacing={6}>
            
            <SocialButton label={'YouTube'} href="https://www.youtube.com/c/MinewShewaTube/">
            <img src="https://img.icons8.com/material/24/000000/youtube-play--v1.png" />


            </SocialButton>
            <SocialButton label={'Instagram'} href="https://www.facebook.com/minewshewaa/">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/facebook-new.png"/>
            </SocialButton>
           
          </Stack>
        </Container>
      </Box>
    );
  }