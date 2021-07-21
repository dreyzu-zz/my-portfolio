import { VStack, Center, HStack, Link, Icon } from "@chakra-ui/react";
import React from "react";
import { ImGithub, ImLinkedin, ImTwitter } from "react-icons/im";

export const FooterContainer = () => {
    return (
        <VStack mb="10px">
            <Center>Vous pouvez aussi me retrouver sur ces réseaux</Center>
            <HStack alignItems="flex-end" justifyContent="center">
                <Link href="https://github.com/dreyzu">
                    <Icon as={ImGithub} boxSize={12} />
                </Link>
                <Link href="https://www.linkedin.com/in/tristan-derez">
                    <Icon as={ImLinkedin} boxSize={12} />
                </Link>
                <Link href="https://twitter.com/doreizu">
                    <Icon as={ImTwitter} boxSize={12} />
                </Link>
            </HStack>
        </VStack>
    );
};
