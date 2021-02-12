import * as React from "react"
import {ChakraProvider, Heading, theme, VStack} from "@chakra-ui/react"
import Clock from "./clock/Clock";

export const App = () => (
    <ChakraProvider theme={theme}>
        <VStack spacing="2em">
            <Heading>Pomodoro clock</Heading>
            <Clock/>
        </VStack>
    </ChakraProvider>
)
