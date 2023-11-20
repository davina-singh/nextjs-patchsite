import Link from 'next/link'

export default function Page() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-5">
            <h2 className="font-bold">This is the home page</h2>
            <p className="text-center">Patch is one of the original 15 puppies. He feels lonely and left out often at times with his family, thinking that he's just one of the famous 101 Dalmatians, and longs for a chance to become separate and leave the shadow of his brothers and sisters. He is a good pup, very adventurous, bold, and strong-minded. Today, Patch is commonly used alongside Cruella De Vil as an icon to represent their respective films in merchandise and crossover material.
            </p>
            <Link className="underline" href='/about'>Go to About</Link>
        </div>
    )
}