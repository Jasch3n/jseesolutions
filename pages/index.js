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
        

      </div>


      <img className={styles.fitImage} src="/peopleworking1.jpg"></img>
      
      <div className={styles.homePageMainContainer}> 
        <div>
          <div className={styles.mainHomeImageText}>Homepage Title</div>
        </div>

        <div className={styles.imageTextItemContainer}>
          <img className={styles.smallImage} src="/peopleworking1.jpg"></img>
          <div className={styles.smallTextContainer}>
            <div className={styles.smallImageTextTitle}> Real Impact, Satisfactory Service </div>
            <div className={styles.smallImageText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus interdum luctus. Mauris a tempus nisi.
              Quisque posuere ornare tempus. Aliquam rhoncus dapibus justo. Donec commodo pulvinar risus. </div>
          </div>
        </div>
      </div>
    </div>

  )
}
