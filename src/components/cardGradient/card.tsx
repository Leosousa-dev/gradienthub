import styles from './card.module.css'
import copyicon from '@/assets/copyicon.svg'
import Image from 'next/image'

type Cardprops ={
    colors: string[]
}


const Card = ({colors}:Cardprops)=>{
    return(
        <div className={styles.card}>
           <div className={styles.gradient} style={{background: `linear-gradient(123.5deg, ${colors[0]} 0%, ${colors[1]} 100%)`}}/>
           <div className={styles.copyarea}>
                <div className={styles.box}>
                    <span className={styles.colorcode}>{colors[0]}</span>
                    <Image src={copyicon} alt="copyicon" style={{width: '14px'}}/>
                </div>
                <div className={styles.box}>
                    <span className={styles.colorcode}>{colors[1]}</span>
                    <Image src={copyicon} alt="copyicon" style={{width: '14px'}}/> 
                </div>
           </div>
        </div>
    )
}

export default Card;