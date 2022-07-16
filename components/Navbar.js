import Link from 'next/link'
import styles from "../styles/Navbar.module.css"
import Image from "next/image"
import { useState, useEffect } from 'react'
import { useIsMobile } from '/scripts/detectWindowSize.js'

export default function Navbar() {
    const [navToggle, setNavToggle] = useState(false);
    const [screenSize, setScreensize] = useState(0);

    useEffect(() => {
        const onResize = () => {
            setScreensize(window.innerWidth);
            if (screenSize > 690) {
                setNavToggle(false);
            }
        }

        window.addEventListener("resize", onResize);
    
        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, [screenSize]);

    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbarText}>


                {/* Brand Name Logo */}
                <div className={styles.smallScreenNavbarContainer}>
                    <div onClick={() => setNavToggle(!navToggle)} className={styles.navbarIcon}>
                        <img src="/navbarIcon.svg"></img>
                    </div>
                    <div className={styles.brandNameLogo}>
                        <Link href="/">
                            <a className={styles.brandNameLogoText}>JSee Solutions</a>
                        </Link>
                    </div>
                </div>

                {/* Links to other pages */}
                <div className={styles.navbarLinksContainer}>
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

            {/* navbar toggle for small screen! */}
            <div className={navToggle ? styles.navToggleOn : styles.navToggleOff}>
                <div className={styles.navbarLinkToggleContainer}>
                    <span className={styles.navbarLinkToggle}>
                        <Link href="/WhoWeAre">
                            <a>WHO WE ARE</a>
                        </Link>
                    </span>

                    <span className={styles.navbarLinkToggle}>
                        <Link href="/Products">
                            <a>PRODUCTS</a>
                        </Link>
                    </span>

                    <span className={styles.navbarLinkToggle}>
                        <Link href="/Services">
                            <a>SERVICES</a>
                        </Link>

                    </span>

                    <span className={styles.navbarLinkToggle}>
                        <Link href="/ContactUs">
                            <a>CONTACT US</a>
                        </Link>
                    </span>
                </div>
            </div>


        </div>
    )
}
