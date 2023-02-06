import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import BlackFriday from './components/BlackFriday/BlackFriday'
import SetGift from './components/SentGift/SentGift'
import NewArrivals from './components/NewArrivals/NewArrivals'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={inter.className}>
      <section className="relative w-full pt-[95px] transition-all duration-500 ease-in-out  md:pt-[100px]">
        <div className="relative w-full">
          <BlackFriday />
          <SetGift/>
          <NewArrivals/>
          
        </div>
      </section>
    </div>
  )
}
