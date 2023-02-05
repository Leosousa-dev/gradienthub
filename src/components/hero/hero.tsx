import Image from 'next/image';
import emoji from '@/assets/emoji.png'
import styles from './hero.module.css'
const Hero = ()=>{
    return(
        <section className={styles.hero}>
            <span>👋 Welcome to</span>
            <div className={styles.flex}>
                <Image src={emoji} alt="emoji nice"/>
                <h1 className={styles.title}>GridientHub</h1>
            </div>
            <p className={styles.paragraph}>Esta página oferece gradientes vibrantes e atraentes para melhorar a aparência da UI.</p>
            <p className={styles.quote}>“A simplicidade e o mais alto grau de sofisticação”</p>
        </section>
    )
}

export default Hero;