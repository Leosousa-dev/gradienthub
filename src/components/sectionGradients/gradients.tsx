import Card from "../cardGradient/card";
import styles from './gradientSection.module.css'
import {gradients} from '@/data/data.json'


const Gradients = ()=>{
    return(
        <section className={styles.section}>
            <ul className={styles.listCards}>
               {gradients.map((gradeint,id )=>(
                    <Card key={id} colors={gradeint.colors}/>
               ))}
            </ul>
        </section>
    )
}

export default Gradients;