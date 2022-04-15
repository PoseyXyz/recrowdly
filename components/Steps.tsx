import React from 'react';
import styles from '../styles/Steps.module.scss'

function Steps() {
    return (
        <section className={styles.steps}>
            <h2>Recrowdly creates 2D and 3D animations with unique design and copywriting</h2>
            <p>Our services cover the entire gamut needed to get your business value proposition shared, reshared, understoor and re-shared</p>

            <div>
                <h4>2D Animation</h4>
                <p>Go classic with a lively 2D animated video that brings your ideas to life with vivid colors and motion</p>
            </div>

            <div>
                <h4>3D Animation</h4>
                <p>3D models interact with reality to give your concept new dimensions</p>
            </div>

            <div>
                <h4>Mixed Media</h4>
                <p>Get the best of both 2D and 3D worlds to really bring the most out of your concept</p>
            </div>
            
        </section>
    );
}

export default Steps;