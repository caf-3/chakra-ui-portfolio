import { VStack, Heading, Flex } from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/button';
import { FaSun, FaMoon, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'
import { useColorMode } from '@chakra-ui/color-mode'
import { Spacer } from '@chakra-ui/react';
import Header from './components/Header'
import Social from './components/Social'
import Profile from './components/Profile'
function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'Dark';
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading as="h1" ml="8" size="lg" fontWeight="semibold" color="blue.400">TC</Heading>
        <Spacer />
        <IconButton ml={2} icon={<FaLinkedin />} isRound="true" />
        <IconButton ml={2} icon={<FaGithub />} isRound="true" />
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} onClick={toggleColorMode} isRound="true"></IconButton>
      </Flex>
      <Header />
      <Social />
      <Profile />
    </VStack>
  );
}

export default App;
