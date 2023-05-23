import React from 'react';
import { useForm } from 'react-hook-form';

import styles from './contact.module.css';

const Contact = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset();
    }
    

    return (
        <>
            <div className="container">
                <div className={styles.contactWrapper}>
                    <h2 className={styles.contactTitle}>Contact Us</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
                        <input
                            type="text"
                            className={styles.contactInputForm}
                            placeholder="First name *" {...register("First name",
                                { required: true, maxLength: 80 })}
                        />
                        <input
                            type="text"
                            className={styles.contactInputForm}
                            placeholder="Last name *" {...register("Last name",
                                { required: true, maxLength: 100 })}
                        />
                        <input
                            type="tel"
                            className={styles.contactInputForm}
                            placeholder="Mobile number *" {...register("Mobile number",
                                { required: true, minLength: 6, maxLength: 12 })}
                        />
                        <textarea
                            className={styles.contactInputForm} 
                            placeholder="Text us everythink you want... *" 
                            {...register("Title",
                                { required: true, min: 5, maxLength: 498 })}
                        />
                        <input
                            type="submit"
                            value='Submit'
                            className={styles.contactSubmitButton}
                        />
                    </form>
                </div>
            </div>

        </>
    );
};

export default Contact;