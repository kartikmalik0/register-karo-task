import Image from 'next/image'
import React from 'react'
import HeroContact from './HeroContact'
import BenifitsMd from './BenifitsMd'
import Benfits from './Benfits'

const Hero = () => {
    return (
        <section className='min-h-[57.313rem] bg-center bg-cover hero-background relative'>
            <nav className="flex w-full bg-white md:bg-transparent items-center px-4 md:px-20 justify-between">
                <Image
                    src={"/logo.png"}
                    alt="logo"
                    height={178}
                    width={248}
                    className="w-[7.688rem] hidden md:block my-2"
                />
                <Image
                    src={"/logo-black.png"}
                    alt="logo"
                    height={178}
                    width={248}
                    className="w-[7.688rem] block md:hidden my-2"
                />
                <button className="group hidden  relative md:inline-flex h-12 text-[#ffff] items-center justify-center overflow-hidden rounded-md bg-primary px-6 font-medium text-white">
                    <span>Enquire now</span>
                    <div className="ml-1 transition group-hover:translate-x-1">
                        <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                        >
                            <path
                                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                                fill="currentColor"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </div>
                </button>

                <button className=' block md:hidden'>
                    <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.35352 6H17.3535" stroke="#393939" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M1.35352 1H10.3535" stroke="#393939" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M1.35352 11H13.3535" stroke="#393939" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                </button>
            </nav>
            <HeroContact />
            <BenifitsMd />
        </section>
    )
}

export default Hero
