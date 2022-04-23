import Image from 'next/image';
import React from 'react';
import styles from '../styles/Affiliations.module.scss'


function Affiliations() {
    return (
        <section className={styles.affiliations}>
            <p>Join over 30+ companies using our services</p>

            <div className={styles.logosContainer}>
            <div className={styles.brandLogo}>
            <Image src="/brand-logos/facebook.svg" alt="Vercel Logo" width={150} height={100} />
            </div>
            <div className={styles.brandLogo}>
            <Image src="/brand-logos/tesla.svg" alt="Vercel Logo" width={150} height={100} />
            </div>
            <div className={styles.brandLogo}>
            <Image src="/brand-logos/zoom.svg" alt="Vercel Logo" width={150} height={100} />
            </div>
            
            <div className={styles.brandLogo}>
            <Image src="/brand-logos/champion.svg" alt="Vercel Logo" width={150} height={100} />
            </div>
            <div className={styles.brandLogo}>
            <Image src="/brand-logos/nitto.svg" alt="Vercel Logo" width={150} height={100} />
            </div>
            </div>

        </section>
    );
}

export default Affiliations