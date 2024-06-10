'use client' // must be defined as a client component as 'react-countup' uses a react hook which cannot be used in server side components
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({ amount = 0 }: { amount: number }) => {
    return (
        <div className='w-full'>
            <CountUp
                duration={2.5}
                decimals={2}
                decimal='.'
                prefix={'&#163;'} // GBP
                end={amount}
            />
        </div>
    )
}

export default AnimatedCounter