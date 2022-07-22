import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div>
                    <Image src="/logo.svg" alt="Vercel Logo" width={190} height={100} />
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
                <button className={styles.btn}>Book a meeting</button>
            </nav>
        </header>

    )
}

export default Header;