import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Footer.module.scss'
function Footer() {
    return (
        <footer className={styles.footer}>
            {/* <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/IOqtcXju808?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>             */}
            <div className='container'>
                <div className={styles.content}>
                    <div className={styles.brandLogo}>
                        <Image src="/logo.svg" alt="Vercel Logo" width={190} height={50} />
                    </div>
                    {/* <video src="https://www.youtube.com/watch?v=IOqtcXju808" width="750" height="500" controls>
                    </video> */}

                    <div className={styles.links}>
                        <Link href='/'>
                            <a>Home</a>
                        </Link>
                        <Link href='/'>
                            <a>Pricing</a>
                        </Link>
                        <Link href='/'>
                            <a>Portfolio</a>
                        </Link>
                        <Link href='/'>
                            <a>Review</a>
                        </Link>
                    </div>
                    <p className={styles.closingText}>A <span>Punch</span> Group Company</p>


                </div>

            </div>
        </footer>
    );
}

export default Footer;