import React, { useState } from "react";
import { Heading, Flex, Image, Box, Text, useBreakpointValue } from '@chakra-ui/react'
import mongo from '../asset/images/mongo.png'
import mozilla from '../asset/images/mozilla.jpeg'
import graphql from '../asset/images/graphql.jpeg'


export default function Certifcations() {
    const [certifications] = useState([
        {
            image: mongo,
            alt: 'mongo',
            description: 'MongoDb Associate Developer Certificate by MongoDb.'
        },
        {
            image: graphql,
            alt: 'graphql',
            description: 'GraphQL Associate Developer Certificate by Apollo Graphql.'
        },
        {
            image: mozilla,
            alt: 'mozilla',
            description: 'Javascript Foundations Professional Certificate by Mozilla.'
        }
    ]);
    const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });
    const imageWidth = useBreakpointValue({ base: '10%', md: '10%' });
    const textWidth = useBreakpointValue({ base: '90%', md: '90%' });

    return (
        <section className="certification-section">
            <Heading className="heading" p={0} mb={10}>Certifications</Heading>
            <Flex gap={5} flexDirection={"column"} mb={5}>
                {certifications.map((cert, index) => (
                    <Flex key={index} gap={1} flexDirection={flexDirection} alignContent={'center'} alignItems={'center'}>
                        <Box mb={2} width={imageWidth}>
                            <Image
                                borderRadius="10px"
                                src={cert.image}
                                alt={cert.alt}
                                _hover={{ transform: 'scale(1.1)' }}
                            />
                        </Box>
                        <Box width={textWidth}>
                            <Text fontSize='lg' mb={4}>
                                {cert.description}
                            </Text>
                        </Box>
                    </Flex>
                ))}
            </Flex>
        </section>
    )
}