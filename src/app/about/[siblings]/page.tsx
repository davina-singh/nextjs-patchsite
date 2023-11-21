import Link from 'next/link'

type siblingParam = {params: {siblings: string}}

export default function Page({params}: siblingParam ) {
    const modTitle = params.siblings[0].toUpperCase() + params.siblings.slice(1)
    return (
        {
            title: `Patch's Siblings - ${modTitle}`,
            description: `Patch's Siblings - fun facts about ${params.siblings}`
        }
    )
}