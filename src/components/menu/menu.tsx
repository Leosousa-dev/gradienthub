import logo from '@/assets/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.css'


export default function Menu(){
    return(
        <nav className={styles.menu}>
            <div>
                <Image src={logo} alt="logo gradienthub" className={styles.img}/>
            </div>
            <ul className={styles.list}>
                <li>
                    <Link href="#"className={styles.link}>Home</Link>
                </li>
                <li><Link href="/" className={styles.link}>Gradients</Link></li>
                <li><Link href="#SectionWhy"className={styles.link}>Why use 🤔</Link></li>
            </ul>
        </nav>
    )
}