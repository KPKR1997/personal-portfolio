import {useState, useEffect} from 'react';
import Navbar from "./components/navbar";
import React from 'react';
import Footer from "./components/footer"
import styles from "@/styles/connect.module.css";
import Head from "next/head";
import Form from "./components/inputForm"



export default function Connect() {

const [darkmode, setDarkmode] = useState(false)

const Darkmode = () =>{
    setDarkmode(!darkmode);}


  //----------------------------------------------------------------------------
const brandImage = "./images/kp_logo.png";
const brandImageAlt = "./images/kp_log_3.png";
//----------------------------------------------------------------------------

  return (
    <>
    <Head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <title>Krishnaprakash</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
      <div className={darkmode?styles.main:styles.main_DM}>
        <Navbar darkmode = {darkmode} brandImage = {brandImage} brandImageAlt={brandImageAlt} Darkmode = {Darkmode}/>
        <div className = {styles.topRef}></div>
        <div className = {styles.connectSection}>
          <div className = {styles.connectTitleSection}>
              <h1 className = {styles.connectHeading}>Connect</h1>
              <h1 className = {styles.connectHeading}>Collaborate</h1>
              <h1 className = {styles.connectHeading}>Build</h1>
              <p className = {darkmode?styles.connectSubhead:styles.connectSubhead_DM}>Share your great ideas</p>
          </div>
          <div className = {styles.connectFormSection}>
            {/* <input className = {styles.connectInput} placeholder = "NAME"/>
            <input className = {styles.connectInput} placeholder = "E-mail"/>
            <input className = {styles.connectInput} placeholder = "Professions, work location"/>
            <input className = {styles.connectInputDesc} placeholder = "Share your ideas and thoughts"/>
            <button className = {styles.connectBtn}>Share</button> */}
            <Form darkmode = {darkmode}/>
          </div>
        </div>
        <Footer brandImg = {brandImage}/>
      </div>
      
    </>
  );
}