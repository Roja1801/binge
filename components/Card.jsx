import React, { useState } from 'react'
import { images } from '../next.config'
import CardItem from './CardItem'


const Card = ({ data, redirect, show, }) => {
    const IMAGES_API = images.domains
    return (

        <div>
            <div className='w-72 h-4/6 p-[18px]'>
                <CardItem

                    data={data} redirect={redirect} show={show} />
            </div>
        </div>

    )
}

export default Card