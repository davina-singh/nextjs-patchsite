import Link from 'next/link'

type siblingParam = {params: {siblings: string}}

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
    return (
        <div className="flex flex-col items-center p-0">
            <h2 className='p-5'>This is my dynamic route paramater: {params.siblings} </h2>
            <Link href='/about'>{`<-- Go back`}</Link>
        </div>
    )
}