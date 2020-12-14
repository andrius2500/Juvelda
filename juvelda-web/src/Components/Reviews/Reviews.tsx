import React from 'react'
import '../Reviews/styles/styles.scss'

function Reviews() {
  return (
    <div className='reviewsContainer'>
      <div className='reviewsRedLine'></div>
      <div className='reviewsMainContext'>
        <div className='reviewsSectionContainer'>
          <div className='reviewsSectionHeader'>
            <h1 className='reviewsSectionHeaderText'>Klientų atsiliepimai</h1>
          </div>
          <div className='reviewCarousel'>
            
          </div>

        </div>
        <div className='reviewsPictureContainer'></div>
      </div>
    </div>
  )
}

export default Reviews