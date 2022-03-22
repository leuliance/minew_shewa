import {
    Box,
    chakra,
    Container,
    Divider,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    Image,
  } from '@chakra-ui/react';
  import {  BellIcon,CalendarIcon,ChatIcon } from '@chakra-ui/icons';
  
  const Logo = (props) => {
    return (
        <Image 
        src="/logo1.webp"
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
          maxW={'7xl'}
          py={10}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
              <Text>© {new Date().getFullYear()} Minew Shewa Entertainment. All rights reserved</Text>
          <Logo />
          
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <BellIcon />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <CalendarIcon />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <ChatIcon />
            </SocialButton>
            <SocialButton label={'Twitter'} href={'#'}>
              <BellIcon />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <CalendarIcon />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }