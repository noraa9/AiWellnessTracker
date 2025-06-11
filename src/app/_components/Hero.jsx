import React from 'react'
import Image from 'next/image'
import { ContainerScroll } from '@/components/container-scroll-animation'


function Hero () {
    return (
        <section className='bg-gray-50 flex items-center flex-col'>
            <div className="flex flex-col overflow-hidden">
                <ContainerScroll
                    titleComponent={
                    <>
                        <h1 className="text-4xl font-bold text-[#31c4f3]  dark:text-white">
                        Manage your health with AI-Driven Personal <br />
                        <span className="text-4xl md:text-[6rem] text-[#60bd91] font-bold mt-1 leading-none">
                            Wellness Advisor
                        </span>
                        </h1>
                    </>
                    }
                >
                    <img
                    src={`/dashboard.png`}
                    alt="hero"
                    height={720}
                    width={1400}
                    className="mx-auto rounded-2xl object-cover h-full object-left-top"
                    draggable={false}
                    />
                </ContainerScroll>
            </div>
        </section>
    )
}

export default Hero;