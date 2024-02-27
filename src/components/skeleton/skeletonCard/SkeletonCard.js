import React from 'react'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import './SkeletonCard.css'

const SkeletonCard = () => {
  return (
    <div className='skeletonCardContainer'>
      <Skeleton height={220} width={250}/>
      <Skeleton width={230} className='skeletonFirstLine'/>
      <Skeleton width={50} className='skeletonSecondLine'/>
      <Skeleton width={80} className='skeletonButton'/>
    </div>
  )
}

export default SkeletonCard