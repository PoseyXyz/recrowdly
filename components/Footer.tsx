import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Footer.module.scss'
function Footer() {
    return (
        <footer className={styles.footer}>
            <div className='container'>
                <div className={styles.content}>
                    <div className={styles.brandLogo}>
                        <Image src="/logo.svg" alt="Vercel Logo" width={190} height={50} />
                    </div>

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