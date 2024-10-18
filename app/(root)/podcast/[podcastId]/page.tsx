import React from 'react'

const PodcastDetails = ({params}:{params:{podcastId:string}}) => {
  return (
    <div className='text-white-1'>PodcastDetails for {params.podcastId}</div>
  )
}

export default PodcastDetails