import Head from 'next/head'
import Image from 'next/image'
// import Footer from '../components/footer'
// import Hader from '../components/hader'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home(){
  return (
    <div>
      {/* <Hader/> */}
      <h1> Barev</h1>
      <Link href='/burgers'><a>Bolor tesakanin aystex e</a></Link>
      {/* <Footer/> */}
    </div>
  )
}