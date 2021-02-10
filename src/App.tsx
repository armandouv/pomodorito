import * as React from "react"
import {Box, ChakraProvider, Heading, theme} from "@chakra-ui/react"

export const App = () => (
    <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
            <Heading as="h1">Pomodoro clock</Heading>
        </Box>
    </ChakraProvider>
)
