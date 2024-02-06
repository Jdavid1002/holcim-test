import LoginPage from '@/sections/auth/login/page'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <LoginPage />
    </main>
  )
}
