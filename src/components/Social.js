import { HStack } from '@chakra-ui/layout'
import { Icon  } from '@chakra-ui/icon'
import { FaLinkedin, FaGithub }  from 'react-icons/fa'
const Social = () => {
    return(
        <HStack spacing="4">
            <Icon as={FaLinkedin} boxSize="50" />
            <Icon as={FaGithub} boxSize="50" />
        </HStack>
    )
}
export default Social;