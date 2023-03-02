import Card from "../cardGradient/card";
import styles from './gradientSection.module.css'
import {gradients} from '@/data/data.json'

export default function GradientSection(){
    return(
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <h2>🤯 Amazing <strong className={styles.textgradient}>gradients</strong> for your next design project</h2>
                    <p>Transform your designs with our custom, ready-to-use gradients</p>
                </div>
            </div>
            <ul className={styles.listCards}>
               {gradients?.map((gradient,id )=>(
                   <li key={id}><Card key={id} colors={gradient.colors}/></li>
               ))}
            </ul>   
        </section>
    )
}
