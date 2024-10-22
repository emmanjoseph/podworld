import React from 'react'
import Image from 'next/image'

const PodcastCard = ({podcastId,title,description,imgUrl}:
    {
        imgUrl:string,
        title:string,
        podcastId:number,
        description:string
    }) => {
  return (
    <div className='cursor-pointer '>
      <figure className='flex flex-col gap-2'>
        <Image src={imgUrl} alt='imgUrl' width={174} height={174}
        className='aspect-square w-full h-fit object-cover rounded-xl 2xl:size-[200px]'
        />
        <div className='flex flex-col'>
            <h1 className='text-16 truncate font-bold text-white-1'>{title}</h1>
            <h2 className='text-12 truncate text-white-4 capitalize font-normal'>{description}</h2>
        </div>
      </figure>
    </div>
  )
}

export default PodcastCard
