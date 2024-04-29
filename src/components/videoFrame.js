import styles from './videoFrame.module.css';

const VideoFrame = (props) =>{

    return(
        <div className={styles.main}>
          <img src = {props.Hobbyimage} className={styles.image}/>
          <div className = {styles.OverLay}>
            <div className = {styles.headingSection}><h1>{props.Hobbyheading}</h1></div>
            <div className = {styles.paraSection}><p>{props.Hobbyparagraph}</p></div>
          </div>
        </div>
    )
}
export default VideoFrame;