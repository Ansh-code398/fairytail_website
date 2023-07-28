import React from 'react'
import { activities } from '../../data'
const Activities = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {activities.map((activity) => {
                        const { id, name, slug, image, description } = activity
                        return (
                            <div key={id} className="lg:w-1/3 sm:w-1/2 p-4 min-h-[300px]">
                                <div className="flex relative h-full">
                                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={image}/>
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">{name}</h2>
                                        <p className="leading-relaxed">{description}</p>
                                        <a href={"/activities/" + slug} className="mt-3 text-indigo-500 inline-flex items-center">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }

                </div>
            </div>
        </section>

    )
}

export default Activities