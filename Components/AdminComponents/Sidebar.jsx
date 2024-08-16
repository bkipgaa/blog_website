import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <div className='flex flex-col bg-slate-100 h-screen'>
            <div className="px-4 py-3 sm:pl-14 sm:py-3 border-b border-black">
                <Image src={assets.logo} width={100} height={40} className="w-20 sm:w-28" alt='' />
            </div>
            <div className='w-full sm:w-80 flex-1 py-6 sm:py-12 border-r border-black'>
                <div className='w-[70%] sm:w-[80%] mx-auto'>
                    <Link href='/admin/addProduct' className='flex items-center border border-black gap-1 sm:gap-3 font-medium text-sm sm:text-base px-2 py-1 sm:px-3 sm:py-2 bg-white shadow-[-5px_5px_0px_#000000]'>
                        <Image src={assets.add_icon} alt='' width={20} height={20} className="w-4 sm:w-6" />
                        <p>Add blogs</p>
                    </Link>
                    <Link href='/admin/bloglist' className='mt-5 flex items-center border border-black gap-1 sm:gap-3 font-medium text-sm sm:text-base px-2 py-1 sm:px-3 sm:py-2 bg-white shadow-[-5px_5px_0px_#000000]'>
                        <Image src={assets.blog_icon} alt='' width={20} height={20} className="w-4 sm:w-6" />
                        <p>Blog Lists</p>
                    </Link>
                    <Link href='/admin/subscription' className='mt-5 flex items-center border border-black gap-1 sm:gap-3 font-medium text-sm sm:text-base px-2 py-1 sm:px-3 sm:py-2 bg-white shadow-[-5px_5px_0px_#000000]'>
                        <Image src={assets.email_icon} alt='' width={20} height={20} className="w-4 sm:w-6" />
                        <p>Subscriptions</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
