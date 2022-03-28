import React from 'react'

export const PublicRoutes = ({children}) => {
  return (
    <div className=' w-full h-full relative'>
        <div className='fixed top-0 left-0 w-full h-[266px] bg-blue-100 z-0'></div>
        {children}
    </div>
  )
}
