import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from '../styles/Testimonials.module.scss'
export interface Provider {
    id?: number,
    name?: string,
    message?: string,
    position?: string,
    imageUri?: string


}

function Testimonials() {
    const [valueRep, setValueRep] = useState(1)
    const [displayedTestimonials, setDisplayedTestimonials] = useState<{ [fieldName: string]: Provider }>({
        current: {},
        nextInLine: {}
    })
    const [testimonials] = useState<Provider[]>(
        [
            {
                id: 1,
                name: 'Marcus Bridge',
                message: "This is outstanding, very neat. Amazing job.",
                position: "CEO of Bonaverde",
                imageUri: "/avatar.jpg"
            },
            {
                id: 2,
                name: 'Nader Dabit',
                message: "",
                position: ""
            },
            {
                id: 3,
                name: 'Chris Thomas',
                message: "",
                position: ""
            },
            {
                id: 4,
                name: 'Hans Zimmer',
                message: "",
                position: ""
            }
        ]
    )
    // useEffect(()=>{
    //    const intervalId =  setInterval(()=>{
    //         incrementValueRep()
    //     }, 5000)
    //     return ()=> clearInterval(intervalId)
    // }, [valueRep])
    useEffect(() => {

        flipValues()

    }, [valueRep])
    const incrementValueRep = () => {
        if (valueRep === testimonials.length) {
            setValueRep(1)
        } else {
            setValueRep(valueRep + 1)
        }
    }
    const decrementValueRep = () => {
        if (valueRep === 1) {
            setValueRep(4)
        } else {
            setValueRep(valueRep - 1)
        }
    }
    const flipValues = () => {

        let current: Provider = {

        }
        let nextInLine: Provider = {


        }
        if (valueRep === testimonials.length) {
            current = testimonials.find(testimonial => testimonial.id === valueRep)!
            nextInLine = testimonials.find(testimonial => testimonial.id === 1)!
            setDisplayedTestimonials({
                ...displayedTestimonials,
                current,
                nextInLine
            })
        } else {
            current = testimonials.find(testimonial => testimonial.id === valueRep)!
            nextInLine = testimonials.find(testimonial => testimonial.id === valueRep + 1)!
            setDisplayedTestimonials({
                ...displayedTestimonials,
                current,
                nextInLine
            })
            console.log(displayedTestimonials);


        }
    }
    return (
        <section className={styles.testimonials}>
            <div className={styles.headlineSection}>
                <p>TESTIMONIAL</p>
                <h3>What People Say About Us</h3>
            </div>
            <div className={styles.messagesSection}>
                <div className={styles.messages}>
                    <div className={styles.currentMessage}>
                        <span className={styles.avatar}>
                            <Image src="/avatar.jpg" alt='avatarImg' layout='responsive' width={640} height={427} />
                        </span>
                        <div className={styles.textArea}>
                            <p>{displayedTestimonials.current.message}</p>

                            <article>
                                <h5>{displayedTestimonials.current.name}</h5>
                                <p>{displayedTestimonials.current.position}</p>
                            </article>
                        </div>

                    </div>
                    <div className={styles.nextMessage}>
                    <span className={styles.avatar}>
                            <Image alt='avatarImg' src="/avatar.jpg" layout='responsive' width={640} height={427} />
                        </span>
                        <div className={styles.textArea}>
                            <p>{displayedTestimonials.nextInLine.message}</p>
                            <article>
                                <h5>{displayedTestimonials.nextInLine.name}</h5>
                                <p>{displayedTestimonials.nextInLine.position}</p>
                            </article>
                        </div>
                    </div>
                </div>
                <div className={styles.arrowButtons}>
                    <button className={styles.upArrowButton}><i></i></button>
                    <button className={styles.downArrowButton}><i></i></button>
                </div>
            </div>

            {/* <button onClick={() => console.log(displayedTestimonials)}>Hello</button> */}
            {/* {displayedTestimonials.product1.name}
            {displayedTestimonials.product2.name} */}
            {/* {displayedTestimonials.map(test=><h1 key={test.name}>{test.name}</h1>)} */}
            {/* <h1> {displayedTestimonials.current.name}
            {displayedTestimonials.nextInLine.name}
        {valueRep}</h1> */}

            {/* <button onClick={decrementValueRep}>
                Up
            </button>
            <button onClick={incrementValueRep}>
                Down
            </button> */}

        </section>
    );
}

export default Testimonials;