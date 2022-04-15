import Image from 'next/image';
import React from 'react';
import styles from '../styles/Affiliations.module.scss'


function Affiliations() {
    return (
        <section className={styles.affiliations}>
            <p>Join over 30+ companies using our services</p>

            <div className={styles.logosContainer}>
            <div className={styles.brandLogo}>
            <Image src="/brand-logos/facebook.png" alt="Vercel Logo" width={190} height={100} />
            </div>
            <div className={styles.brandLogo}>
            <Image src="/brand-logos/taboola.png" alt="Vercel Logo" width={190} height={100} />
            </div>
            <div className={styles.brandLogo}>
            <Image src="/brand-logos/exoclick.png" alt="Vercel Logo" width={190} height={100} />
            </div>
            <div className={styles.brandLogo}>
            <Image src="/brand-logos/outbrain.png" alt="Vercel Logo" width={190} height={100} />
            </div>
            <div className={styles.brandLogo}>
            <Image src="/brand-logos/mgid.png" alt="Vercel Logo" width={190} height={100} />
            </div>
            </div>

        </section>
    );
}

export default Affiliations