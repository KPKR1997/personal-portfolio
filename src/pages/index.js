import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Navbar from "./components/navbar";
import Link from 'next/Link';
import React from 'react';
import Video from 'next-video';
import {useState, useEffect} from 'react';
import {Typing} from "./components/typingeffect";
import {Timeline} from "./components/timelineSlider"
import {Form} from "./components/inputForm"
import {Footer} from "./components/footer"





export default function Home() {

 

  // -----------------------------------------------------------------------------------------------------

  const [darkmode, setDarkmode] = useState(false)

  const Darkmode = () =>{
    setDarkmode(!darkmode);
}

  // ---------------------------------------------------------------------------------------------------------------------------------
        const brandImage = "./images/kp_logo.png";
        const brandImageAlt = "./images/kp_log_3.png";
  // --------------------------------------------------------------------------------------
        const splashPicture = "./images/splash2.png";
        const splashCaptionLine1 = "Semiconductor production yield Engineer";
        const splashCaptionLine2 = "";
   // --------------------------------------------------------------------------------------
        const gitDark = "images/github.png";
        const instaDark = "images/insta_logo.png";
        const linkedInDark = "images/linkedin_icon.png";
  //  ------------------------------------------------------------------------------------
        const gitLight = "images/github_2.png";
        const instaLight = "images/insta_logo_2.png";
        const linkedInLight = "images/linkedin_icon_2.png";
  //  -----------------------------------------------------------------------------------
        const Typetext1 = "Developer";
        const Typetext2 = "UI Designer";
        const Typetext3 = "Data Analyst";
        const Typetext4 = "Science Geek";
        const Typetext5 = "Aviation enthusiast";
  //  -----------------------------------------------------------------
        const aboutMeHeading = "A Brief about me"
        const aboutMeText = `I'm currently serving a role as semiconductor yield engineer for an Incorporated company based on U.S. 
                              Also would like to be identified as A Full stack developer and UX/UI designer based on JavaScript using React.js, 
                              MongoDB, Node.js with Express and Rest APIs.`
        const aboutMeText2 = `My Acadamic background is Science, well....yeah I hold a Post graduation degree in Physics. So happy that
                              I could study the subject I loved from my younger age up to Master's level. It framed me to live my life 
                              as a "Man of science" means happy and feeling good.
                             Apart from all of these, I'm engaged myself in crazy hobbies and spending time for satisfying my endless enthusisasm
                              in Technology, Arduino Robotics,RC Crafts, Computer science, Automobile and Die cast, Aviation 
                              ( Yes, spotting an active Runway makes my innermind great ) and so on......`
                              
  //---------------------------------------------------------------------------
        const Exptitle1 = "Yield Engineer"
        const Exptitle2 = "Intern"
        const Exptitle3 = "Propreitor"
        const Expdate1 = "Oct 2022 -"
        const Expdate2 = "Mar 2022"
        const Expdate3 = "June 2021"
        const ExpDesc1 = "GlobalFoundries Inc. Large volume production data monitoring and Root cause analysis using Systematic process control via statistical approach"
        const ExpDesc2 = "Yield monitoring and Electrical charecterization disposition"
        const ExpDesc3 = "CarePLUS, incubated by KUBIIC Student Start up programme, University of Kerala" 
        
  //----------------------------------------------------------------------------

  return (
    <div>
    <Head>
     <meta charset="utf-8" />
     <link rel="shortcut icon" href="/favicon.ico" />
     <title>Krishnaprakash</title>
     <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
      <div className={darkmode? styles.main : styles.main_DM}>
        <Navbar darkmode = {darkmode} brandImage = {brandImage} brandImageAlt={brandImageAlt} Darkmode = {Darkmode}/>
        <div className={styles.topRef}></div>
        <div className = {styles.splashWindow}>
          <div className = {styles.splashCaption}>
            <div className = {darkmode? styles.splashText : styles.splashText_DM}>
              <h2>Hi, I'm Krishnaprakash</h2>
              <Typing darkmode = {darkmode} text1={Typetext1} text2 = {Typetext2} text3 = {Typetext3} text4 ={Typetext4} text5 ={Typetext5}/>
              <p>{splashCaptionLine1}<br/> <br/>{splashCaptionLine2}</p>
            </div>
            <div className = {styles.socialMedia}>
              <Link href = "https://github.com/KPKR1997" className = {styles.socialMediaLink}><img src = {darkmode? gitDark : gitLight} className = {styles.socialMediaItem}/></Link>
              <Link href = "https://www.linkedin.com/in/krishnaprakash97/" className = {styles.socialMediaLink}><img src = {darkmode? linkedInDark : linkedInLight} className = {styles.socialMediaItem}/></Link>
              <Link href = "https://www.instagram.com/kp_____._/" className = {styles.socialMediaLink}><img src = {darkmode? instaDark : instaLight} className = {styles.socialMediaItem}/></Link>
              <Link href = "https://www.facebook.com/krishnaprakash.kr" className = {styles.socialMediaLink}><img src = "images/fb.png" className = {styles.socialMediaItem}/></Link>
            </div>
          </div>
          <div className={styles.splashImg}>
             <img src = {splashPicture} className = {darkmode? styles.splashPicture:styles.splashPicture_DM}/>
          </div>
        </div>
        {/* ________________________________________________________________________________________________________________________ */}

        <div className = {styles.aboutSection}>
          <div className = {darkmode? styles.aboutMeMain: styles.aboutMeMain_DM}>
            <h1>{aboutMeHeading}</h1><br/><br/>
            <p>{aboutMeText}</p><br/>
            <p>{aboutMeText2}</p><br/>
            {/* <p>{aboutMeText3}</p> */}
          </div>
          <Link href = "/explore" className={styles.exploreBtnLink}><div className = {styles.exploreBtn}><h3>Explore my HobbbySpace</h3><h2>&gt;</h2></div></Link>
        </div>
        <div className = {styles.expSkillsSection}>
          <div className={styles.expSection}>
              <h1 className = {darkmode? styles.expHeading:styles.expHeading_DM}>Experience</h1>
              <div className = {styles.timelineSection}>
              <Timeline props = {darkmode} 
              title1 = {Exptitle1}
              title2 = {Exptitle2}
              title3 = {Exptitle3}
              date1 = {Expdate1}
              date2 = {Expdate2}
              date3 = {Expdate3}
              expDesc1 = {ExpDesc1}
              expDesc2 = {ExpDesc2}
              expDesc3 = {ExpDesc3}/>
              </div>
            </div>
            <div className = {styles.skillSection}>
              <h1 className = {darkmode? styles.skillsHeading:styles.skillsHeading_DM}>Skills</h1>
              <div className = {styles.skills}>
              <Link href ="https://www.javascript.com/"><img src  = "./images/skills/javascript.png"  className = {styles.skillsTiles}/></Link>
              <Link href ="https://react.dev/"><img src  = "./images/skills/react.png"  className = {styles.skillsTiles}/></Link>
              <Link href ="https://nodejs.org/en"><img src  = "./images/skills/node.png"  className = {styles.skillsTiles}/></Link>
              <Link href ="https://www.mongodb.com/"><img src  = "./images/skills/mongo.png"  className = {styles.skillsTiles}/></Link>
              <Link href ="https://code.visualstudio.com/"><img src  = "./images/skills/vscode.png"  className = {styles.skillsTiles}/></Link>
              <Link href ="https://git-scm.com/"><img src  = "./images/skills/git.png"  className = {styles.skillsTiles}/></Link>
              <Link href ="https://html.com/html5/"><img src  = "./images/skills/html.png"  className = {styles.skillsTiles}/></Link>
              <Link href ="https://css3.com/"><img src  = "./images/skills/css.png"  className = {styles.skillsTiles}/></Link>
              <Link href ="https://aws.amazon.com/?nc2=h_lg"><img src  = "./images/skills/awsec2.png"  className = {styles.skillsTiles}/></Link>
              <Link href ="https://www.figma.com/"><img src  = "./images/skills/figma.png"  className = {styles.skillsTiles}/></Link>
              <Link href ="https://www.microsoft.com/en-us/power-platform/products/power-bi"><img src  = "./images/skills/powerbi.png"  className = {styles.skillsTiles}/></Link>
              <Link href ="https://www.microsoft.com/en-in/microsoft-365/microsoft-office"><img src  = "./images/skills/msoffice.png"  className = {styles.skillsTiles}/></Link>
              </div>
            </div>
         </div>
         <div className = {styles.connectSection}>
            <div className = {darkmode?styles.contactInfo:styles.contactInfo_DM}>
                <h1>Let's Connect <span> . </span><span> . </span><span> . </span></h1>
                <h2>Share your great ideas</h2>
            </div>
            <div className = {darkmode?styles.formSection:styles.formSection_DM}>
              <Form darkmode = {darkmode}/>
            </div>
         </div>
         <Footer brandImg = {brandImage}/>
      </div>
      
    </div>
  );
 // ----------------------------------------------------------------------------------------------------------------------



}
