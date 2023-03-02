import styles from './page.module.css'
import GradientSection from '@/components/sectionGradients/gradients';
import Menu from '@/components/menu/menu';
import SectionWhy from '@/components/sectionWhy/sectionwhy';


export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Menu/>
        <GradientSection/>
        <SectionWhy/>
      </main>
      <footer className={styles.footer}>
        <p className={styles.pfooter}>© 2022 Leonardo, no cookies here 🍪</p>
      </footer>
    </>
  )
}
