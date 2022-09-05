import Head from 'next/head'
import React from 'react'
import Card from '../../components/Card'
import { BiArrowToRight } from 'react-icons/bi'

const Movies = ({ popularMovies, trendingMovies, topRatedMovies }) => {
    return (
        <div>
            <Head>
                <title>BINGE</title>
                <meta name="description" content="Binge Watch Everywhere" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <div className='flex flex-col p-10 '>

                <div className='flex justify-between items-center '>
                    <h1 className='text-2xl text-white p-2'>Popular Movies</h1>
                    <div className='text-2xl text-[#d85c27] p-2 font-semibold flex items-center gap-1'>
                        SLIDE
                        <span>
                            <BiArrowToRight className='h-12 w-12 ' />
                        </span>
                    </div>
                </div>                <div className='flex overflow-x-auto scrollbar-hide whitespace-pre scroll-smooth'>

                    {popularMovies.map((popularMovie) => {
                        return (
                            <Card
                                id={popularMovie.id}
                                redirect="movie"
                                data={popularMovie}
                                key={popularMovie.id}

                            />

                        )
                    })}

                </div>
            </div>
            <div className='flex flex-col p-10'>
                <div className='flex justify-between items-center '>
                    <h1 className='text-2xl text-white p-2'>Trending Movies</h1>
                    <div className='text-2xl text-[#d85c27] p-2 font-semibold flex items-center gap-1'>
                        SLIDE
                        <span>
                            <BiArrowToRight className='h-12 w-12 ' />
                        </span>
                    </div>
                </div>                <div className='flex overflow-x-auto scrollbar-hide whitespace-nowrap scroll-smooth'>
                    {trendingMovies.map((trendingMovie) => {
                        return (
                            <Card
                                id={trendingMovie.id}
                                redirect="movie"
                                data={trendingMovie}
                                key={trendingMovie.id}

                            />
                        )
                    })}
                </div>
            </div>
            <div className='flex flex-col p-10'>
                <div className='flex justify-between items-center '>
                    <h1 className='text-2xl text-white p-2'>Top Rated Movies</h1>
                    <div className='text-2xl text-[#d85c27] p-2 font-semibold flex items-center gap-1'>
                        SLIDE
                        <span>
                            <BiArrowToRight className='h-12 w-12 ' />
                        </span>
                    </div>
                </div>                <div className='flex overflow-x-auto scrollbar-hide whitespace-nowrap scroll-smooth'>
                    {topRatedMovies.map((topRatedMovie) => {
                        return (
                            <Card
                                id={topRatedMovie.id}
                                redirect="movie"
                                data={topRatedMovie}
                                key={topRatedMovie.id}

                            />

                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Movies

export async function getServerSideProps(context) {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
    const resT = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
    const resTR = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`)
    const data = await res.json()
    const dataT = await resT.json()
    const dataTR = await resTR.json()
    const popularMovies = data.results
    const trendingMovies = dataT.results
    const topRatedMovies = dataTR.results


    return {
        props: { popularMovies, trendingMovies, topRatedMovies }, // will be passed to the page component as props
    }
}