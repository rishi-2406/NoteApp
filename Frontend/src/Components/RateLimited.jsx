import React, { useState } from 'react'
import {ZapIcon} from 'lucide-react'

export default function RateLimited() {
    

  return (
    <div className='flex flex-row justify-evenly items-center border-2 border-error/80 bg-error/30 min-w-[60vw] w-fit mx-auto p-4 m-4 rounded-2xl' >
        <div className='flex-shrink-0 rounded-full bg-error/20 p-2' >
            <ZapIcon className='text-primary size-10' />
        </div>
        <div className='flex flex-col flex-1 ml-4' >
            <h1 className='font-bold text-xl mb-2' >Rate Limit Exceeded</h1>
            <h3 className='text-base-content/85' >You made too many requests in short time</h3>
            <p className='text-sm text-base-content/70' >Please try again in a few seconds</p>
        </div>
    </div>
  )
}
