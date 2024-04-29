import styles from './timelineSlider.module.css'

const Timeline = (props)=>{
    return(
        <>
            

            <ul className={styles.timeline}>
            
            <li>
                <div className={styles.direction_r}>
                <div className={styles.flag_wrapper}>
                    <span className={styles.hexa}></span>
                    <span className={styles.flag}>{props.title1}</span>
                    <span className={styles.time_wrapper}><span className={styles.time}>{props.date1}</span></span>
                </div>
                <div className={props.darkmode? styles.desc : styles.desc_DM}><p>{props.expDesc1}</p></div>
                </div>
            </li>

            
            <li>
                <div className={styles.direction_l}>
                <div className={styles.flag_wrapper}>
                    <span className={styles.hexa}></span>
                    <span className={styles.flag}>{props.title2}</span>
                    <span className={styles.time_wrapper}><span className={styles.time}>{props.date2}</span></span>
                </div>
                <div className={props.darkmode? styles.desc : styles.desc_DM}><p>{props.expDesc2}</p></div>
                </div>
            </li>

            
            <li>
                <div className={styles.direction_r}>
                <div className={styles.flag_wrapper}>
                    <span className={styles.hexa}></span>
                    <span className={styles.flag}>{props.title3}</span>
                    <span className={styles.time_wrapper}><span className={styles.time}>{props.date3}</span></span>
                </div>
                <div className={props.darkmode? styles.desc : styles.desc_DM}><p>{props.expDesc3}</p></div>
                </div>
            </li>
            </ul>
            
        </>
    )
}

export default Timeline;