import React, { useState } from 'react';
import styles from '../styles/Pricing.module.scss'
import { FaCheck } from 'react-icons/fa'

//type check for old pricing api
// export interface Plans{
    
//         monthly:[
//             {
//                 description:string,
//                 id:number,
//                 mostPopular:boolean,
//                 name:string,
//                 perks:string[],
//                 price:number
//             }
//         ],
//         yearly:string
    
// }

// type Props={
//     // plans:Plans
//     plans:Plans
// }
export interface Plans {
    description: string,
    id: number,
    mostPopular: boolean,
    name: string,
    perks: string[],
    price: number,
    planType: string
  }
  
  type Props = {
      plans:Plans[]
  }


function Pricing({plans}:Props) {
    // const [yearlyPlans, setYearlyPlans] = useState([
         
    //         {
    //             "description": "For most business that want to optimize web queries",
    //             "id": 1,
    //             "mostPopular": false,
    //             "name": "Base",
    //             "perks": [
    //                 "12 links",
    //                 "Own analytics platforms",
    //                 "Weekday chat support",
    //                 "Minimally optimized hashtags",
    //                 "10 users maximum"
    //             ],
    //             "price": 500
    //         },
    //         {
    //             "description": "For most businesses that want to optimize web queries",
    //             "id": 2,
    //             "mostPopular": true,
    //             "name": "Pro",
    //             "perks": [
    //                 "50 links",
    //                 "Own analytics platform",
    //                 "24/7 chat support",
    //                 "Fully optimized hashtags",
    //                 "`20 users maximum"
    //             ],
    //             "price": 1000
    //         },
    //         {
    //             "description": "For most business that want to optimize web queries",
    //             "id": 3,
    //             "mostPopular": false,
    //             "name": "Premium",
    //             "perks": [
    //                 "100 links",
    //                 "Own analytics platform",
    //                 "24/7 chat support",
    //                 "Fully optimized hashtags",
    //                 "100 maximum users"
    //             ],
    //             "price": 1500
    //         },
    //         {
    //             "description": "For most businesses that want to optimize web queries",
    //             "id": 4,
    //             "mostPopular": false,
    //             "name": "Enterprise",
    //             "perks": [
    //                 "Unlimited links",
    //                 "Company-wide analytics platform",
    //                 "24/7 chat support",
    //                 "Fully optimized hashtags",
    //                 "Unlimited users"
    //             ],
    //             "price": 2000
    //         }
        
        
    // ])

 
    
    

    // const [newObject, setNewObject] = useState<Plans>({
        
    //     monthly:[
    //         {
    //             description:"Hello",
    //             id:1,
    //             mostPopular:true,
    //             name:"Posi",
    //             price:100,
    //             perks:[
    //                 "Hello"
    //             ]
    //         }
    //     ],
    //     yearly:""
    
    // })
    
    
    const [activeBtn, setActiveBtn] = useState('monthly')

    
   

    // const [allPlans, setAllPlans] = useState([
        
           
    //             {
    //                 "description": "For most business that want to optimize web queries",
    //                 "id": 1,
    //                 "mostPopular": false,
    //                 "name": "Free",
    //                 "perks": [
    //                     "5 links",
    //                     "Own analytics platform",
    //                     "Mail support",
    //                     "Minimally optimized hashtags",
    //                     "1 user only"
    //                 ],
    //                 "price": 0,
    //                 planType:"monthly"
    //             },
    //             {
    //                 "description": "For most business that want to optimize web queries",
    //                 "id": 2,
    //                 "mostPopular": false,
    //                 "name": "Base",
    //                 "perks": [
    //                     "12 links",
    //                     "Own analytics platforms",
    //                     "Weekday chat support",
    //                     "Minimally optimized hashtags",
    //                     "5 users maximum"
    //                 ],
    //                 "price": 50,
    //                 planType:"monthly"
    //             },
    //             {
    //                 "description": "For most businesses that want to optimize web queries",
    //                 "id": 3,
    //                 "mostPopular": true,
    //                 "name": "Pro",
    //                 "perks": [
    //                     "50 links",
    //                     "Own analytics platform",
    //                     "24/7 chat support",
    //                     "Fully optimized hashtags",
    //                     "`10 users maximum"
    //                 ],
    //                 "price": 100,
    //                 planType:"monthly"
    //             },
    //             {
    //                 "description": "For most businesses that want to optimize web queries",
    //                 "id": 4,
    //                 "mostPopular": false,
    //                 "name": "Enterprise",
    //                 "perks": [
    //                     "Unlimited links",
    //                     "Company-wide analytics platform",
    //                     "24/7 chat support",
    //                     "Fully optimized hashtags",
    //                     "Unlimited users"
    //                 ],
    //                 "price": 200,
    //                 planType:"monthly"
    //             },
            
    //             {
    //                 "description": "For most business that want to optimize web queries",
    //                 "id": 1,
    //                 "mostPopular": false,
    //                 "name": "Base",
    //                 "perks": [
    //                     "12 links",
    //                     "Own analytics platforms",
    //                     "Weekday chat support",
    //                     "Minimally optimized hashtags",
    //                     "10 users maximum"
    //                 ],
    //                 "price": 500,
    //                 planType:"yearly"
    //             },
    //             {
    //                 "description": "For most businesses that want to optimize web queries",
    //                 "id": 2,
    //                 "mostPopular": true,
    //                 "name": "Pro",
    //                 "perks": [
    //                     "50 links",
    //                     "Own analytics platform",
    //                     "24/7 chat support",
    //                     "Fully optimized hashtags",
    //                     "`20 users maximum"
    //                 ],
    //                 "price": 1000,
    //                 planType:"yearly"
    //             },
    //             {
    //                 "description": "For most business that want to optimize web queries",
    //                 "id": 3,
    //                 "mostPopular": false,
    //                 "name": "Premium",
    //                 "perks": [
    //                     "100 links",
    //                     "Own analytics platform",
    //                     "24/7 chat support",
    //                     "Fully optimized hashtags",
    //                     "100 maximum users"
    //                 ],
    //                 "price": 1500,
    //                 planType:"yearly"
    //             },
    //             {
    //                 "description": "For most businesses that want to optimize web queries",
    //                 "id": 4,
    //                 "mostPopular": false,
    //                 "name": "Enterprise",
    //                 "perks": [
    //                     "Unlimited links",
    //                     "Company-wide analytics platform",
    //                     "24/7 chat support",
    //                     "Fully optimized hashtags",
    //                     "Unlimited users"
    //                 ],
    //                 "price": 2000,
    //                 planType:"yearly"
    //             }
    //         ]
        
                                 
            
        
    // )
    
    // useEffect(()=>{
    //     const postYearlyPlans = async()=>{
    //         const res = await fetch(`https://recrowdly-2e455-default-rtdb.firebaseio.com/planList.json`, {
    //             method:"PUT",
    //             body:JSON.stringify(allPlans)
              
                
    //         })
    //         const postedPlans = await res.json()            
    //     }
    //     postYearlyPlans()
    // }, [allPlans])
   
 
            
    console.log(plans);

//      const [newObject, setNewObject] = useState<Plans[]>([
//          {
        
       
            
//                 description:"Hello",
//                 id:1,
//                 mostPopular:true,
//                 name:"Posi",
//                 price:100,
//                 perks:[
//                     "Hello"
//                 ],
//                 planType:"monthly"
            
        
    
//     },
//     {
//         description:"Hello",
//         id:1,
//         mostPopular:true,
//         name:"Posi",
//         price:100,
//         perks:[
//             "Hello"
//         ],
//         planType:"monthly"
//     }
// ])
    
    return (
        <section className={styles.pricingSection}>
            
            <div className='container'>
                <div className={styles.content}>

                    <div className={styles.headerSection}>
                        <h3>Simple, transparent pricing</h3>

                        <p>Attractive packages . No surprise fees.</p>
                        <div className={styles.buttonContainer}>
                            <button className={`${activeBtn === 'monthly' ? styles.active : ''}`} onClick={() => setActiveBtn('monthly')}>One-off</button>
                            <button className={`${activeBtn === 'yearly' ? styles.active : ''}`} onClick={() => setActiveBtn('yearly')}>Contractual</button>
                        </div>
                    </div>

                    <div className={styles.cardSection}>
                        {plans.filter(plan=>plan.planType===activeBtn).map(plan=>{
                            const {id, name, description, perks, mostPopular, price, planType} = plan
                            return(
                                <div key={id} className={styles.card}>
                            {mostPopular ? <span className={styles.popularityFlag}>
                                MOST POPULAR
                            </span> : null}
                            <p className={styles.planPrice}>
                                <span className={styles.amount}>${price}</span>
                                <span> /month</span>
                            </p>
                            <div className={styles.planPerks}>
                                <span className={styles.header}>
                                    {name}
                                </span>
                                <p>{description}</p>
                                <ul>
                                    {perks.map(perk=>(
                                       <li key={perk}><i><FaCheck /></i><span>{perk}</span></li>

                                    ))}
                                  
                                </ul>
                            </div>
                            <button>Choose plan</button>
                        </div>
                            )

                        })}

                       

                    </div>

                    {/* <div>
                        {allPlans.filter(plan=>plan.planType===activeBtn).map((plan, index)=>{
                            const {name} = plan
                            return(
                                <div key={index}>
                                    {name}
                                </div>
                            )
})}
                    </div> */}
                    {/* <div className={styles.cardSection}>
                        {plans[activeBtn].map(plan=>{
                            const {id, name, description, perks, mostPopular, price} = plan
                            return(
                                <div key={id} className={styles.card}>
                            {mostPopular ? <span className={styles.popularityFlag}>
                                MOST POPULAR
                            </span> : null}
                            <p className={styles.planPrice}>
                                <span className={styles.amount}>{price}</span>
                                <span> /month</span>
                            </p>
                            <div className={styles.planPerks}>
                                <span className={styles.header}>
                                    {name}
                                </span>
                                <p>{description}</p>
                                <ul>
                                    {perks.map(perk=>(
                                       <li key={perk}><i><FaCheck /></i><span>{perk}</span></li>

                                    ))}
                                  
                                </ul>
                            </div>
                            <button>Choose plan</button>
                        </div>
                            )

                        })}

                       

                    </div> */}

                </div>

            </div>
        </section>
    );
}

export default Pricing;

// const getStaticProps=async({})=>{
//     const data = await fetch()
//     const res = await data.json()
//     return {
//         data{
            
//         }
//     }
// }

// export const getStaticProps:GetStaticProps =async (context)=>{
//     const data = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//     const plans: Plans = await data.json()

//     return {
//         props:{
//             plans:"John"
//         }
//     }
// }



