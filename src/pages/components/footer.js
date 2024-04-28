import styles from './footer.module.css';

export const Footer =(props)=>{
    return(
        <>
        <div className = {styles.footer}>
            <div className = {styles.footerBrand}>
                <img src = {props.brandImg} className = {styles.footerImg}></img>
                <div className = {styles.info}>
                    <h2>Krishnaprakash</h2>
                    <h3>Personal Portfolio Website</h3></div>
                    <p>krishnaprakash997@gmail.com</p>
                </div>
            <div className={styles.footerRights}>
                <p className = {styles.rightsStatement}>Developed by &copy; Krishnaprakash | 2024 | All rights reserved</p>
            </div>
        </div>
        </>
    )
}