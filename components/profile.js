import {
    Box,
    useColorMode,
    useColorModeValue,
    Image,
    Stack,
    HStack,
    Icon,
    IconButton,
    Text,
    Link,
} from "@chakra-ui/react";
import "@fontsource/permanent-marker";
import Typewriter from "typewriter-effect";
import React from "react";

export const ProfileContainer = (props) => {
    const { toggleColorMode, colorMode } = useColorMode();
    const textlink = useColorModeValue("orange.400", "orange.600");
    return (
        <Stack
            direction={["row", "column"]}
            h="100vh"
            spacing="25px"
            justifyContent="center"
            alignItems="center"
            {...props}
        >
            <HStack width="100%" alignItems="center" justifyContent="center">
                <Image
                    borderRadius="full"
                    boxSize="250px"
                    src="https://i.ibb.co/9nm1rw7/download20210300011044.png"
                    alt="Tristan Derez"
                    fit="scale-down"
                    mr="50px"
                    ml="100px"
                />
                <Box w="50%" fontFamily="Permanent Marker" fontSize="50px">
                    <Typewriter
                        skipAddStyles
                        onInit={(typewriter) => {
                            typewriter
                                .typeString(`Tristan Derez`)
                                .pauseFor(10000)
                                .changeDelay(40)
                                .start();
                        }}
                    />
                    <Text fontFamily="rubik" fontSize="20px">
                        Salut! Ayant appris le développement web en autodidacte
                        grâce à{" "}
                        <Link href="https://codecademy.com" color={textlink}>
                            Codecademy
                        </Link>
                        , je me lance maintenant dans une formation{" "}
                        <Link
                            href="https://openclassrooms.com"
                            color={textlink}
                        >
                            OpenClassrooms
                        </Link>{" "}
                        en alternance pour consolider mes connaissances.
                        <br />
                        Je cherche donc une alternance au rythme d'un an, au
                        rythme de 3-4 jours par semaine en entreprise et le
                        reste en formation.
                    </Text>
                </Box>
            </HStack>
        </Stack>
    );
};
