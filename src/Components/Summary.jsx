import React from "react";
import { Text, Heading, Flex, Link, Image, Button } from '@chakra-ui/react';
import github from '../asset/images/github.png'
import linkedin from '../asset/images/linkedin.png'
export default function Summary() {

    return (
        <section>
            <Heading p={0} mb={4} className="name-card">Hi, I'm Balaji Hariharan</Heading>

            <Text fontSize='lg' fontWeight={'502'} className="defaultFont">
                I am a Computer Science Master's graduate from the University at Buffalo(SUNY) with 6 years of professional experience as a Software Development Engineer.
                I specialize in Backend Engineering and have a proven track record of building stable, reliable systems using Python, Go, Node.Js,reactJs and AWS services.
                <br></br>
                <br></br>
                Please feel free to reach <Link >krisbalaji21@gmail.com </Link>
                Let’s connect to create impactful and innovative software together!
            </Text>
            <Flex justifyContent={'center'}>
                <Link href="https://www.linkedin.com/in/balaji-hariharan/" isExternal>
                    <Image
                        src={linkedin}
                        alt="LinkedIn"
                        boxSize="75px"
                        m={1}
                        _hover={{ transform: 'scale(1.1)' }}
                    />
                </Link>
                <Link href="https://github.com/balajichandru?tab=repositories" isExternal>
                    <Image
                        src={github}
                        alt="GitHub"
                        boxSize="75px"
                        m={1}
                        _hover={{ transform: 'scale(1.1)' }}
                    />
                </Link>
                <Flex justify="flex-end" align="center">
                    <a href='https://drive.google.com/file/d/1aQJPaKLdMLZM_rrEJVM42mTTqfMnLl0o/view' target="_blank" rel="noopener noreferrer">
                        <Button
                            bg="#ff5e6c"
                            color="white"
                            _hover={{ bg: '#5e0f8b' }}
                            h={12}
                            m={4}
                            px={6}
                            py={2}
                            fontSize="lg"
                            fontWeight="bold">
                            Resume
                        </Button>
                    </a>
                </Flex>
            </Flex>
        </section>
    )
}