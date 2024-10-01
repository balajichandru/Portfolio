import React from "react";
import { Heading, Text, Image, Flex, Divider } from '@chakra-ui/react'
import scb from '../asset/images/scb_logo.png';
import tt from '../asset/images/tt.jpg';
import adrenalin from '../asset/images/adrenalin.jpg';
import ducont from '../asset/images/ducont.jpeg';
import zylog from '../asset/images/zylog.png';

export default function Expereince() {
    return (
        <section className="experience">
            <Heading className="heading" p={0} mb={4}>Experience</Heading>
            {/* TCS */}
            <Flex flexDirection="row" alignItems="center" p={0} mb={5}>
                <Flex className="duration" justifyContent={'center'} flex="1">
                    <Flex flexDirection={"column"} justifyContent={'center'}>
                        <Image
                            borderRadius={'10px'}
                            boxSize='100px'
                            src={scb}
                            alt='Scb logo'
                            mb={4}
                        />
                        <Text>Jan,2022 - Jan,2023</Text>
                    </Flex>
                </Flex>
                <Divider orientation='vertical' h='320px' m={4} />
                <Flex className="exp_container" flexDirection={'column'} flex="3">
                    <Flex className="role" mb={2}>
                        <Heading >Senior Software Engineer</Heading>
                    </Flex>
                    <Flex className="org_name" mb={2}>
                        Tata Consultancy Services,
                        Chennai, India
                    </Flex>
                    <Flex>
                        <Text className="defaultFont">At Tata Consultancy Services, I worked in the healthcare vertical and led the shift from traditional server-based systems to cloud-native solutions for our clients.
                            My focus was on building serverless architectures using AWS Lambda, which meant optimizing how user access was controlled and making sure our applications worked seamlessly together.
                            I collaborated closely with various teams to design scalable cloud infrastructure,
                            which helped reduce AWS costs by 20% and significantly improved the systems' performance and flexibility.</Text>
                    </Flex>
                </Flex>
            </Flex>
            {/* Animaker */}
            <Flex flexDirection="row" alignItems="center" p={0} mb={5}>
                <Flex className="duration" justifyContent={'center'} flex="1">
                    <Flex flexDirection={"column"} justifyContent={'center'}>
                        <Image
                            borderRadius={'10px'}
                            boxSize='100px'
                            src={adrenalin}
                            alt='Adrenalin logo'
                            mb={4}
                        />
                        <Text>Jul 2018 - Dec 2021 </Text>
                    </Flex>
                </Flex>
                <Divider orientation='vertical' h='280px' m={4} />
                <Flex className="exp_container" flexDirection={'column'} flex="3">
                    <Flex className="role" mb={2}>
                        <Heading>Software Development Engineer</Heading>
                    </Flex>
                    <Flex className="org_name" mb={2}>
                        Animaker Inc
                    </Flex>
                    <Flex className="exp_content">
                        <Text className="defaultFont">
                            At Animaker, a company in the SaaS and digital media space,
                            I was instrumental in revamping their video-editing platform, replacing an outdated Flash-based system with a more secure, scalable solution.
                            I built key backend features like authentication (JWT), payment processing with Stripe, and file uploads via AWS S3.
                            I also led the development of Picmaker, a new graphic design tool, seeing the project through from concept to launch.
                            One of the coolest parts of my role was implementing real-time collaboration features using Socket.IO and Node.js, which made it possible for users to work together on videos in real time.
                            Additionally, I reduced data retrieval times by 30% by developing a caching-enabled search API.
                            This helped grow our user base and positioned the company for further success.</Text>
                    </Flex>
                </Flex>
            </Flex>
            {/* APA Engineering Private Limited */}
            <Flex flexDirection="row" alignItems="center" p={0} mb={5}>
                <Flex className="duration" justifyContent={'center'} flex="1">
                    <Flex flexDirection={"column"} justifyContent={'center'}>
                        <Image
                            borderRadius={'10px'}
                            boxSize='100px'
                            src={tt}
                            alt='TrueTech logo'
                            mb={4}
                        />
                        <Text>June,2017 - July, 2018</Text>
                    </Flex>
                </Flex>
                <Divider orientation='vertical' h='150px' m={4} />

                <Flex className="exp_container" flexDirection={'column'} flex="3">
                    <Flex className="role" mb={2}>
                        <Heading >Junior Developer</Heading>
                    </Flex>
                    <Flex className="org_name" mb={2}>
                        APA Engineering Private Limited ,
                        Chennai, India
                    </Flex>
                    <Flex className="org_name" mb={2}>
                        Focus: PHP, Node.Js, AngularJs, MySQL, CodeIgniter, Express.Js
                    </Flex>
                    <Flex className="exp_content">
                        <Text className="defaultFont">
                            At APA Engineering, working in the supply chain mangement industry, I helped improve how clients managed their eBay listings.
                            I created optimization tools that made listings more visible and helped drive more sales.
                            I also developed a reporting module that automated weekly insights for users,
                            which boosted engagement and helped retain clients.
                            These tools made a big impact on how our users performed on eBay,
                            contributing to their success and satisfaction.</Text>
                    </Flex>
                </Flex>
            </Flex>
            {/* Ducont */}
            <Flex flexDirection="row" alignItems="center" p={0} mb={5}>
                <Flex className="duration" justifyContent={'center'} flex="1">
                    <Flex flexDirection={"column"} justifyContent={'center'}>
                        <Image
                            borderRadius={'10px'}
                            boxSize='100px'
                            src={ducont}
                            alt='Ducont logo'
                            mb={4}
                        />
                        <Text>Mar,2017 - May,2017</Text>
                    </Flex>
                </Flex>
                <Divider orientation='vertical' h='145px' m={4} />

                <Flex className="exp_container" flexDirection={'column'} flex="3">
                    <Flex className="role" mb={2}>
                        <Heading > Software Developer Intern </Heading>
                    </Flex>
                    <Flex className="org_name" mb={2}>
                        APA Engineering Private Limited ,
                        Chennai, India
                    </Flex>

                </Flex>
            </Flex>
        </section>
    )
} 