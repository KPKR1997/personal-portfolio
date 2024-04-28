import styles from './typingEffect.module.css';

export const Typing = (props)=>{


    return(
            <>
            <div className = {props.darkmode ? styles.body1 : styles.bodyDark}>
                <div className = {props.darkmode ? styles.wrapper : styles.wrapper_dark}>
                    <span className = {props.darkmode ? styles.first_text : styles.first_text_dark}></span>
                    <ul className = {props.darkmode ? styles.sec_texts : styles.sec_texts_dark}>
                           <li><span>{props.text1}</span></li>
                           <li><span>{props.text2}</span></li>
                           <li><span>{props.text3}</span></li>
                           <li><span>{props.text4}</span></li>
                           <li><span>{props.text5}</span></li>
                    </ul>
                </div>
           </div>
            </>
    );
}
