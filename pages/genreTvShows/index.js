import React from 'react'
import Head from "next/head";
import requestsTv from "../../utils/requestsTv";
import Results from '../../components/results';
import NavTv from '../../components/NavTv';
import Pagination from '../../components/Pagination';

const genreTvShows = ({ results, page, genre }) => {
    return (
        <div>
            <Head>
                <title>BINGE</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavTv />
            <div>
                <Results results={results} redirect="shows" />
            </div>
            <Pagination section="genreTvShows" genre={genre} page={page} pages="100" />

        </div>
    )
}

export default genreTvShows


export async function getServerSideProps(context) {
    let { genre, page } = context.query;
    if (page === undefined) page = 1;
    if (genre === undefined) genre = [0]
    // if (id === undefined) id = 18;

    const res = await fetch(`https://api.themoviedb.org/3${requestsTv[genre]?.url || requestsTv.fetchDramaShows.url}&page=${page}`)
    const data = await res.json();
    const results = data.results

    // const gres = await fetch(
    //     `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    // );
    // const gdata = await gres.json();
    // const genres = gdata.genres;



    console.log(res)
    return {
        props: {
            results,
            page,
            genre

        },
    };

}