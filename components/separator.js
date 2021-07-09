import React from "react";
import {
    Center,
    Image,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";

export const Separator = () => {
    const svgColor = useColorModeValue("orange.400", "orange.600");
    return (
        <Center h="450px">
            <Image
                src="/images/squiggle.svg"
                w="400px"
                h="200px"
                margin="50px"
            />
        </Center>
    );
};
