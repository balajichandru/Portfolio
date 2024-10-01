import React, { useState } from "react";
import { Heading, Image, Flex, Box, Text, useBreakpointValue } from '@chakra-ui/react'
import showskill from '../asset/images/showskill.png'
import html from '../asset/images/html.png'
import css from '../asset/images/css.png'
import bootstarp from '../asset/images/bootstrap.png'
import angular from '../asset/images/angular.png'
import ts from '../asset/images/ts.png'
import js from '../asset/images/js.png'
import react from '../asset/images/react.png'
import node from '../asset/images/nodejs.png'
import sql from '../asset/images/mysql.png'
import mongo from '../asset/images/mongo.png'
import webpack from '../asset/images/webpack.png'
import redux from '../asset/images/redux.png'
import ngrx from '../asset/images/ngrx.png'
import rxjs from '../asset/images/rxjs.png'
import skillMobile from '../asset/images/skills-mobile.png';



export default function Skills() {

    const imageSrc = useBreakpointValue({
        base: skillMobile,
        md: showskill,
    });

    const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });


    const [skills] = useState([
        { name: "Javascript", path: js },
        { name: "Typescript", path: ts },
        { name: "Angular", path: angular },
        { name: "React", path: react },
        { name: "Redux", path: redux },
        { name: "NgRx", path: ngrx },
        { name: "RxJS", path: rxjs },
        { name: "Node Js", path: node },
        { name: "Mongo DB", path: mongo },
        { name: "My SQL", path: sql },
        { name: "HTML", path: html },
        { name: "CSS", path: css },
        { name: "Bootstrap", path: bootstarp },
        // { name: "Webpack", path: webpack },

    ])
    return (
        <section className="skill">
            <Heading className="heading" p={0} mb={4}>Skills</Heading>
            <Flex flexDirection={flexDirection} className="skill-box" gap={4} mb={5}>
                <Box width={useBreakpointValue({ base: '100%', md: '30%' })} mb={4}>
                    <Flex p={0} mb={5} flexDirection="column" alignItems="center">
                        <Image
                            className="skill-image"
                            src={imageSrc}
                            alt='Skill Picture'
                        />
                    </Flex>
                </Box>
                <Box width={useBreakpointValue({ base: '100%', md: '70%' })}>
                    <Flex flexDirection="row" flexWrap="wrap" justifyContent={'center'} gap={10}>
                        {skills && skills.map((data, index) => (
                            <Box key={index} borderRadius="10px" boxSize="85px" display="flex" flexDirection="column" alignItems="center">
                                <Image
                                    src={data.path}
                                    alt={data.name}
                                    m={1}
                                    _hover={{ transform: 'scale(1.1)' }}
                                />
                                <Text>{data.name}</Text>
                            </Box>
                        ))}
                    </Flex>

                </Box>
            </Flex>

        </section>
    )
}