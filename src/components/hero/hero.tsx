import Image from 'next/image';
import gradientPreview from '@/assets/gradientPreview.svg'
import styles from './hero.module.css'
import Menu from '../menu/menu';
import Link from 'next/link';

export default function Hero(){
    return(
        <section className={styles.hero}>
            <Menu/>
            <div className={styles.container}>
               <div className={styles.box}>
                  <span>✅ Open source tool</span>
                  <h1>Amazing <strong className={styles.textgradient}>gradients</strong> for your next design project</h1>
                  <p>your designs with our custom and ready-to-use gradients</p>
                  <Link href="/gradients" className={styles.button}>View gradients 👉️</Link>
               </div>
               <div>
                 <Image src={gradientPreview} alt="cardGradient"/>
               </div>
            </div>
        </section>
    )
}

