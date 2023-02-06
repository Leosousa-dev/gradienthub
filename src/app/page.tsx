import styles from './page.module.css'
import Hero from "@/components/hero/hero";
import Gradients from '@/components/sectionGradients/gradients';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero/>
      <Gradients/>
    </main>
  )
}
