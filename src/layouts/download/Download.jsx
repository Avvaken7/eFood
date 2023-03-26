import React from 'react';
import { Link } from 'react-router-dom';

import downloadApp from '../../assets/mobileapp.png';
import appStore from '../../assets/download_appstore.svg';
import googlePlay from '../../assets/download_googleplay.svg';


import styles from './download.module.css';

const Download = () => {
    return (
        <section className={styles.download}>
            <div className='container'>
                <div className={styles.downloadWrapper}>
                    <div className={styles.downloadText}>
                        <h2>
                            Download Our <span className='helpColor'>Mobile App</span>
                        </h2>
                        <p className={styles.downloadDescription}>It's all at your fingertips - the restaurants you love. Find the right food to suit your mood, and make the first bite last. Go ahead, download app and get 50% discount
                        </p>
                        <div className={styles.downloadtumb}>
                            <Link to="/download">
                                <img src={appStore} alt="download from app store" />
                            </Link>
                            <Link to="/download">
                                <img src={googlePlay} alt="download from google play" />
                            </Link>
                        </div>
                    </div>
                    <div className={styles.downloadImg}>
                        <img src={downloadApp} alt="download mobile applications" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Download;