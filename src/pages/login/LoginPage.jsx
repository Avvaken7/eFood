import React from 'react';
import { useForm } from 'react-hook-form';

import styles from './loginPage.module.css';

const LoginPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <div className="container">
                <div className={styles.lognFormWrapper}>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.formData}>
                        <input
                            {...register("firstName",
                                { required: true })}
                            placeholder="First name"
                            className={styles.inputForm}
                        />
                        {errors.firstName && <span>This field is required</span>}
                        <input
                            {...register("lastName",
                                { required: true })}
                            placeholder="Last name"
                            className={styles.inputForm}
                        />
                        {errors.lastName && <span>This field is required</span>}
                        <input
                            {...register("email",
                                {
                                    pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                    required: true
                                })}
                            placeholder="Email"
                            className={styles.inputForm}
                        />
                        {errors.email && <span>This email is incorrect</span>}
                        <input type="submit" value='Sign Up' className={styles.submitFormButton}/>
                    </form>
                </div>
            </div>

        </>
    );
};

export default LoginPage;