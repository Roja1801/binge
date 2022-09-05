import Head from 'next/head'
import React from 'react'
import Card from '../../components/Card'

const Movies = ({ popularTvShows, trendingTvShows, topRatedTvShows }) => {
    console.log(popularTvShows.id)
    return (
        <div>
            <Head>
                <title>BINGE</title>
                <meta name="description" content="Binge Watch Everywhere" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='flex flex-col p-10 '>

                <h1 className='text-2xl text-white p-2'>Popular Tv Shows</h1>
                <div className='flex overflow-x-auto scrollbar-hide whitespace-nowrap scroll-smooth'>
                    {popularTvShows.map((popularTvShow) => {
                        return (
                            <Card
                                id={popularTvShow.id}
                                redirect="shows"
                                data={popularTvShow}
                            />
                        )
                    })}
                </div>
            </div>
            <div className='flex flex-col p-10'>
                <h1 className='text-2xl text-white p-2'>Trending Tv Shows</h1>
                <div className='flex overflow-x-auto scrollbar-hide whitespace-nowrap scroll-smooth'>
                    {topRatedTvShows.map((topRatedTvShow) => {
                        return (
                            <Card
                                id={topRatedTvShow.id}
                                redirect="shows"
                                data={topRatedTvShow}

                            />
                        )
                    })}
                </div>
            </div>
            <div className='flex flex-col p-10'>
                <h1 className='text-2xl text-white p-2'>Top Rated Tv Shows</h1>
                <div className='flex overflow-x-auto scrollbar-hide whitespace-nowrap scroll-smooth'>
                    {trendingTvShows.map((trendingTvShow) => {
                        return (
                            <Card
                                id={trendingTvShow.id}
                                redirect="shows"
                                data={trendingTvShow}
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
    const res = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`)
    const resT = await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
    const resTR = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`)

    const data = await res.json()
    const dataT = await resT.json()
    const dataTR = await resTR.json()

    const popularTvShows = data.results
    const trendingTvShows = dataT.results
    const topRatedTvShows = dataTR.results
    console.log(popularTvShows)
    return {
        props: { popularTvShows, trendingTvShows, topRatedTvShows },
    }
}