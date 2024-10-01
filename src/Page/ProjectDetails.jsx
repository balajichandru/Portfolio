import { useLocation } from "react-router-dom";
import { Box, Heading, Image, Text, HStack, Tag, Button } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons"; // Import the left arrow icon


export default function ProjectDetails() {
    const location = useLocation();
    const { name, image, stack, details } = location.state || {};

    return (
        <>

            <Box p={8} maxWidth="800px" mx="auto">
                {/* Title Header */}
                <Heading as="h1" mb={5} textAlign="center">
                    {name}
                </Heading>
                {/* Image of the project */}
                <Image
                    src={image}
                    alt={`${name} Image`}
                    borderRadius="10px"
                    mb={6}
                    boxShadow="lg"
                />

                {/* Tech Stack Section */}
                <Heading as="h2" size="lg" mb={3}>
                    Tech Stack
                </Heading>
                <HStack spacing={2} width={'100%'} wrap={'wrap'} justifyContent={'center'}>
                    {stack?.map((tech, index) => (
                        <Tag key={index} borderRadius={'1em'} variant='solid'
                            height={'1.75rem'}
                            minWidth={'5rem'}
                            colorScheme='purple'
                            justifyContent={'center'}
                            alignItems={'center'}
                            alignContent={'center'}>
                            {tech}
                        </Tag>
                    ))}
                </HStack>

                {/* Project Details */}
                <Box mt={8}>
                    <Heading as="h2" ssize="lg" mb={3}>
                        Project Details
                    </Heading>
                    <Text fontSize="lg" lineHeight="tall">
                        {details}
                    </Text>
                </Box>
                <Button
                    bg="#6a0dad"
                    color="white"
                    _hover={{ bg: '#5e0f8b' }}
                    h={12}
                    m={4}
                    fontSize="lg"
                    fontWeight="bold"
                    position="absolute"
                    // top="1rem"
                    left=".5rem"
                    // zIndex="1"
                    leftIcon={<ArrowBackIcon bg={'#6a0dad'} _hover={{ bg: '#5e0f8b' }} />}
                    onClick={() => window.history.back()}
                >
                    Back
                </Button>
            </Box >
        </>

    );
}
