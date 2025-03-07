import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/navbar";
import Link from 'next/link';
import React from 'react';
import Video from 'next-video';
import {useState, useEffect} from 'react';
import Typing from "@/components/typingEffect";
import Timeline from "@/components/timelineSlider"
import Form from "@/components/inputForm"
import Footer from "@/components/footer"





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
        const splashCaptionLine1 = "Engineer, Data science and ML";
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
        const Typetext1 = "Data Dashboards";
        const Typetext2 = "ML CI/CD Pipelines";
        const Typetext3 = "Data Analysis";
        const Typetext4 = "Predictive models";
        const Typetext5 = "Classification models";
  //  -----------------------------------------------------------------
        const aboutMeHeading = "A Brief about me"
        const aboutMeText =  `A strong passion for science and technology innovations drives my work. 
                              With a keen interest in Data Science and mathematical physics, 
                              I apply them to my projects for end-to-end model development. Experience in Data analytics engineeering with industry standard model deployment, contributing to 
                               quality control through data-driven insights. 
                               Turning large data into valuable insights and I am still learning and expanding my expertise in this advanced technology.`
        const aboutMeText2 = ``
                            
                              
  //---------------------------------------------------------------------------
        const Exptitle1 = "Yield Engineer - Data science"
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
              <Link href ="https://www.figma.com/"><img src  = "./images/skills/R.png"  className = {styles.skillsTiles}/></Link>
              <Link href ="https://www.figma.com/"><img src  = "./images/skills/Python.png"  className = {styles.skillsTiles}/></Link>
              <Link href ="https://aws.amazon.com/?nc2=h_lg"><img src  = "./images/skills/awsec2.png"  className = {styles.skillsTiles}/></Link>
              <Link href ="https://www.microsoft.com/en-us/power-platform/products/power-bi"><img src  = "./images/skills/powerbi.png"  className = {styles.skillsTiles}/></Link>
              <Link href ="https://www.microsoft.com/en-in/microsoft-365/microsoft-office"><img src  = "./images/skills/msoffice.png"  className = {styles.skillsTiles}/></Link>
              <Link href ="https://www.javascript.com/"><img src  = "./images/skills/javascript.png"  className = {styles.skillsTiles}/></Link>
              <Link href ="https://react.dev/"><img src  = "./images/skills/react.png"  className = {styles.skillsTiles}/></Link>
              <Link href ="https://www.mongodb.com/"><img src  = "./images/skills/mongo.png"  className = {styles.skillsTiles}/></Link>
              <Link href ="https://git-scm.com/"><img src  = "./images/skills/git.png"  className = {styles.skillsTiles}/></Link>
              <Link href ="https://html.com/html5/"><img src  = "./images/skills/html.png"  className = {styles.skillsTiles}/></Link>
              <Link href ="https://css3.com/"><img src  = "./images/skills/css.png"  className = {styles.skillsTiles}/></Link>
              
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
         <script
            src="https://topmate-embed.s3.ap-south-1.amazonaws.com/v1/topmate-embed.js"
            user-profile="https://topmate.io/embed/profile/krishnaprakash_kr?theme=93C5F9"
            btn-style='{"backgroundColor":"#000","color":"#fff","border":"1px solid #000"}'
            embed-version="v1"
            button-text="Get Services online"
            position-right="30px"
            position-bottom="30px"
            custom-padding="0px"
            custom-font-size="16px"
            custom-font-weight="500"
            custom-width="250px"
            async=""
            defer=""
      ></script>
         <Footer brandImg = {brandImage}/>
      </div>
      
    </div>
  );
 // ----------------------------------------------------------------------------------------------------------------------



}
