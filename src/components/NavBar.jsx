import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  useColorMode,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

// const Links = ["About",  "Playlist","How it works",];
const Links = [
  {
    path: '/#about',
    label: "About",
  },
  {
    path: '/#playlist',
    label: "Playlist",
  },
  {
    path: '/#how_it_works',
    label:"How it works",
  },
  // {
  //   path: '/blog',
  //   label: router.locale == 'en' ? 'Blog' : 'ብሎግ',
  // },
  // {
  //   path: '/#contactUs',
  //   label: router.locale == 'en' ? 'Contact Us' : 'አግኙን',
  // },
  
];

const NavLink = ({ children,linkTo }) => (
  <Link
    px={2}
    py={2}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.50", "gray.700"),
    }}
    href={linkTo}
  >
    {children}
  </Link>
);

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      px={{ base: 4, sm: 10, md: 20, lg: 40 }}
      //   py={2}
      pos="fixed"
      w={"full"}
      zIndex={9999999}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Image src={colorMode === "light" ? "/logo.webp" :"/logo1.webp"} h="64px" w="64px" objectFit={"contain"} />

        <Flex alignItems={"center"}>
          <HStack
            as={"nav"}
            mr="6"
            spacing={4}
            display={{ base: "none", md: "flex" }}
          >
            {Links.map((link) => (
              <NavLink key={link.path} linkTo={link.path}>{link.label}</NavLink>
            ))}
          </HStack>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link.path} linkTo={link.path}>{link.label}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
