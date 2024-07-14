import { Bus } from 'lucide-react'
import React from 'react'
import { locations } from './data'

export default function HowToReach() {
    return (
        <div>
            <h1 className='md:text-5xl text-3xl text-green-500 font-semibold text-center pb-10'>HOW TO REACH?</h1>

            <div className='flex flex-wrap gap-4 items-start justify-center'>
                {
                    locations.map((location, idx) =>
                        <section key={idx} className="border shadow flex flex-col gap-4 hover:scale-105 duration-200 md:h-[250px] justify-start items-center p-4 rounded-md max-w-[300px]">
                            <>
                                {location.icon}
                            </>
                            <p className='text-sm text-justify px-2 pb-2'>
                                {location.descp}
                            </p>
                        </section>
                    )
                }
            </div>

        </div>
    )
}
