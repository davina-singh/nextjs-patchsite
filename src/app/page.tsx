import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <h2 className="p-5 font-bold">Woof, this is home page of my website!</h2>
      <div className="flex space-x-3.5 underline font-bold p-5"> 
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/contact'>Contact</Link>
      </div>
      <div className="p-5">
      <img src="https://d23.com/app/uploads/2022/01/1180w-600h_012522_101-Dalmatians-Quiz_02.jpg" />
      </div>
    </main>
  )
}
