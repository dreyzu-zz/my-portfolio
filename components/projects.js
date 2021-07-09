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
            "Projet venant du site frontendmentor, version mobile uniquement",
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
        imageUrl: "https://i.ibb.co/RPVmLXV/FAQ-accordion-card.png",
        imageAlt: "Screenshot of the website",
        stackUsed: "React, TailwindCSS",
        title: "FAQ Accordion card",
        description: "Projet venant du site frontendmentor, responsive",
        adress: "https://accordion-faq-jet.vercel.app/",
    },
    {
        imageUrl: "https://i.ibb.co/VtFFrzN/Foodomizer.png",
        imageAlt: "Screenshot of the website",
        stackUsed: "HTML, CSS, JS",
        title: "Foodomizer",
        description: "Projet personnel en construction",
        adress: "http://foodomizer.com",
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
