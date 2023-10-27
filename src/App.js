import React from 'react';
import {
  Box,
  Flex,
  Text,
  Image,
  VStack,
  HStack,
  IconButton,
  Button,
  useBreakpointValue,
  List,
  ListItem,
  ListIcon,
  Link,
} from '@chakra-ui/react';
import { EmailIcon, PhoneIcon, CheckCircleIcon, ExternalLinkIcon, SettingsIcon } from '@chakra-ui/icons';

function App() {
  const buttonSize = useBreakpointValue({ base: 'md', md: 'lg' });
  const textSize = useBreakpointValue({ base: 'md', md: 'lg' });
  const cardHeight = useBreakpointValue({ base: '80vh', md: 'auto' });
  const isLoggedIn = true;

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minHeight="100vh"
      padding={4}
      bg="gray.100"
    >
      <Box
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        width={['95%', '75%', '60%']}
        minHeight={cardHeight}
        bg="white"
        display="flex"
        flexDirection="column"
      >
        <Image
          src="https://placekitten.com/400/200"
          alt="Business header"
          width="100%"
        />
        <VStack align="start" p={[3, 4, 5]} flex="1">
          <Text fontSize={['xl', '2xl']} fontWeight="bold">
            John Doe
          </Text>
          <Text fontSize={['md', 'lg']} color="gray.500">
            Software Developer
          </Text>
          <Text fontSize={['md', 'lg']} color="gray.600">
            📧 john.doe@example.com
          </Text>
          <Text fontSize={['md', 'lg']} color="gray.600">
            📞 +123456789
          </Text>
          <HStack spacing={[3, 4, 5]}>
            <IconButton
              size={buttonSize}
              variant="outline"
              colorScheme="teal"
              aria-label="Email"
              icon={<EmailIcon />}
              onClick={() => {
                window.location.href = 'mailto:john.doe@example.com';
              }}
            />
            <IconButton
              size={buttonSize}
              variant="outline"
              colorScheme="blue"
              aria-label="Call"
              icon={<PhoneIcon />}
              onClick={() => {
                window.location.href = 'tel:+123456789';
              }}
            />
          </HStack>
          <Text fontSize={textSize}>
            I'm a badass dev who loves building shit that scales. Let's make
            something epic.
          </Text>
          <Text fontSize={['md', 'lg']} fontWeight="bold">
            Skills
          </Text>
          <List spacing={2}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              JavaScript
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              ReactJS
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              Node.js
            </ListItem>
          </List>
          <Text fontSize={['md', 'lg']} fontWeight="bold">
            Experience
          </Text>
          <Text fontSize={['sm', 'md']}>
            Software Engineer at Awesome Co., 2019-2021
          </Text>
          <Text fontSize={['sm', 'md']}>
            Full-stack Developer at Super Devs, 2017-2019
          </Text>
          <Text fontSize={['md', 'lg']} fontWeight="bold">
            Projects
          </Text>
          <List spacing={2}>
            <ListItem>
              <Link href="https://github.com/johndoe/project1" isExternal>
                Project 1 <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/johndoe/project2" isExternal>
                Project 2 <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
          </List>
          <Text fontSize={['md', 'lg']} fontWeight="bold">
            Education
          </Text>
          <Text fontSize={['sm', 'md']}>
            B.S. in Computer Science, University of Code, 2015-2019
          </Text>
          <Text fontSize={['md', 'lg']} fontWeight="bold">
            Languages
          </Text>
          <Text fontSize={['sm', 'md']}>
            English, Spanish
          </Text>
          <Text fontSize={['md', 'lg']} fontWeight="bold">
            Interests
          </Text>
          <Text fontSize={['sm', 'md']}>
            Coding, Hiking, Gaming
          </Text>
        </VStack>
      </Box>
      <Flex className="align-left" marginTop={4}>
        <Button colorScheme="teal" variant="solid" paddingX={8} marginX={4}>
          Login
        </Button>
        {isLoggedIn && (
          <Button rightIcon={<SettingsIcon />} colorScheme="teal" variant="outline" paddingX={4} marginX={4}>
            Settings
          </Button>
        )}
      </Flex>
    </Flex>

  );
}

export default App;
