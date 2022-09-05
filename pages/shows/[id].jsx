import React from 'react'
import Head from 'next/head'
import Card from '../../components/Card';
import Link from 'next/link';

const Show = ({ show, moreShows }) => {
    const BASE_URL = "https://image.tmdb.org/t/p/original";
    console.log(show)
    console.log(show?.spoken_languages.map(lang => lang.english_name))

    return (
        <div className="px-5 md:px-10 lg:px-20 xl:px-36 pt-5">
            <Head>
                <title>BINGE |{show.name}</title>
                <meta name="description" content={show.tagline} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-col xl:flex-row xl:gap-10">
                <div className="flex h-screen">
                    <img
                        src={`${BASE_URL}${show?.poster_path}`}
                        alt={show?.name}
                        width={1080}
                        height={1920}
                    />
                </div>


                <div className="flex flex-col text-white gap-3 xl:gap-5 xl:w-2/3">
                    <p className="text-3xl font-bold text-center xl:text-left xl:text-4xl xl:font-extrabold">
                        {show?.original_name}
                    </p>
                    <p className="text-md font-light xl:text-lg xl:font-normal">
                        {show?.overview}
                    </p>
                    <div className='bg-[#d85c27] md:justify-center md:items-center bg-opacity-20 text-white p-8 flex flex-col gap-5'>


                        <div className="flex flex-col gap-3  xl:flex-row xl:gap-20">
                            <div className="flex flex-col gap-3 ">
                                <p>
                                    Status:{" "}
                                    <span className="font-medium xl:font-semibold">
                                        {show?.status}
                                    </span>
                                </p>
                                <p>
                                    First Air Date:{" "}
                                    <span className="font-medium xl:font-semibold">
                                        {show?.first_air_date}
                                    </span>
                                </p>
                                <p>
                                    Last Air Date:{" "}
                                    <span className="font-medium xl:font-semibold">
                                        {show?.last_air_date}
                                    </span>
                                </p>
                                <p className="text-md">
                                    Vote Average:{" "}
                                    <span className="font-bold p-1 rounded-full bg-black">
                                        {show?.vote_average}
                                    </span>
                                    <p className="text-md">
                                        Based on {" "}
                                        <span className="font-bold ">
                                            {show?.vote_count}
                                        </span>
                                        {" "}vote counts
                                    </p>

                                </p>

                            </div>
                            <div className="flex flex-col gap-3">
                                <p>
                                    Episode Runtime:{" "}
                                    <span className="font-medium xl:font-semibold">
                                        {show?.episode_run_time}
                                    </span>{" "}
                                    minutes
                                </p>
                                <p>
                                    Language:{" "}
                                    <span className="font-medium xl:font-semibold">
                                        {show?.spoken_languages.map(lang => lang.english_name)}
                                    </span>

                                </p>
                                <p>
                                    Number of Seasons:{" "}
                                    <span className="font-medium xl:font-semibold">
                                        {show?.number_of_seasons}
                                    </span>
                                </p>
                                <p>
                                    Number of Episodes:{" "}
                                    <span className="font-medium xl:font-semibold">
                                        {show?.number_of_episodes}
                                    </span>
                                </p>


                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-medium">Seasons</h3>
                        <div className="flex gap-2 flex-wrap">
                            {show?.seasons.map((season) => (
                                <Link
                                    href={`/shows/${encodeURIComponent(
                                        show.id
                                    )}/${encodeURIComponent(season.season_number)}`}
                                    key={season.id}
                                >
                                    <a className="flex flex-col w-[108px] justify-center items-center text-center">
                                        {season.name}
                                        <img
                                            src={`${BASE_URL}${season?.poster_path}`}
                                            alt={show?.original_name}
                                            width={200}
                                            height={250}
                                        />
                                        Number of Episodes: {season?.episode_count}
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <p className="mt-10 text-3xl font-extrabold text-white">Watch More</p>
            <div className="flex overflow-x-scroll scrollbar-hide whitespace-nowrap scroll-smooth">
                {moreShows?.results.map((moreShow) => (
                    <Card key={moreShow.id} data={moreShow} redirect="shows" />
                ))}
            </div>
        </div>
    );
};

export default Show

export async function getServerSideProps(context) {
    const { id } = context.query;
    const res = await fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    );
    const resW = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
    )

    const show = await res.json();
    const moreShows = await resW.json();
    console.log(show)
    return {
        props: { show, moreShows }
    }
}