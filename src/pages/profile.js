import styles from '@/styles/profile.module.css';
import Head from "next/head";
import {useState, useEffect} from 'react';
import Navbar from "./components/navbar";
import Link from 'next/Link';
import React from 'react';
import {Footer} from "./components/footer"

export default function Profile(){

 const [darkmode, setDarkmode] = useState(false)

 const Darkmode = () =>{
    setDarkmode(!darkmode);}

//----------------------------------------------------------------------------
const brandImage = "./images/kp_logo.png";
const brandImageAlt = "./images/kp_log_3.png";
//----------------------------------------------------------------------------
const profileImage = "./images/profile.png";
const CV_file = "./files/KRISHNA_PRAKASH_RESUME_APRIL24.pdf";

    return(
        <>
        <Head>
     <meta charset="utf-8" />
     <link rel="shortcut icon" href="/favicon.ico" />
     <title>Krishnaprakash</title>
     <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
        <div className = {darkmode?styles.main:styles.main_DM}>
            <Navbar darkmode = {darkmode} brandImage = {brandImage} brandImageAlt={brandImageAlt} Darkmode = {Darkmode}/>
            <div className = {styles.topRef}></div>
            <div className = {styles.mainSection}>
                <div className = {darkmode? styles.Imgdiv:styles.Imgdiv_DM}>
                    <img src = {profileImage} className = {darkmode?styles.profileImage:styles.profileImage_DM}/>
                </div>
                <div className = {darkmode? styles.bioDetailsDiv:styles.bioDetailsDiv_DM}>
                    <h1>KRISHNAPRAKASH K R</h1><br/><br/>
                    <p>krishnaprakash997@gmail.com</p>
                    <p>+91 90 72 982 929</p>
                    <p> Bengaluru, IN </p>
                    {/* <p>Home: Alappuzha, IN </p><br/> */}
                    <p className = {styles.malayalam}>English, മലയാളം</p>
                </div>
                <div className = {styles.downloadCvDiv}>
                    <a href = {CV_file} className={styles.downloadLink}><div className ={styles.downloadBtn}><h3>Download CV</h3></div></a>
                </div>
            </div>
            <Footer brandImg = {brandImage}/>
        </div>
    </>
    )
}
