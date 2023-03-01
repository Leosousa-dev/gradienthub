import Image from 'next/image';
import emoji from '@/assets/emoji.png'
import preview from '@/assets/preview.svg'
import styles from './hero.module.css'
import Menu from '../menu/menu';

export default function Hero(){
    return(
        <section className={styles.hero}>
            <Menu/>
            <div className={styles.flex}>
                  <Image src={emoji} alt="emoji nice" className={styles.emoji}/>
                <h1 className={styles.title}>GridientHub</h1>
            </div>
            <Image src={preview} alt="exploding-head"/>
            <p className={styles.paragraph}>This page offers vibrant and eye-catching gradients to enhance the UI appearance.</p>
            <p className={styles.quote}>“Simplicity and the highest degree of sophistication”</p>
        </section>
    )
}

