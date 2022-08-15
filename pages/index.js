// import Head from 'next/head'
import Image from 'next/image'
import HeadComponent from '../components/head/HeadComponent'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import Widget from '../components/widget/Widget'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={''}>
      <HeadComponent />
      <div className={styles.home}>
        <Sidebar />
        <div className={styles.home_container}>
          <Navbar />
          <div className={styles.widgets}>
            <Widget type={'user'}/>
            <Widget type={'order'}/>
            <Widget type={'earning'}/>
            <Widget type={'balance'}/>
          </div>
        </div>
      </div>
      
      
    </div>
  )
}
