import * as React from "react";
import { ChakraProvider, VStack } from "@chakra-ui/react";
import { theme } from "../theme";
import Head from "next/head";

function HomePage({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Head>
                <title>Tristan Derez</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <link rel="shortcut icon" href="/favicon.svg" />
            </Head>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default HomePage;
