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
  const Hobbyimage1 = "./images/hobbies/ml.jpg";
  const Hobbyheading1 = "Machine learning and Science of data"
  const Hobbyparagraph1 = `" My journey into Machine Learning started as a curiosity, which a perfect blending point of Physics, 
  mathematics and advanced technology - turning numbers into insights, 
  training models, and seeing them improve with every iteration. Now, it's my favorite way to solve problems. 
  From predictions to NLP, I love diving into challenging datasets and optimizing algorithms. 
  More I learn, more I'm curious"` 

  const Hobbyimage2 = "./images/hobbies/science.jpg";
  const Hobbyheading2 = "Man of Science"
  const Hobbyparagraph2 = `"I have a deep love for method of Science ! Understanding the way the world works, from the tiniest particles to the 
                            vastness of space, captivates me endlessly. 
                            Exploring the laws that govern our universe fills me with excitement and wonder."`

  const Hobbyimage3 = "./images/hobbies/plane.jpg";
  const Hobbyheading3 = "Aviation Enthusiast"
  const Hobbyparagraph3 = `"Spending time near to any active Runway makes me HAPPY... 
                          From commercial airliners to military jets, I'm fascinated by the diverse array of aircraft that grace the skies"`

  const Hobbyimage4 = "./images/hobbies/rc.jpg";
  const Hobbyheading4 = "RC and DIYer"
  const Hobbyparagraph4 = `I'm a DIY enthusiast who loves electronics and RC hobbies. Right now, 
                          I'm tackling my biggest project yet: building a hyper-realistic RC Boeing 777. It's a challenge I'm excited to take on, 
                          and I can't wait to see this miniature marvel come to life through my craftsmanship.`


    return(
        <div className={darkmode?styles.main:styles.main_DM}>
        <Navbar darkmode = {darkmode} brandImage = {brandImage} brandImageAlt={brandImageAlt} Darkmode = {Darkmode}/>
        <div className = {styles.topRef}></div>
          <VideoFrame Hobbyimage ={Hobbyimage1} Hobbyheading = {Hobbyheading1} Hobbyparagraph = {Hobbyparagraph1}/>
          <VideoFrame2 Hobbyimage ={Hobbyimage2} Hobbyheading = {Hobbyheading2} Hobbyparagraph = {Hobbyparagraph2}/>
          <VideoFrame Hobbyimage ={Hobbyimage3} Hobbyheading = {Hobbyheading3} Hobbyparagraph = {Hobbyparagraph3}/>
          <VideoFrame2 Hobbyimage ={Hobbyimage4} Hobbyheading = {Hobbyheading4} Hobbyparagraph = {Hobbyparagraph4}/>
        </div>
    );
}
