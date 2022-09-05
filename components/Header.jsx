import React, { useState } from 'react'
import { BiCameraMovie } from 'react-icons/bi'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useRouter } from 'next/router'
import { AiOutlineClose } from 'react-icons/ai'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { BsSearch } from 'react-icons/bs'

const Header = () => {
    const router = useRouter()
    const [show, setShow] = useState(false)
    const [drop, setDrop] = useState(false)

    return (
        <div className='p-3 px-10 flex justify-between md:flex md:justify-between md:items-center sticky top-0 z-30 bg-[#132e4c]'>
            <div className='flex flex-col text-white '>
                <BiCameraMovie className='h-14 w-14 text-[#d85c27] cursor-pointer' />
                <p className='font-mono text-xl'>BINGE</p>
            </div>

            <div className='flex flex-row'>
                <div className='hidden md:flex md:flex-row md:gap-16 items-center justify-center '>

                    <a onClick={() => router.push('/')} className={`text-xl text-white hover:text-orange-700 decoration-[#d85c27] decoration-4 cursor-pointer  ${router.pathname == "/" && "font-bold text-orange-700"}`}>Home</a>

                    <a onClick={() => router.push('/movies')} className={`text-xl text-white hover:text-orange-700 decoration-[#d85c27] decoration-4 cursor-pointer  ${router.pathname == "/movies" && "font-bold text-orange-700"}`}>Movies</a>


                    <a onClick={() => router.push('/tv')} className={`text-xl text-white hover:text-orange-700 decoration-[#d85c27] decoration-4 cursor-pointer  ${router.pathname == "/tv" && "font-bold text-orange-700"}`}>Tv Shows</a>


                    <a className="text-xl flex-col text-white hover:text-orange-700 decoration-[#d85c27] decoration-4 cursor-pointer dropdown inline-block relative">
                        <button onClick={() => setDrop(prev => !prev)} >

                            <div className='inline-flex justify-center items-center cursor-pointer'>

                                <p>Genre</p>
                                <RiArrowDropDownLine className='w-12 h-12' />
                            </div>
                        </button>
                        {drop &&
                            <ul className='dropdown-menu absolute hidden bg-[#132e4c] p-2'>

                                <li>

                                    <a onClick={() => router.push('/genreMovies')} className={`text-lg text-white hover:text-orange-700 decoration-[#d85c27] decoration-4 cursor-pointer  ${router.pathname == "/genreMovies" && "font-bold text-orange-700"}`}>Movies</a>
                                </li>
                                <li>

                                    <a onClick={() => router.push('/genreTvShows')} className={`text-lg text-white hover:text-orange-700 decoration-[#d85c27] decoration-4 cursor-pointer  ${router.pathname == "/genreTvShows" && "font-bold text-orange-700"}`}>Tv Shows</a>
                                </li>
                            </ul>

                        }
                    </a>
                    <a onClick={() => router.push('/search')} className={`text-xl text-white hover:text-orange-700 decoration-[#d85c27] decoration-4 cursor-pointer  ${router.pathname == "/search" && "font-bold text-orange-700"}`}>
                        <BsSearch className='w-6 h-6' />
                    </a>
                </div>

                <div className='flex flex-col justify-end items-end p-5 gap-7'>
                    <GiHamburgerMenu className='md:hidden  h-12 w-12 text-[#d85c27] flex flex-col justify-between items-center' onClick={() => setShow(prev => !prev)} />
                    {show &&
                        <div className={`flex flex-col justify-start items-end p-5 border-t-2 border-b-2 w-[300%] transform ${show ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md  md:hidden`}>

                            <ul className='md:hidden flex flex-col gap-3 items-center justify-center'>

                                <li>                    <a onClick={() => router.push('/')} className='text-xl text-white hover:underline decoration-[#d85c27] decoration-4'>Home</a>
                                </li>
                                <li>                    <a onClick={() => router.push('/movies')} className='text-xl text-white hover:underline decoration-[#d85c27] decoration-4'>Movies</a>
                                </li>
                                <li>                    <a onClick={() => router.push('/tv')} className='text-xl text-white hover:underline decoration-[#d85c27] decoration-4'>Tv Shows</a>
                                </li>
                                <li><a className='text-xl text-white '><button onClick={() => setDrop(prev => !prev)} >
                                    <div className='flex justify-center items-center'>

                                        <p>Genre</p>
                                        <RiArrowDropDownLine className='w-12 h-12' />
                                    </div>
                                </button>
                                    {drop &&
                                        <div className='flex flex-col '>


                                            <a onClick={() => router.push('/genreMovies')}>For Movies</a>
                                            <a onClick={() => router.push('/genreTvShows')}>For Tv shows</a>
                                        </div>
                                    }</a>
                                </li>
                                <li>
                                    <a onClick={() => router.push('/search')} className={`text-xl text-white hover:text-orange-700 decoration-[#d85c27] decoration-4 cursor-pointer  ${router.pathname == "/search" && "font-bold text-orange-700"}`}>
                                        <BsSearch className='w-6 h-6' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    }

                </div>
            </div>

        </div>
    )
}

export default Header
