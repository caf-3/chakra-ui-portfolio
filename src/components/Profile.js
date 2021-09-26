import { useMediaQuery } from '@chakra-ui/media-query'
import { Box, Divider, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { FaCode, FaDatabase, FaDesktop, FaGlobe } from 'react-icons/fa'

const Profile = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 700px)")
    return (
        <Flex
            direction={isNotSmallerScreen ? "row" : "column"}
            w="100%"
            maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
        >
            <Box alignSelf="center" px="32" py="16">
                <Heading
                    fontWeight="extrabold"
                    color="cyan.500"
                    size="4xl">2</Heading>
                <Text fontSize="2xl" color="gray.400">Anos de experiência</Text>
            </Box>
            <Box alignSelf="center" py="16">
                <Text fontSize="2xl" fontWeight="bold">
                    Como programador, especializado na criação de páginas responsivas
                </Text>
                <Flex
                    direction={isNotSmallerScreen ? "row" : "column"}
                    mt={8}
                >
                    <Flex
                        rounded="xl"
                        direction="column"
                        mt={4}
                        bg="blue.400"
                        h="30vh"
                        w="30vh"
                        justify="flex-end"
                        _hover={{ bg: "purple.600"}}
                        p="4"
                    >
                        <Icon color="white" as={FaDesktop} w="14" h="14" mb="14" />
                        <Text color="white" fontSize="xl" fontWeight="semibold">
                            Front-end
                        </Text>
                    </Flex>

                    <Flex
                        rounded="xl"
                        direction="column"
                        mt={4}
                        bg="blue.400"
                        h="30vh"
                        w="30vh"
                        justify="flex-end"
                        _hover={{ bg: "purple.600"}}
                        p="4"
                        ml={isNotSmallerScreen ? "4" : 0}
                    >
                        <Icon color="white" as={FaCode} w="14" h="14" mb="14" />
                        <Text color="white" fontSize="xl" fontWeight="semibold">
                            Backend
                        </Text>
                    </Flex>

                    <Flex
                        rounded="xl"
                        direction="column"
                        mt={4}
                        bg="blue.400"
                        h="30vh"
                        w="30vh"
                        justify="flex-end"
                        _hover={{ bg: "purple.600"}}
                        p="4"
                        ml={isNotSmallerScreen ? "4" : 0}
                    >
                        <Icon color="white" as={FaDatabase} w="14" h="14" mb="11.9" />
                        <Text color="white" fontSize="xl" fontWeight="semibold">
                            Databases (Mysql & MongoDB)
                        </Text>
                    </Flex>

                </Flex>
            </Box>
        </Flex>
    )
}
export default Profile;