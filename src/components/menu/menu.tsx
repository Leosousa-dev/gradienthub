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
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">Gradients</Link></li>
                <li><Link href="/">Why use 🤔</Link></li>
            </ul>
        </nav>
    )
}