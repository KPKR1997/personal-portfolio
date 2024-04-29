import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/explore.module.css";
import Navbar from "@/components/navbar";
import VideoFrame from "@/components/videoFrame";
import VideoFrame2 from "@/components/videoFrame2";
import Link from 'next/link';
import React from 'react';
import {useState, useEffect} from 'react';

export default function Explore(props) {

  const [darkmode, setDarkmode] = useState(false)

  const Darkmode = () =>{
    setDarkmode(!darkmode);}


  //----------------------------------------------------------------------------
  const brandImage = "./images/kp_logo.png";
  const brandImageAlt = "./images/kp_log_3.png";  
  //-----------------------------------------------------
  const Hobbyimage1 = "./images/hobbies/mern.jpg";
  const Hobbyheading1 = "Full stack Developer"
  const Hobbyparagraph1 = `" I build easy-to-use platforms for People ans business. 
                Using MongoDB, Express.js, React.js, and Node.js, I create websites 
                and apps that help people access education resources. I like collaborating and making technology for everyone."` 

  const Hobbyimage2 = "./images/hobbies/science.jpg";
  const Hobbyheading2 = "Man of Science"
  const Hobbyparagraph2 = `"I have a deep love for method of Science! Understanding the way the world works, from the tiniest particles to the 
                            vastness of space, captivates me endlessly. 
                            Exploring the laws that govern our universe fills me with excitement and wonder."`

  const Hobbyimage3 = "./images/hobbies/plane.jpg";
  const Hobbyheading3 = "Aviation Enthusiast"
  const Hobbyparagraph3 = `"Spending time near to any active Runway makes me HAPPY... 
                          From commercial airliners to military jets, I'm fascinated by the diverse array of aircraft that grace the skies"`


    return(
        <div className={darkmode?styles.main:styles.main_DM}>
        <Navbar darkmode = {darkmode} brandImage = {brandImage} brandImageAlt={brandImageAlt} Darkmode = {Darkmode}/>
        <div className = {styles.topRef}></div>
          <VideoFrame Hobbyimage ={Hobbyimage1} Hobbyheading = {Hobbyheading1} Hobbyparagraph = {Hobbyparagraph1}/>
          <VideoFrame2 Hobbyimage ={Hobbyimage2} Hobbyheading = {Hobbyheading2} Hobbyparagraph = {Hobbyparagraph2}/>
          <VideoFrame Hobbyimage ={Hobbyimage3} Hobbyheading = {Hobbyheading3} Hobbyparagraph = {Hobbyparagraph3}/>
        </div>
    );
}
