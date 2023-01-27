
import { Inter } from '@next/font/google'
import Trials from '../components/trials'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Trials/>
    </>
  )
}
