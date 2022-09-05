import React from 'react'
import { images } from '../next.config'
import Link from 'next/link'

const CardItem = ({ data, redirect }) => {
  const IMAGES_API = images.domains
  return (
    <div className=" backdrop-blur-lg inline-block shadow-lg min-w-[100px] md:min-w-[150px] xl:min-w-[250px] left-0 cursor-pointer hover:scale-105 transition duration-700 ease-in-out">
      <Link href={`/${redirect}/${encodeURIComponent(data?.id)}`}>
        <a className="relative group">
          <img
            src={`${IMAGES_API}${data?.poster_path}` || "https://dummyimage.com/400x600/000000/fff.jpg&text=poster+unavailable"}
            alt={data?.title}
            width={300}
            height={300}
            layout="responsive"
          />
          <div className="hidden lg:group-hover:block absolute bottom-0 p-3 text-white bg-orange-500 hover:-translate-y-3 transition duration-700 hover:ease-in-out xl:w-[250px]">
            <div className="flex justify-between gap-2 -translate-y-0">
              <div>

                <h1 className="font-bold text-sm w-1/4 whitespace-nowrap">{data?.title}</h1>
                <h1 className="font-bold text-sm w-1/4 whitespace-nowrap">{data?.name}</h1>
              </div>
              <p className="font-bold rounded-full p-1 border-2 border-slate-200">
                {data?.vote_average}


              </p>

            </div>

          </div>
        </a>
      </Link>
    </div>
  );

}

export default CardItem