import Link from 'next/link'
import styles from './page.module.css'
import { Amatic_SC } from 'next/font/google'

export default function Home() {
  return (
    <div className={styles.pageBackground}>
      <main className="flex min-h-screen flex-col items-center justify-between">
      <h2 className="p-5 font-bold">Woof, this is home page of my website!</h2>
      <div className="flex space-x-3.5 underline font-bold p-5"> 
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/contact'>Contact</Link>
      </div>
      <div className="pb-24">
      <img src="https://d23.com/app/uploads/2022/01/1180w-600h_012522_101-Dalmatians-Quiz_02.jpg" />
      </div>
    </main>
  </div>  
  )
}
