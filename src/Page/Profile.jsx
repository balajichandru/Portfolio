import React from "react";
import Footer from '../Components/Footer'
// import Header from '../Components/Header'
import ProfilePicture from '../Components/ProfilePicture'
import Summary from '../Components/Summary'
import Expereince from '../Components/Experience'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
// import Certifcations from '../Components/Certification'
export default function Profile() {


    return (
        <>
            {/* Header Section */}
            {/* <Header></Header> */}

            {/* Body Section*/}
            <div className="container">

                {/* Profile Picture*/}
                <ProfilePicture />

                {/* Summary */}
                <Summary />

                {/* Experience */}
                <Expereince />

                {/* Projects */}
                <Projects />

                {/* Skill */}
                <Skills />

                {/* Certification */}
                {/* <Certifcations /> */}

            </div >

            {/* Footer Section */}
            <Footer></Footer>
        </>

    )
}