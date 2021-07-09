import { extendTheme } from "@chakra-ui/react";
import "@fontsource/nunito-sans";
import "@fontsource/rubik";
import { mode } from "@chakra-ui/theme-tools";

export const theme = extendTheme({
    colors: {
        slategray: {
            100: "#cfdbe0",
            200: "#b6c3c7",
            300: "#9ca9af",
            400: "#819197",
            500: "#68777e",
            600: "#505d63",
            700: "#374248",
            800: "#1e292d",
            900: "#020e17",
        },
        opal: {
            100: "#cfe0e0",
            200: "#b4caca",
            300: "#98b5b5",
            400: "#7c9f9f",
            500: "#638686",
            600: "#4c6969",
            700: "#354b4b",
            800: "#1d2e2e",
            900: "#001111",
        },
        babypowder: {
            100: "#f2f2f2",
            200: "#d9d9d9",
            300: "#bfbfbf",
            400: "#a6a6a6",
            500: "#8c8c8c",
            600: "#737373",
            700: "#595959",
            800: "#404040",
            900: "#262626",
        },
        ochre: {
            100: "#f6d6bb",
            200: "#ebbc94",
            300: "#e1a26b",
            400: "#d78742",
            500: "#bd6e28",
            600: "#94551e",
            700: "#6a3d14",
            800: "#412407",
            900: "#1c0a00",
        },
        raisinblack: {
            100: "#d9d8da",
            200: "#bebdbf",
            300: "#a5a4a5",
            400: "#8a8a8b",
            500: "#727172",
            600: "#585859",
            700: "#3f3e40",
            800: "#262527",
            900: "#100a10",
        },
    },
    fonts: {
        heading: "Nunito Sans",
        body: "Rubik",
    },
    styles: {
        global: (props) => ({
            body: {
                bg: mode("babypowder.100 : babypowder.800")(props),
            },
            html: {
                scrollBehavior: "smooth",
            },
        }),
    },
});
