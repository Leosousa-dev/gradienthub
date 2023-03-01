import Card from "../cardGradient/card";
import styles from './gradientSection.module.css'
import {gradients} from '@/data/data.json'

export default function GradientSection(){
    return(
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <h2>🤯 Amazing <strong className={styles.textgradient}>gradients</strong> for your projects</h2>
                    <p>Create unique and impressive designs with our custom gradients</p>
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
