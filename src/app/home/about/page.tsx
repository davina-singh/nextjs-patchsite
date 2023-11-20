import Link from 'next/link'

export default function Page() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <p>This is the About Page</p>
            <p>Like his siblings, he is responsible and cute, often fantasizing about mauling the villain Dirty Dawson from the Thunderbolt television series. He looks up to Thunderbolt and his father as his role models, especially after he is rescued by them. When attacked by Jasper and Horace, Patch was the only one of the puppies to attempt to fight back. He also holds a small rivalry with Lucky. He and Lucky are very similar in personality; however, there are a few differences. Lucky is confident and arrogant, as opposed to Patch, who is insecure and humble. Lucky is apparently considered the favorite of the pups; this could be part of their rivalry.
            </p>
            <Link href='./contact'>Go to Contact</Link>
        </div>
    )
}