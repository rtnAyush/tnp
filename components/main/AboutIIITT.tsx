import React from 'react'
import UpdateSection from './UpdateSection'
import Image from 'next/image'

export default function AboutIIITT() {
    return (
        <div id='about-us' >
            <h2 className='h-20'></h2>
            <div>
                <h1 className='text-green-500 font-bold text-2xl md:text-3xl text-center mb-2'>About IIIT Trichy</h1>

                <section className='grid md:grid-cols-2  items-center justify-items-center gap-4 shadow rounded md:p-10 p-4'>

                    <p className='text-lg text-gray-600 text-justify order-2 md:order-1'>
                        <strong>Indian Institute of Information Technology Tiruchirappalli (IIITT)</strong> , also known as IIIT Trichy, is an <strong className='font-semibold'>Institute of National Importance</strong> and one among the 25 IIITs proposed under the non-profit <strong className='font-semibold'>Public-Private Partnership (PPP)</strong> Model by MHRD. IIITT is an academic and research institute fully funded by Government of India, Government of Tamil Nadu and Industry Partners in the ratio of 50:35:15. Industry partners include <strong className='font-semibold'>Tata Consultancy Services (TCS), Cognizant Technology Solutions (CTS), Infosys, Ramco Systems, ELCOT, and Navitas (TAKE Solutions).</strong>
                    </p>

                    <div className='h-[250px] w-full md:w-[350px] rounded-lg relative order-1 md:order-2 overflow-hidden'>
                        <Image
                            src='/iiitt-img.jpg'
                            alt='iiitt'
                            className='rounded-md object-cover'
                            fill
                        />
                    </div>
                </section>
            </div>
        </div>
    )
}
