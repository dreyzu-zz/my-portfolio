import * as React from "react";
import { ChakraProvider, VStack } from "@chakra-ui/react";
import { theme } from "../theme";

function HomePage({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default HomePage;
