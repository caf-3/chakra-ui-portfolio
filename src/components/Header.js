import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery } from '@chakra-ui/media-query'
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { Button, Image } from "@chakra-ui/react";
import image01 from '../assets/me.jpg';

const Header = () => {

    const { colorMode } = useColorMode();
    const [ isNotSmallerScreen ] = useMediaQuery("(min-width: 700px)")
    const isDark = colorMode === 'dark';
    return(
        <Stack>
            <Circle 
            position="absolute" 
            bg="blue.100"
            opacity="0.1"
            w="300px"
            h="300px"
            alignSelf="flex-end"
            />
            <Flex
            direction={isNotSmallerScreen ? "row" : "column"}
            p={isNotSmallerScreen ? "32" : "0"}
            alignSelf="flex-start"
            >
                <Box mt={isNotSmallerScreen ? "0": 16}
                alignSelf="flex-start">
                    <Text fontSize="5xl"
                      fontWeight="semibold">Olá, chamo-me</Text>
                    <Text 
                    fontSize="7xl"
                    fontWeight="bold"
                    bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
                    bgClip="text"
                    >Tomás Caetano Matsolo</Text>
                    <Text fontSize="2xl" color={isDark ? "gray.200" : "gray.500"}>
                        Sou programador FullStack JavaScript - NodeJs, MongooDB, ReactJs
                     </Text>
                    <Button mt={8} colorScheme="blue"
                    onClick={() => window.open("https://www.linkedin.com/in/tomas-caetano-12a5b11b3/")}>Contrate-me</Button>
                    
                </Box>
                <Image
                    alignSelf="center"
                    mt={isNotSmallerScreen ? 0 : 12}
                    mb={isNotSmallerScreen ? 0 : 12}
                    borderRadius="50%"
                    backgroundColor="transparent"
                    boxShadow="lg"
                    boxSize="300px"
                    zIndex={1}
                    src={image01}
                    />
            </Flex>
        </Stack>
    )
}

export default Header;