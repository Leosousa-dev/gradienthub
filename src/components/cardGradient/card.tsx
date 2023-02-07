import { useState } from 'react'
import styles from './card.module.css'

type Cardprops ={
    colors: string[]
}


const Card = ({colors}:Cardprops)=>{
    return(
        <div className={styles.card}>
            <div className={styles.preview} style={{background:`linear-gradient(123.5deg, ${colors[0]} 0%, ${colors[1]} 100%)`}}/>
            <div className={styles.copy}>
                <div className={styles.colors}>
                    <div className={styles.smallPreview} style={{background:`${colors[0]}`}}/>
                    <h4 className={styles.hexcopy}>
                        {colors[0]}
                    </h4>
                    <div className={styles.smallPreview} style={{background:`${colors[1]}`}}/>
                    <h4 className={styles.hexcopy}>
                        {colors[1]}
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Card;