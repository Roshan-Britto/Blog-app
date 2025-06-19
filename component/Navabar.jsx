import React from 'react'
import Link from 'next/link'

export const Navabar = () => {
return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
        <div className="flex items-center justify-between w-full">
            <Link href="/" className='text-white text-lg font-semibold w-full text-center'>
                Blog App
            </Link>
            <Link href="/add">
                <button className="text-white bg-green-600 hover:bg-green-700 px-5 py-2 mx-5 rounded transition">
                    Add
                </button>
            </Link>
        </div>
    </nav>
)
}
