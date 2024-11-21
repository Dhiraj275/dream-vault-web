"use client"

import React, { useEffect } from 'react'

const Wish = () => {
  useEffect(() => {

  }, [])
  return (
    <div className='bg-primary'>
      <div className="cover-img">
        <img src="" alt="" />
      </div>
      <div className='detail'>
        <h3 className="title"></h3>
        <div className="progress-bar">
          <div className="bar"></div>
        </div>
      </div>
      <div className="list">
        <div>
          <div className="checkbox"></div>
          <div className="title">
            item 1
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wish