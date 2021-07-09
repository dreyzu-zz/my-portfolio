import {
    useColorMode,
    useColorModeValue,
    Box,
    Stack,
    Image,
    Center,
} from "@chakra-ui/react";
import { HeaderComponent } from "../components/header";
import { ProfileContainer } from "../components/profile";
import { ProjectContainer } from "../components/projects";
import { Separator } from "../components/separator";
import { Contact } from "../components/contact";
import { FooterContainer } from "../components/footer";

function HomePage() {
    const { toggleColorMode } = useColorMode();
    const formBackground = useColorModeValue("gray.100", "gray.700");
    const inputBackground = useColorModeValue("gray.200", "gray.600");
    const svgColor = useColorModeValue("orange.400", "orange.600");
    return (
        <Stack>
            <Box>
                <HeaderComponent />
                <ProfileContainer id="about" />
                <Separator />
                <ProjectContainer id="projects" />
                <Separator />
                <Contact id="contact" />
                <FooterContainer justifySelf="flex-end" />
            </Box>
        </Stack>
    );
}

export default HomePage;
