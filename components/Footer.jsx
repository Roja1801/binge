import React from 'react'

const Footer = () => {
    return (
        <footer className='flex items-center justify-center p-5 font-bold text-xl text-white m-2'>
            © {new Date().getFullYear()} - BINGE. All Rights Reserved.
        </footer>
    )
}

export default Footer