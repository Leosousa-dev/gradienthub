import styles from './page.module.css'
import Hero from "@/components/hero/hero";
import GradientSection from '@/components/sectionGradients/gradients';


export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Hero/>
        <GradientSection/>
      </main>
      <footer className={styles.footer}>
        <p className={styles.pfooter}>© 2022 Leonardo, no cookies here 🍪</p>
      </footer>
    </>
  )
}
