import Link from 'next/link'

export default function Page() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <p>This my Contact page</p>
            <p>Patch is one of Pongo and Perdita's puppies</p>
            <Link href='./about'>Return to About</Link>
        </div>
    )
}