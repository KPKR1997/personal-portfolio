import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/explore.module.css";
import Navbar from "@/components/navbar";
import VideoFrame from "@/components/videoFrame";
import VideoFrame2 from "@/components/videoFrame2";
import Link from 'next/link';
import React from 'react';

export default function Explore() {


    return(
        <div className={styles.main}>
        <Navbar/>
        
        <VideoFrame video = "/videos/developer_bg.mp4"
        Mainhead = "Full Stack Developer"
        salutation = "As a"
        image = "./images/mern.png"
        paragraph = "I build easy-to-use platforms for learning and sharing knowledge. Using MongoDB, Express.js, React.js, and Node.js, I create websites and apps that help people access education resources. I'm good at adding cool features like real-time chats and smart recommendations. I like working with others and making technology helpful for everyone."/>

        <VideoFrame2 video = "/videos/science.mp4"
        Mainhead = "Man of Science"
        salutation = "Being as a"
        image = ""
        paragraph = "I have a deep love for method of Science! Understanding the way the world works, from the tiniest particles to the vastness of space, captivates me endlessly. Exploring the laws that govern our universe fills me with excitement and wonder."/>
      
      <VideoFrame video = "/videos/b777.mp4"
        Mainhead = "Aviation Enthusiast"
        salutation = "Well I'm an"
        image = ""
        paragraph = "Spending time near to any active Runway makes me HAPPY... From commercial airliners to military jets, I'm fascinated by the diverse array of aircraft that grace the skies"/>
    </div>
    
    );
}
