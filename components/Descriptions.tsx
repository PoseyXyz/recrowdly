import Image from 'next/image';
import React from 'react';
import styles from '../styles/Descriptions.module.scss'

function Descriptions() {
    return (
        <section className={styles.descriptions}>
            <section className={styles.firstSubsection}>
                <div className={styles.textSection}>
                    <h3>A video is worth a thousand words</h3>
                    <p>Explaining what you do isnt always easy. Most internet Saas and E-commerce websites struggle with relaying their value proposition effectively. We think outside the box to get your message accross to your audience</p>
                </div>

                <div className={styles.imageSection}>
                    <div className={styles.imageDiv}>

                        <Image src="/animating.jpg" alt="Vercel Logo" width={1920} layout="responsive" height={1114} />
                    </div>

                    <div className={`${styles.messageCard} ${styles.firstCard}`}>
                        <div className={styles.avatarContainer}>
                            <div className={styles.avatar}>
                                <Image src="/avatar.jpg" alt="Vercel Logo" layout="fill" objectFit='cover' />
                            </div>
                        </div>

                        <div className={styles.textContainer}>
                            <p>Lovely service. I am very satisfied with Recrowdly and would happily recommend</p>
                            <h4>Lilian Aniegboka</h4>
                        </div>


                    </div>
                    <div className={`${styles.messageCard} ${styles.secondCard}`}>
                        {/* <div className={styles.avatarContainer}>
                            
                        </div> */}
                        <div className={styles.avatarContainer}>
                            <div className={styles.avatar}>
                                <Image className={styles.avatar} src="/avatar.jpg" alt="Vercel Logo" layout="fill" objectFit='cover' />
                            </div>
                        </div>

                        {/* <Image className={styles.avatar} src="/avatar.jpg" alt="Vercel Logo" width={100} layout="responsive" height={100} /> */}


                        <div className={styles.textContainer}>
                            <p>Exciting and interesting videos.</p>
                            <h4>Chioma Ojima</h4>
                        </div>
                    </div>

                    <div className={`${styles.messageCard} ${styles.thirdCard}`}>
                        <div className={styles.avatarContainer}>
                            <div className={styles.avatar}>
                                <Image src="/avatar.jpg" alt="Vercel Logo" layout="fill" objectFit='cover' />
                            </div>
                        </div>

                        <div className={styles.textContainer}>
                            <p>I always watch recrowdly videos over and over again because of its highly entertaining animations.</p>
                            <h4>Dangabana Silout</h4>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.secondSubsection}>
                <div className={styles.textSection}>
                    <h3>Dressed to thrill</h3>
                    <p>We worked with Pntrei to createa video that capture excitement and engagement of their brand.</p>

                    <p>Following the campaign, they experienced a <span>46% increase</span> in their monthly website visitors leading to a significant increase in coversions from July to December</p>

                </div>
                <div className={styles.imageSection}>
                    <div className={styles.imageDiv}>
                        <Image src="/animating.jpg" alt="Vercel Logo" width={620} height={567} />
                    </div>
                </div>
            </section>

        </section>
    );
}

export default Descriptions;