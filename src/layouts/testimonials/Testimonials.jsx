import React, { useRef } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import testimonialsImg from '../../assets/testimonials.webp';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import 'swiper/css';
import 'swiper/css/navigation';
import styles from './testimonials.module.css';

const Testimonials = () => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className={styles.testimonials}>
            <div className='container'>
                <h2 className={styles.testimonialsTitle}>
                    What Our Client Are <span className='helpColor'>Saying</span>
                </h2>
                <div className={styles.testimonialsContent}>
                    <img src={testimonialsImg} alt="testimonial" className={styles.testimonialsTumb}/>
                    <Swiper
                        modules={[Navigation]}
                        onInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                    >
                        <SwiperSlide>
                            <div className={styles.quoteText} >
                                <p className={styles.quote}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem impedit magni sapiente modi esse aspernatur saepe, reprehenderit blanditiis reiciendis rerum, quo explicabo tenetur quam ipsa. Cumque, magnam. Voluptatem fugiat qui veniam facilis ut, aperiam recusandae quo alias totam? Vel, nisi. Eum quis delectus suscipit laboriosam doloremque necessitatibus! Totam, eum nemo.</p>
                                <span className={styles.author}>Anglina Jole</span>
                                <span className={styles.authorRole}>Food lover</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.quoteText} >
                                <p className={styles.quote}>EFood has the most intriguing food order system in the country. UI in both their app and web Is very simple and easy to use, enhancing the UX. Their delivery men are also quite professional and knows the neighborhood well. Till now I never had to guide them to my address for delivery; </p>
                                <span className={styles.author}>Alex Daimar</span>
                                <span className={styles.authorRole}>Manager</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.quoteText} >
                                <p className={styles.quote}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nostrum cupiditate unde similique delectus quos, ex quod sit, excepturi voluptas debitis ab hic. Harum consectetur minus eos itaque voluptatem quibusdam facilis maxime dolorum ducimus sit atque eaque nostrum nam mollitia velit cupiditate laudantium, molestiae ratione repellat, quod illum ut, placeat dolores. Tempora expedita dignissimos soluta sunt assumenda. Molestiae rerum explicabo in tenetur iure obcaecati dignissimos nam facilis accusantium, nihil, odit reiciendis laborum adipisci culpa minus omnis aperiam placeat. Iure dignissimos atque laboriosam commodi dolor laborum esse repudiandae assumenda? Nisi placeat animi dolores quisquam. Consequatur, praesentium inventore! Debitis quae consequatur molestiae!</p>
                                <span className={styles.author}>Helen Bonem</span>
                                <span className={styles.authorRole}>Lawyer</span>
                            </div>
                        </SwiperSlide>
                        <div className={styles.customButtons}>
                            <div className={styles.buttonPrev} ref={prevRef}>
                                <FontAwesomeIcon icon={faArrowLeft} size={'2x'} />
                            </div>
                            <div className={styles.buttonNext} ref={nextRef}>
                                <FontAwesomeIcon icon={faArrowRight} size={'2x'} />
                            </div>
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;