import styles from './videoFrame2.module.css';

const VideoFrame2 = (props) =>{

    return(
        <div className={styles.main}>
            <video autoPlay muted loop className={styles.Video}>
                <source src={props.video} type="video/mp4"/>
            </video>
        <h2 className = {styles.heading}>{props.salutation}</h2>
        <h1 className = {styles.headingMain}>{props.Mainhead}</h1>
        <div className = {styles.overLay}>
            <img src = {props.image} className = {styles.captionPicture}/>
            <p>{props.paragraph}</p>
        </div>
        </div>
    )
}

export default VideoFrame2;