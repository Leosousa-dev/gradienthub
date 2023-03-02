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
        </nav>
    )
}