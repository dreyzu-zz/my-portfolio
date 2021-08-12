import {
    Box,
    useColorMode,
    Image,
    Stack,
    Heading,
    Wrap,
    WrapItem,
    Center,
    Link,
} from "@chakra-ui/react";
import "@fontsource/permanent-marker";
import React from "react";

const projects = [
    {
        imageUrl: "https://i.ibb.co/QmFHF7N/projet1-screenshot.png",
        imageAlt: "Screenshot of the website",
        stackUsed: "React, TailwindCSS",
        title: "Maker, Pre-launch landing page",
        description:
            "Projet venant du site frontendmentor, version mobile uniquement, travail en cours sur la version tablette et desktop",
        adress: "https://prelaunch-landingpage.vercel.app/",
    },
    {
        imageUrl: "https://i.ibb.co/0BfyFgv/Podrequest-landingpage.png",
        imageAlt: "Screenshot of the website",
        stackUsed: "HTML, CSS, JS",
        title: "Podrequest Pre-launch landing page",
        description: "Projet venant du site frontendmentor, responsive",
        adress: "https://podrequest.vercel.app/",
    },
    {
        imageUrl:
            "https://images.unsplash.com/photo-1627549572210-62e7d8241309?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
        imageAlt: "placeholder",
        stackUsed: "NEXTjs",
        title: "Bientôt",
        description: "Projet en cours",
        adress: "",
    },
    {
        imageUrl:
            "https://images.unsplash.com/photo-1627549572210-62e7d8241309?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
        imageAlt: "placeholder",
        stackUsed: "NEXTjs",
        title: "Bientôt",
        description: "Projet en cours",
        adress: "",
    },
];

export const ProjectContainer = (props) => {
    const { toggleColorMode, colorMode } = useColorMode();
    return (
        <Stack
            spacing="20px"
            alignItems="center"
            h="100vh"
            justifyContent="center"
            {...props}
        >
            <Box>
                <Heading mb="25px">Projets</Heading>
            </Box>
            <Wrap direction="row" spacing="25px" wrap="wrap" justify="center">
                {projects.map((project, index) => (
                    <ProjectItem key={index} project={project} />
                ))}
            </Wrap>
        </Stack>
    );
};

const ProjectItem = ({ project }) => (
    <Link href={project.adress}>
        <WrapItem
            w="25rem"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
        >
            <Center flexDirection="column">
                <Image src={project.imageUrl} alt={project.imageAlt} />
                <Box d="flex" alignItems="baseline">
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        m="2"
                    >
                        {project.title} &bull; {project.stackUsed}
                    </Box>
                </Box>
            </Center>
        </WrapItem>
    </Link>
);
