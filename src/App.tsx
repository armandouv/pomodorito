import * as React from "react"
import {ChakraProvider, Heading, theme, VStack} from "@chakra-ui/react"
import Timer from "./timer/Timer";

export const App = () => (
    <ChakraProvider theme={theme}>
        <VStack spacing="2em">
            <Heading>Pomodoro timer</Heading>
            <Timer/>
        </VStack>
    </ChakraProvider>
)
