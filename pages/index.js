import {
    useColorMode,
    useColorModeValue,
    Box,
    Stack,
    extendTheme,
} from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { HeaderComponent } from "../components/header";
import { ProfileContainer } from "../components/profile";
import { ProjectContainer } from "../components/projects";
import { Separator } from "../components/separator";
import { Contact } from "../components/contact";
import { FooterContainer } from "../components/footer";

const breakpoints = createBreakpoints({
    sm: "320px",
    md: "850px",
});
const theme = extendTheme({ breakpoints });

function HomePage() {
    const { toggleColorMode } = useColorMode();
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
