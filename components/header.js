import {
    chakra,
    Flex,
    HStack,
    IconButton,
    Spacer,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import "@fontsource/permanent-marker";
import React from "react";
import { IoMdSunny, IoMdMoon } from "react-icons/io";

export const HeaderComponent = () => {
    const { toggleColorMode, colorMode } = useColorMode();

    return (
        <Flex w="100%" pos="fixed">
            <Flex fontFamily="Permanent Marker" fontSize="40px" ml="20px">
                <HeaderLink href="#" onClick={() => window.scrollTo(0, 0)}>
                    Tristan Derez
                </HeaderLink>
            </Flex>
            <Spacer />
            <HStack mr="20px" spacing="20px" mt="15px">
                <HeaderLink href="#about">A propos</HeaderLink>
                <HeaderLink href="#projects">Projets</HeaderLink>
                <HeaderLink href="#contact">Contact</HeaderLink>
                <IconBut isRound="yes" onClick={toggleColorMode}>
                    {colorMode === "light" ? <IoMdMoon /> : <IoMdSunny />}
                </IconBut>
            </HStack>
        </Flex>
    );
};

const HeaderLink = ({ children, ...props }) => {
    return (
        <chakra.a
            cursor="pointer"
            _hover={{ fontWeight: "bold", willChange: "translateY(-10)" }}
            {...props}
        >
            {children}
        </chakra.a>
    );
};

const IconBut = ({ children, ...props }) => {
    const background = useColorModeValue("orange.400", "orange.600");
    return (
        <IconButton
            bg={background}
            _hover={{ bg: useColorModeValue("orange.200", "orange.400") }}
            {...props}
        >
            {children}
        </IconButton>
    );
};
