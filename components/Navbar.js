import Link from 'next/link'
import styles from "../styles/Navbar.module.css"

export default function Navbar() {
    return (
        <div className={styles.navbarText}>
            <div >
                <span style={{marginRight: 20}} className={styles.navbarLink}>
                    <Link href="/">
                        <a className={"title"}>JSee Solutions</a>
                    </Link>
                </span>

                <div className={styles.navbarLinkContainer}>
                    <span className={styles.navbarLink}>
                        <Link href="/WhoWeAre">
                            <a>WHO WE ARE</a>
                        </Link>
                    </span>

                    <span className={styles.navbarLink}>
                        <Link href="/Products">
                            <a>PRODUCTS</a>
                        </Link>
                    </span>

                    <span className={styles.navbarLink}>
                        <Link href="/Services">
                            <a>SERVICES</a>
                        </Link>

                    </span>

                    <span className={styles.navbarLink}>
                        <Link href="/ContactUs">
                            <a>CONTACT US</a>
                        </Link>
                    </span>
                </div>

                

            </div>


        </div>
    )
}
