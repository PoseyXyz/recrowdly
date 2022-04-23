import React from 'react';
import { BiCubeAlt, BiMoviePlay, BiUnite } from 'react-icons/bi'
import styles from '../styles/Steps.module.scss'

function Steps() {
    return (
        <section className={styles.stepsSection}>
            
            <div className={styles.headerContainer}>
                <h2>Recrowdly creates 2D and 3D animations with unique design and copywriting</h2>
                <p>Our services cover the entire gamut needed to get your business value proposition shared, reshared, understoor and re-shared</p>
            </div>
            <div className={styles.steps}>
                <div className={styles.step}>
                    <i className={styles.uniteIcon}><BiUnite /></i>
                    <h4>2D Animation</h4>
                    <p>Go classic with a lively 2D animated video that brings your ideas to life with vivid colors and motion</p>
                </div>

                <div className={`${styles.arrow} ${styles.firstArrow}`}></div>

                <div className={styles.step}>
                    <i className={styles.cubeIcon}><BiCubeAlt /></i>
                    <h4>3D Animation</h4>
                    <p>3D models interact with reality to give you and your concept new dimensions</p>
                </div>

                <div className={`${styles.arrow} ${styles.secondArrow}`}></div>

                <div className={styles.step}>
                    <i className={styles.playIcon}><BiMoviePlay /></i>
                    <h4>Mixed Media</h4>
                    <p>Get the best of both 2D and 3D worlds to really bring the most out of your concept</p>
                </div>
            </div>

        </section>
    );
}

export default Steps;