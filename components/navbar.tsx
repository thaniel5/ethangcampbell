import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "@/components/nextLink";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={"white"}
        color={"gray.600"}
        minH={"60px"}
        py={2}
        px={4}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={"gray.200"}
        align={"center"}
        justify={"center"}
      >
        <Flex flex={1} ml={-2} display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex>
          <Text
            as={"b"}
            display={{ base: "flex", md: "none" }}
            textAlign={"center"}
            color={"gray.800"}
          >
            Ethan Campbell
          </Text>
          <Flex display={{ base: "none", md: "flex" }}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Flex flex={1} display={{ base: "flex", md: "none" }} />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

function DesktopNav() {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <NextLink
            p={2}
            href={navItem.href}
            fontSize={"sm"}
            fontWeight={500}
            color={"gray.600"}
            _hover={{
              textDecoration: "none",
              color: "gray.800",
            }}
          >
            {navItem.label}
          </NextLink>
        </Box>
      ))}
    </Stack>
  );
}

function MobileNav() {
  return (
    <Stack bg={"white"} p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
}

function MobileNavItem({ label, href }: NavItem) {
  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        as={NextLink}
        href={href}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={"gray.600"}>
          {label}
        </Text>
      </Flex>
    </Stack>
  );
}

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Example App",
    href: "/weather",
  },
  {
    label: "About",
    href: "/about",
  },
];
