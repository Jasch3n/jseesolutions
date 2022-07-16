import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

// import components
import Navbar from "../components/Navbar"
import PropsDemo from "../components/PropsDemo"

export default function Home() {
  const [name, setName] = useState("") 

  return (
    <div> {/* This div should be full width and height */}
      <div className={styles.container}>
        <Navbar />
        {/* <input type="text" onChange={event => setName(event.target.value)} /> */}
        {/* <PropsDemo name={name} /> */}
        <br></br>

        {/* this is distinguished from the background, which should have full width */}
        <div className={styles.homePageMainContainer}> 
          This is the work in progress of the JSee Solutions Website. Coming Soon!
        </div>

      </div>
    </div>

  )
}
