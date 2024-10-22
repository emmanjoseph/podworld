'use client'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname ,useRouter} from 'next/navigation'
import React from 'react'

const LeftSidebar = () => {

  const pathname = usePathname();
  const router = useRouter();

  return (
    <section className='text-white-1 left_sidebar'>
        <div className="flex flex-col gap-9">
            <Link href='/' className='flex items-center gap-2 pb-10 cursor-pointer max-lg:justify-center'>
            <Image src='/icons/logo.svg' alt='logo' width={23} height={27} />
            <h1 className='text-24 font-extrabold text-white max-lg:hidden'>Podworld</h1>
            </Link>

            {sidebarLinks.map(({route,label,imgURL})=>{

            const isActive = pathname === route || pathname.startsWith(`${route}/`)
              return <Link href={route} key={label}
              className={cn('flex items-center gap-3 py-4 max-lg:px-4 justify-center lg:justify-start',{
                'bg-nav-focus border-r-4 border-orange-1':isActive 
              })}
              >
                <Image src={imgURL} alt='imageUrl' width={20} height={20}/>
                <span>{label}</span>
                </Link>
            })}
        </div>
    </section>
  )
}

export default LeftSidebar