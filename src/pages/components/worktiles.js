import styles from './worktiles.module.css';
import Link from 'next/Link';

export const Worktiles = (props)=>{
    return(
        <div className = {styles.worksTiles}>
            <div className = {styles.ImgSection}>
                <img src = {props.thumbnail} className = {styles.workThumbnail}/>
            </div>
            <div className = {styles.workDetails}>
                <h3 className = {props.darkmode?styles.details:styles.details_DM}>{props.workname}</h3>
                <h4 className = {props.darkmode?styles.details:styles.details_DM}>{props.type}</h4>
                <h5 className = {props.darkmode?styles.details:styles.details_DM}>{props.platforms}</h5>
                <Link href ={props.link} className = {styles.link}>
                    <div className = {styles.exploreBtn}><h4>Explore</h4></div>
                </Link>
            </div>
        </div>
    )
}