import styles from "./navbar.module.css"
import Link from "next/Link";
import {useState, useEffect} from 'react';


const NavBar = (props)=>{

    

    const [nav,extNav] = useState(true)
    

    const NavClick = () =>{
        if (window.innerWidth <= 500)
        extNav(!nav);
    }

   
    

    const Resize = ()=>{
        extNav(true);
        console.log(nav);
    }
    
   useEffect(()=>{
    window.addEventListener("resize", Resize);
   },[]) 
    



    return(
        <div className = {props.darkmode? styles.navbarMain : styles.navbarMain_DM} onResize = {Resize}>
           <div className = {nav? styles.navBarTitle : styles.navBarTitle_extended}>
               <Link href="/"><img src = {props.darkmode? props.brandImage : props.brandImageAlt} className = {styles.logoImg}/></Link> 
           </div>
           <div className = {nav? styles.hamBurger : styles.hamBurger_extended} onClick = {NavClick}>
                 <span className = {nav? styles.menuSpan : styles.menuSpan_extended}></span>
                 <span className = {nav? styles.menuSpan : styles.menuSpan_extended}></span>
                 <span className = {nav? styles.menuSpan : styles.menuSpan_extended}></span>
           </div>
           <div className = {nav? styles.navBarItems : styles.navBarItems_extended}>
                <div className = {styles.item}>
                    <Link href = "/profile" className = {props.darkmode? styles.itemLink : styles.itemLink_DM}>Profile</Link>
                </div>
                <div className = {styles.item}>
                    <Link href = "/works" className = {props.darkmode? styles.itemLink : styles.itemLink_DM}>Works</Link>
                </div>
                <div className = {styles.item}>
                    <Link href = "/connect" className = {props.darkmode? styles.itemLink : styles.itemLink_DM}>Connect</Link>
                </div>
                <div className = {styles.darkmodeSection}>
                    <img src = "../images/lightmode.png" className={props.darkmode? styles.darkmodeIconOn : styles.darkmodeIconOff}  onClick = {props.Darkmode}/>
                    <img src = "../images/darkmode.png" className={props.darkmode? styles.darkmodeIconOff : styles.darkmodeIconOn}  onClick = {props.Darkmode}/>
                </div>
           </div>
        </div>
    )
}

export default NavBar;