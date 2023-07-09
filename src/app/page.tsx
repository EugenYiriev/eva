import styles from './page.module.scss';
import { Header } from '../Componetns/Header/Header'
import { Hero } from '../Componetns/Hero/Hero'
import { MainSlider } from '../Componetns/MainSlider/MainSlider'
import { OurRugs } from '../Componetns/OurRugs/OurRugs'
import { Comparisons } from '../Componetns/Comparisons/Comparisons'
import { Reviews } from '../Componetns/Reviews/Reviews'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>

        <Header />
        <Hero />
        <MainSlider />
        <OurRugs />
        <Comparisons />
        <Reviews />

      </div>
    </main>
  )
}
