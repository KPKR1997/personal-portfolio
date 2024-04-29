import styles from './videoFrame.module.css';

const VideoFrame = (props) =>{

const video = "/videos/developer_bg.mp4";
const image = "./images/mern.png";
const paragraph = `" I build easy-to-use platforms for learning and sharing knowledge. 
                Using MongoDB, Express.js, React.js, and Node.js, I create websites 
                and apps that help people access education resources. 
                I'm good at adding cool features like real-time chats and smart recommendations. 
                I like working with others and making technology helpful for everyone."`


    return(
        <div className={styles.main}>
            <video autoPlay muted loop className={styles.Video}>
                <source src={props.video} type="video/mp4"/>
            </video>
        <h2 className = {styles.heading}>{props.salutation}</h2>
        <h1 className = {styles.headingMain}>{props.Mainhead}</h1>
        <div className = {styles.overLay}>
            <img src = {props.image} className = {styles.captionPicture} alt =""/>
            <p>{props.paragraph}</p>
        </div>
        </div>
    )
}
export default VideoFrame;