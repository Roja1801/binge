import React from 'react'
import Head from 'next/head'
import Card from '../../components/Card';

const Movie = ({ movie, moreMovies }) => {
    console.log(movie?.spoken_languages.map(lang => lang.english_name))

    const BASE_URL = "https://image.tmdb.org/t/p/original";

    return (


        <div className="p-10 md:px-10 lg:px-20 xl:px-36">
            <Head>
                <title>BINGE |{movie.title}</title>
                <meta name="description" content={movie.tagline} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='flex lg:flex-row flex-col gap-4 items-center justify-center'>

                <div className='lg:w-[200%] flex lg:h-screen'>
                    <img
                        src={`${BASE_URL}${movie?.poster_path}`}
                        alt={movie?.title}
                        width={1080}
                        height={1920}
                        layout="responsive"
                    />
                </div>
                <div className='flex flex-col gap-10 justify-center items-center'>

                    <div className="flex flex-col gap-5 justify-center items-left ml-6 text-white">
                        <p className=" text-5xl font-extrabold text-left">
                            {movie?.title}
                        </p>
                        <p className="text-3xl text-left">
                            {movie?.tagline}
                        </p>
                        <p className="text-xl font-normal text-left">
                            {movie?.overview}
                        </p>
                    </div>
                    <div className='bg-[#d85c27] bg-opacity-20 text-white p-8 flex flex-col gap-5'>

                        <p className="text-lg">
                            Status:{" "}
                            <span className=" font-bold">
                                {movie?.status}
                            </span>
                        </p>
                        <p>
                            Movie Runtime:{" "}
                            <span className="font-bold">
                                {movie?.runtime}
                            </span>{" "}
                            minutes
                        </p>
                        <p className="text-md">
                            Release Date:{" "}
                            <span className=" font-bold">
                                {movie?.release_date}
                            </span>
                        </p>

                        <p className="text-md">
                            Language:{" "}
                            <span className="font-bold">
                                {movie?.spoken_languages.map(lang => lang.english_name)}
                            </span>
                        </p>
                        <p className="text-md">
                            Vote Average:{" "}
                            <span className="font-bold p-1 rounded-full bg-black">
                                {movie?.vote_average}
                            </span>
                            <p className="text-md">
                                Based on {" "}
                                <span className="font-bold ">
                                    {movie?.vote_count}
                                </span>
                                {" "}vote counts
                            </p>
                        </p>

                    </div>
                </div>

            </div>
            <div>
                <p className='text-3xl py-10 text-white font-extrabold'>Watch More</p>
                <div className='flex overflow-x-scroll scrollbar-hide whitespace-nowrap scroll-smooth'>

                    {moreMovies?.results.map((moreMovie) => {
                        return (
                            <Card
                                id={moreMovie.id}
                                redirect="movie"
                                data={moreMovie}
                                key={moreMovie.id}

                            />
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default Movie

export async function getServerSideProps(context) {
    const { id } = context.query;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`);
    const resW = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`);

    const movie = await res.json();
    const moreMovies = await resW.json();
    console.log(moreMovies)
    return {
        props: { movie, moreMovies }
    }
}