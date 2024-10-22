"use client";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

import PodcastCard from '@/components/PodcastCard'
import { podcastData } from '@/constants'
import React from 'react'

const Home = () => {
    const tasks = useQuery(api.tasks.get);
  return (
    <div
    className='mt-9 flex flex-col gap-9'>
      <section className='flex flex-col gap-5'>
        <h1 className="text-20 font-bold text-white-1">Trending podcasts</h1>
        <div className="podcast_grid">
           {podcastData.map(({id,title,description,imgURL})=>{
          return <PodcastCard
          key={id}
          imgUrl = {imgURL}
          title={title}
          description={description}
          podcastId ={id}
          />
        })}
        </div>
       <div>
        {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
       </div>

      </section>
    </div>
  )
}

export default Home