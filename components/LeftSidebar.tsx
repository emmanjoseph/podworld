import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LeftSidebar = () => {
  return (
    <section className='text-white-1 left_sidebar'>
        <div className="flex flex-col gap-9">
            <Link href='/' className='flex items-center gap-2 pb-10'>
            <Image src='/icons/logo.svg' alt='logo' width={23} height={27} />
            <h1 className='text-24 font-extrabold text-white max-lg:hidden'>Podworld</h1>
            </Link>
        </div>
    </section>
  )
}

export default LeftSidebar