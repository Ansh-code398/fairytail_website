import React from 'react'
import { activities } from '../../data'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

const Activity = ({activity, source}) => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={activity.image} />
                <div className="text-center lg:w-2/3 w-full prose prose-xl">
                    <MDXRemote {...source} />
                </div>
            </div>
        </section>
    )
}

export async function getServerSideProps(context) {
    const { slug } = context.query
    const activity = activities.find((activity) => activity.slug === slug)
    const mdxSource = await serialize(activity.content)
    return {
        props: {
            activity,
            source: mdxSource
        }
    }
}

export default Activity