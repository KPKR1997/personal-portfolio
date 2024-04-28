import styles from './inputForm.module.css';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Form = (props)=>{

    const [state, handleSubmit] = useForm("xoqgrapy");
    if (state.succeeded) {
      return (<div className = {styles.thanksDiv}>
        <h1>Thank you !!</h1>
        <p>Will get back to you soon...</p>
      </div>)
    }

    return(
        <div className ={styles.form}>
            <form onSubmit={handleSubmit} className ={styles.form}>
            {/* <label className = {styles.label} htmlFor="email"></label> */}
            <input id="email" type="email" name="email" className = {styles.input} placeholder ="Your E-mail" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <textarea id="message" name="message" className = {styles.inputText} placeholder ="Share your Ideas"/>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <button type="submit" disabled={state.submitting} className={styles.submitBtn}>
                Submit
            </button>
            <ValidationError errors={state.errors} />
            </form>
        </div>
    )
}

export default Form;