import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from '../styles/Testimonials.module.scss'
export interface Provider {
    id?: number,
    name?: string,
    message?: string,
    position?: string,
    imageUri?: string


}

function Testimonials() {
    return (
        <section className={styles.testimonials}>
            <div className={styles.headlineSection}>
                <p>TESTIMONIAL</p>
                <h3>What People Say About Us</h3>
            </div>
            <div className={styles.messagesSection}>
                <div className={styles.messages}>
                    <div className={styles.currentMessage}>
                        <span className={styles.avatar}>
                            <Image src="/avatar.jpg" alt='avatarImg' layout='responsive' width={640} height={427} />
                        </span>
                        <div className={styles.textArea}>
                            <p>{displayedTestimonials.current.message}</p>

                            <article>
                                <h5>{displayedTestimonials.current.name}</h5>
                                <p>{displayedTestimonials.current.position}</p>
                            </article>
                        </div>

                    </div>
                    <div className={styles.nextMessage}>
                    <span className={styles.avatar}>
                            <Image alt='avatarImg' src="/avatar.jpg" layout='responsive' width={640} height={427} />
                        </span>
                        <div className={styles.textArea}>
                            <p>{displayedTestimonials.nextInLine.message}</p>
                            <article>
                                <h5>{displayedTestimonials.nextInLine.name}</h5>
                                <p>{displayedTestimonials.nextInLine.position}</p>
                            </article>
                        </div>
                    </div>
                </div>
                <div className={styles.arrowButtons}>
                    <button className={styles.upArrowButton}><i></i></button>
                    <button className={styles.downArrowButton}><i></i></button>
                </div>
            </div>

            {/* <button onClick={() => console.log(displayedTestimonials)}>Hello</button> */}
            {/* {displayedTestimonials.product1.name}
            {displayedTestimonials.product2.name} */}
            {/* {displayedTestimonials.map(test=><h1 key={test.name}>{test.name}</h1>)} */}
            {/* <h1> {displayedTestimonials.current.name}
            {displayedTestimonials.nextInLine.name}
        {valueRep}</h1> */}

            {/* <button onClick={decrementValueRep}>
                Up
            </button>
            <button onClick={incrementValueRep}>
                Down
            </button> */}

        </section>
    );
}

export default Testimonials;