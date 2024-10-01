import React, { useState } from "react";
import { Heading, Flex, Image, Box, Text, useBreakpointValue } from '@chakra-ui/react'
import todoImage from '../asset/images/todoapp.png'
import emsImage from '../asset/images/ems.png'
import jsImage from '../asset/images/jobsphere.png'
import { useNavigate } from "react-router-dom";

export default function Projects() {
    const navigate = useNavigate();
    const [todoStack] = useState(['React', 'Redux', 'Chakra UI'])
    const [emsStack] = useState(['React', 'GraphQL', 'Node JS', 'Mongo DB', 'Chakra UI', 'Webpack'])
    const [jsStack] = useState(['React', 'Node JS', 'Mongo DB', 'Chakra UI', 'Jest'])

    const [jsDetail] = useState(`Jobsphere aims to develop an intuitive and efficient job board application using modern web technologies to bridge the gap between job seekers and employers.
                            It will feature a user-friendly interface, a comprehensive job board with advanced search capabilities,
                            user profiles for showcasing skills, and robust tools for employers to manage job listings and applications.
                            The platform is built with a technology stack including React, Node.js, Express, and MongoDB, ensuring scalability,
                            security, and a seamless user experience. This project serves as a capstone to address real-world job-matching challenges.`);

    const [emsDetail] = useState(`The Employment Management System is a comprehensive web application designed for robust management
                            of employee data. It supports complete CRUD (Create, Read, Update, Delete) operations, making it
                            highly effective for handling complex employee data. The integration of GraphQL enhances data
                            interaction capabilities, improving overall efficiency and responsiveness. This system demonstrates
                            the successful use of modern web technologies to streamline and optimize employment data management
                            processes, making it a vital tool for organizations.`);

    const [todoDetail] = useState(`The ToDo App is a user-friendly task management tool designed to efficiently organize daily tasks.
                            It supports full CRUD operations, enabling task addition, editing, deletion, and filtering.
                            These functionalities are integrated through a clean and responsive interface, ensuring a seamless
                            user experience. Redux is employed for state management, enhancing the app's consistency and
                            reliability, while Chakra UI ensures the interface is accessible and visually appealing.
                            This application serves as a prime example of leveraging modern web technologies to create scalable
                            and interactive applications.`);
    const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });

    function onClickProject(projectName, projectImage, projectStack, projectDetails) {
        navigate(`/project-details`, {
            state: { name: projectName, image: projectImage, stack: projectStack, details: projectDetails }
        });
    }

    return (
        <section className="project-section">
            <Heading className="heading" p={0} mb={10}>Projects</Heading>
            <Flex flexDirection={flexDirection} gap={10} mb={5}>
                {/* JobSphere Project */}
                <Box
                    width={useBreakpointValue({ base: '100%', md: '40%' })}
                    mb={4}
                    pr={10}
                    onClick={() => onClickProject('JobSphere', jsImage, jsStack, jsDetail)}
                    cursor="pointer"
                >
                    <Image
                        className="project-image"
                        src={jsImage}
                        alt="Jobsphere"
                        m={1}
                        _hover={{ transform: 'scale(1.1)' }}
                        borderRadius="10px"
                        mb={5}
                    />
                    <Flex flexDirection={'row'} justifyContent={'space-around'} alignContent={'center'}>
                        <Text>JobSphere</Text>
                    </Flex>
                </Box>

                {/* EMS Project */}
                <Box
                    width={useBreakpointValue({ base: '100%', md: '40%' })}
                    mb={4}
                    pr={10}
                    onClick={() => onClickProject('Employee Management System', emsImage, emsStack, emsDetail)}
                    cursor="pointer"
                >
                    <Image
                        className="project-image"
                        src={emsImage}
                        alt="EMS App"
                        m={1}
                        _hover={{ transform: 'scale(1.1)' }}
                        borderRadius="10px"
                        mb={5}
                    />
                    <Flex flexDirection={'row'} justifyContent={'space-around'} alignContent={'center'}>
                        <Text>EMS</Text>
                    </Flex>
                </Box>

                {/* Todo Project */}
                {/* <Box
                    width={useBreakpointValue({ base: '100%', md: '40%' })}
                    mb={4}
                    pr={10}
                    onClick={() => onClickProject('ToDo', todoImage, todoStack, todoDetail)}
                    cursor="pointer"
                >
                    <Image
                        className="project-image"
                        src={todoImage}
                        alt="Todo App"
                        m={1}
                        _hover={{ transform: 'scale(1.1)' }}
                        borderRadius="10px"
                        mb={5}
                    />
                    <Flex flexDirection={'row'} justifyContent={'space-around'} alignContent={'center'}>
                        <Text>TODO</Text>
                    </Flex>
                </Box> */}
            </Flex>
        </section>
    );
}