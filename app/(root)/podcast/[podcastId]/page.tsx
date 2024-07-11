import React from 'react'

const PodcastDeatails = ({params}:{params:{podcastId:string}}) => {
  return (
    <div>
      <p  className='text-white-1'>{params.podcastId}</p>
    </div>
  )
}

export default PodcastDeatails
