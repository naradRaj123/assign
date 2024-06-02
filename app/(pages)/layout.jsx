import Header from '@/components/header'
import React, { Children } from 'react'



export default function Pages(props) {

    const {children}=props


    return (
        <>
            <div className=' w-full '>
                <Header />
            </div>

            <div>
                {children}
            </div>

            <div className='border border-[red] w-full '>
                <h4>footer</h4>
            </div>

        </>
    )
}
