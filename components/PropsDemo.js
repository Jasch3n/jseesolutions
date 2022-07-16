import Link from 'next/link'
import styles from "../styles/Navbar.module.css"

export default function PropsDemo(props) {
    return (
        <div className={styles.navbarText}>
            Hello, {props.name}!
        </div>
    )
}
