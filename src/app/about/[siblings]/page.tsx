import Link from 'next/link'
import { getPostsBySlug, getSiblings } from '@/lib/siblings'
import { notFound } from 'next/navigation'

type blogPostParams = {
    params: {
        id: number;
    }
}

type siblingParam = {params: {siblings: string}}

// export function generateStaticParams() {
//     const posts = getPosts()
//     return posts.map((post) => {
//         return {id : post.id}
//     })

// }

export function generateMetadata({params}: siblingParam ) {
    const modTitle = params.siblings[0].toUpperCase() + params.siblings.slice(1)
    return (
        {
            title: `Patch's Siblings - ${modTitle}`,
            description: `Patch's Siblings - fun facts about ${params.siblings}`
        }
    )
}


export default function Page({params}: siblingParam ) {

    const dog = getPostsBySlug(params.siblings)
    return (
        <div className="flex flex-col items-center p-0">
            <h1>{dog.title}</h1>
            <h2 className='p-5'>This is my dynamic route paramater: {params.siblings} </h2>
            <p>{dog.content}</p>
            <Link href='/about'>{`<-- Go back`}</Link>
        </div>
    )
}

