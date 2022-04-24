import Image from 'next/image';
import React from 'react';
import styles from '../styles/Banner.module.scss'

function Banner() {
    return (
        <section className={styles.banner}>
            <div className={styles.textDiv}>
                <h1><strong>Lights. Camera. </strong>Reaction!</h1>
                <p>We make animated videos for businesses to tell your product or service story, educate more customers and drive more revenue.</p>
                <span className={styles.form}>
                    <input placeholder="Enter your email and let's get started"/>
                    <button>Subscribe</button>
                </span>
            </div>
            <div className={styles.imageDiv}>
            <Image src="/vr.png" alt="Vercel Logo" width={620} height={567} />
            </div>
        </section>
    );
}

export default Banner;