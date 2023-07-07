import styles from './page.module.scss';
import { Header } from '../Componetns/Header/Header'
import { Hero } from '../Componetns/Hero/Hero'
import { MainSlider } from '../Componetns/MainSlider/MainSlider'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>

        <Header />
        <Hero />
        <MainSlider />

      </div>
    </main>
  )
}
