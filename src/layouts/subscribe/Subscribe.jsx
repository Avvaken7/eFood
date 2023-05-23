import { useForm } from 'react-hook-form';

import icon from '../../assets/subscribe_icon.svg';
import styles from './subscribe.module.css';

const Subscribe = () => {

    const { register, handleSubmit, reset, formState: { errors, isSubmitted } } = useForm();

    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
        reset();
    }


    return (
        <section className={styles.subscribe}>
            <div className='container'>
                <div className={styles.contentBlock}>
                    <h3>Subscribe to the Latest Offer</h3>
                    <p className={styles.contentText}>Get our daily updates by subscribing to our newspaper, please drop your email below</p>
                    {errors.mail ?
                        <div className={styles.labelMessage} role="alert">{errors.mail?.message}</div>
                        :
                        <div className={styles.labelMessage}>{isSubmitted ? 'Thanks for you subscribe!' : null}</div>
                    }
                    <form
                        action="submit"
                        className={styles.form}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <input
                            {...register("mail", {
                                required: "Email Address is required",
                                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
                            })
                            }
                            placeholder='Enter your email...'
                            aria-invalid={errors.mail ? "true" : "false"}
                            className={styles.inputForm}
                        />
                        <button type="submit" className={styles.buttonSubmit}>
                            <img src={icon} alt="subscribe" />
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;