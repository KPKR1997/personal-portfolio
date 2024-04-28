import styles from '@/styles/works.module.css';
import {useState, useEffect} from 'react';
import Navbar from "./components/navbar";
import Link from 'next/link';
import React from 'react';
import Footer from "./components/footer"
import Worktiles from "./components/worktiles"
import Head from "next/head";

export default function Profile(){

 const [darkmode, setDarkmode] = useState(false)

 const Darkmode = () =>{
    setDarkmode(!darkmode);}

//----------------------------------------------------------------------------
const brandImage = "./images/kp_logo.png";
const brandImageAlt = "./images/kp_log_3.png";
//----------------------------------------------------------------------------
const works = [
    {
        workname:"Dept. Website for University of Kerala",
        type:"Web/UI/UX",
        platforms:"HTML5, JavaScript, CSS, Firebase",
        thumbnail:"./images/thumbnails/dept.png",
        link:"https://department-of-physics-455cd.web.app/"
    },
    {
        workname:"Application prototype design",
        type:"UI Design",
        platforms:"Figma UI",
        thumbnail:"./images/thumbnails/figma.png",
        link:"https://www.figma.com/file/eltBEGrxrsLtw4EyH0PXuQ/CarePLUS?nodeid=0%3A1"
    },
    {
        workname:"Personal portfolio website",
        type:"UI/UX Design",
        platforms:"React.js, Node.js, AWS Cloud",
        thumbnail:"./images/thumbnails/personal.png",
        link:"https://krishnaprakash.in/"
    }
]

    return(
        <>
        <Head>
        <meta charset="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Krishnaprakash</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className = {darkmode? styles.mainDiv:styles.mainDiv_DM}>
              <Navbar darkmode = {darkmode} brandImage = {brandImage} brandImageAlt={brandImageAlt} Darkmode = {Darkmode}/>
                <div className = {styles.topRef}></div>
                <div className = {styles.workSection}>
                    <div className={styles.headingSection}>
                        <h1 className={darkmode?styles.headingText:styles.headingText_DM}>Recent Works</h1>
                    </div>
                    <div className = {styles.worksSubSection}>
                        {works.map(work=>(
                            <Worktiles thumbnail = {work.thumbnail}  type = {work.type} platforms = {work.platforms} workname = {work.workname} link = {work.link}/>
                        ))}
                    </div>
                </div>
            <Footer brandImg = {brandImage}/>
        </div>
    </>
    )
}

