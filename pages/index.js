import Head from 'next/head'
import Card from '../components/Card'
import { BiArrowToRight } from 'react-icons/bi'


export default function Home({ upcomingMovies, nowPlaying }) {
  return (
    <div>
      <Head>
        <title>BINGE</title>
        <meta name="description" content="Binge Watch Everywhere" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <div className='flex flex-col p-10 '>
        <div className='flex justify-between items-center '>
          <h1 className='text-2xl text-white p-2'>Upcoming Movies</h1>
          <div className='text-2xl text-[#d85c27] p-2 font-semibold flex items-center gap-1'>
            SLIDE
            <span>
              <BiArrowToRight className='h-12 w-12 ' />
            </span>
          </div>
        </div>


        <div className='flex overflow-x-auto scrollbar-hide whitespace-nowrap scroll-smooth'>
          {upcomingMovies.map((upcomingMovie) => {
            return (
              <Card
                id={upcomingMovie.id}
                data={upcomingMovie}
                redirect="movie"
                key={upcomingMovie.id}
              />
            )
          })}
        </div>
      </div>
      <div className='flex flex-col p-10 '>

        <div className='flex justify-between items-center '>
          <h1 className='text-2xl text-white p-2'>Now Playing Movies</h1>
          <div className='text-2xl text-[#d85c27] p-2 font-semibold flex items-center gap-1'>
            SLIDE
            <span>
              <BiArrowToRight className='h-12 w-12 ' />
            </span>
          </div>
        </div>        <div className='flex overflow-x-auto scrollbar-hide whitespace-nowrap scroll-smooth'>
          {nowPlaying.map((nowPlayingMovie) => {
            return (
              <Card
                id={nowPlayingMovie.id}
                data={nowPlayingMovie}
                redirect="movie"
                key={nowPlayingMovie.id}

              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`)
  const resN = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`)
  const data = await res.json()
  const dataN = await resN.json()
  const upcomingMovies = data.results
  const nowPlaying = dataN.results
  return {
    props: { upcomingMovies, nowPlaying }, // will be passed to the page component as props
  }
}
