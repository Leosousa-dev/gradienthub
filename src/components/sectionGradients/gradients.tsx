import Card from "../cardGradient/card";
import styles from './gradientSection.module.css'
import {gradients} from '@/data/data.json'


const GradientSection = ()=>{
    return(
        <section className={styles.section}>
            <ul className={styles.listCards}>
               {gradients.map((gradeint,id )=>(
                   <li key={id}><Card key={id} colors={gradeint.colors}/></li>
               ))}
            </ul>
        </section>
    )
}

export default GradientSection;