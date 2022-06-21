import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// import components
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      This is the work in progress of the JSee Solutions Website. Coming Soon!
    </div>
  )
}
