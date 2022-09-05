import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div className='flex items-center justify-center'>
            <RotatingLines strokeColor="#d85c27" height={80} width={80} />
        </div>
    )
}

export default Loader