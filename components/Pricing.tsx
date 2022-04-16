import React from 'react';
import styles from '../styles/Pricing.module.scss'
import { FaCheck } from 'react-icons/fa'

function Pricing() {
    return (
        <section className={styles.pricingSection}>
            <div className='container'>
                <div className={styles.content}>

                    <div className={styles.headerSection}>
                        <h3>Simple, transparent pricing</h3>
                        <p>No contracts. No surprise fees.</p>
                        <div className={styles.buttonContainer}>
                            <button>MONTHLY</button>
                            <button>YEARLY</button>
                        </div>
                    </div>
                    <div className={styles.cardSection}>
                        <div className={styles.card}>
                            {/* <span className={styles.popularityFlag}>
                                MOST POPULAR
                            </span> */}
                            <p className={styles.planPrice}>
                                <span className={styles.amount}>$100</span>
                                <span> /month</span>
                            </p>
                            <div className={styles.planPerks}>
                                <span className={styles.header}>
                                    Pro
                                </span>
                                <p>For most business that want to optimize web queries</p>
                                <ul>
                                    <li><i><FaCheck /></i><span>All limited links</span></li>
                                    <li><i><FaCheck /></i><span>Own analytics platform</span></li>
                                    <li><i><FaCheck /></i><span>Chat support</span></li>
                                    <li><i><FaCheck /></i><span>Optimize hashtags</span></li>
                                    <li><i><FaCheck /></i><span>Unlimited users</span></li>
                                </ul>
                            </div>
                            <button>Choose plan</button>
                        </div>

                        <div className={styles.card}>
                            {/* <span className={styles.popularityFlag}>
                                MOST POPULAR
                            </span> */}
                            <p className={styles.planPrice}>
                                <span className={styles.amount}>$100</span>
                                <span> /month</span>
                            </p>
                            <div className={styles.planPerks}>
                                <span className={styles.header}>
                                    Pro
                                </span>
                                <p>For most business that want to optimize web queries</p>
                                <ul>
                                    <li><i><FaCheck /></i><span>All limited links</span></li>
                                    <li><i><FaCheck /></i><span>Own analytics platform</span></li>
                                    <li><i><FaCheck /></i><span>Chat support</span></li>
                                    <li><i><FaCheck /></i><span>Optimize hashtags</span></li>
                                    <li><i><FaCheck /></i><span>Unlimited users</span></li>
                                </ul>
                            </div>
                            <button>Choose plan</button>
                        </div>
                        <div className={styles.card}>
                            <span className={styles.popularityFlag}>
                                MOST POPULAR
                            </span>
                            <p className={styles.planPrice}>
                                <span className={styles.amount}>$100</span>
                                <span> /month</span>
                            </p>
                            <div className={styles.planPerks}>
                                <span className={styles.header}>
                                    Pro
                                </span>
                                <p>For most business that want to optimize web queries</p>
                                <ul>
                                    <li><i><FaCheck /></i><span>All limited links</span></li>
                                    <li><i><FaCheck /></i><span>Own analytics platform</span></li>
                                    <li><i><FaCheck /></i><span>Chat support</span></li>
                                    <li><i><FaCheck /></i><span>Optimize hashtags</span></li>
                                    <li><i><FaCheck /></i><span>Unlimited users</span></li>
                                </ul>
                            </div>
                            <button>Choose plan</button>
                        </div>
                        <div className={styles.card}>
                            {/* <span className={styles.popularityFlag}>
                                MOST POPULAR
                            </span> */}
                            <p className={styles.planPrice}>
                                <span className={styles.amount}>$100</span>
                                <span> /month</span>
                            </p>
                            <div className={styles.planPerks}>
                                <span className={styles.header}>
                                    Pro
                                </span>
                                <p>For most business that want to optimize web queries</p>
                                <ul>
                                    <li><i><FaCheck /></i><span>All limited links</span></li>
                                    <li><i><FaCheck /></i><span>Own analytics platform</span></li>
                                    <li><i><FaCheck /></i><span>Chat support</span></li>
                                    <li><i><FaCheck /></i><span>Optimize hashtags</span></li>
                                    <li><i><FaCheck /></i><span>Unlimited users</span></li>
                                </ul>
                            </div>
                            <button>Choose plan</button>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Pricing;