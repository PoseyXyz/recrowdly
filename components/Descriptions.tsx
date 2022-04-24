import Image from 'next/image';
import React, { useRef, useState } from 'react';
import styles from '../styles/Descriptions.module.scss'
import { RiPlayCircleLine, RiPauseCircleLine } from 'react-icons/ri'


function Descriptions() {
    const videoRef=useRef<null | HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(true);
    const videoHandler = (control:string) => {
      if (control === "play") {
        videoRef.current&&videoRef.current.play();
            setPlaying(true)
          } else if (control === "pause") {
            videoRef.current&&videoRef.current.pause();
            setPlaying(false)
          }
      };
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
                                <Image src="/avatars/avatar3.jpg" alt="Vercel Logo" layout="fill" objectFit='cover' />
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
                                <Image src="/avatars/avatar4.jpg" alt="Vercel Logo" layout="fill" objectFit='cover' />
                            </div>
                        </div>

                        <div className={styles.textContainer}>
                            <p>I always watch recrowdly videos over and over again because of its highly entertaining animations.</p>
                            <h4>Dangabana Silout</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className={styles.secondSubsection}>
                <div className={styles.textSection}>
                    <h3>Dressed to thrill</h3>
                    <p>We worked with Pntrei to createa video that capture excitement and engagement of their brand.</p>

                    <p>Following the campaign, they experienced a <span>46% increase</span> in their monthly website visitors leading to a significant increase in coversions from July to December</p>

                    <button>Watch Video</button>
                </div>
                <div className={styles.imageSection}>
                    <div className={styles.containerElement}>
                        <div className={styles.overlay}>
                            <button><i><RiPlayCircleLine /></i></button>
                        </div>
                        <div className={styles.circle}>

                        </div>
                        <div className={styles.imageDiv}>
                            <Image src="/animating.jpg" alt="Vercel Logo" width={1920} height={1114} layout='responsive' />
                        </div>
                    </div>
                </div>
            </section> */}
            <section className={styles.secondSubsection}>
                <div className={styles.textSection}>
                    <h3>Dressed to thrill</h3>
                    <p>We worked with Pntrei to createa video that capture excitement and engagement of their brand.</p>
                    <p>Following the campaign, they experienced a <span>46% increase</span> in their monthly website visitors leading to a significant increase in coversions from July to December</p>

                    <button>Watch Video</button>
                </div>
                <div className={styles.imageSection}>
                    <div className={styles.containerElement}>
                        <div className={styles.overlay}>
                            {
                                playing ?
                                <button onClick={()=>videoHandler("pause")}><i><RiPauseCircleLine /></i></button>
                                :
                                <button onClick={()=>videoHandler("play")}><i><RiPlayCircleLine /></i></button>
                            }
                        </div>
                        <div className={styles.circle}>

                        </div>
                        <div className={styles.videoContainer}>
                            <video ref={videoRef} autoPlay height="auto" loop muted width="auto" >
                                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className={styles.video}>
                <video controls autoPlay height="250" muted width="260" >
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                </video>
            </div> */}

        </section>
    );
}

export default Descriptions;