import React from 'react'
import logo from '@/app/img/ulogo.png'
import Image from 'next/image'
import { MailIcon, PhoneCall } from 'lucide-react'
import Link from 'next/link'
import { Button, Input } from '@mui/material'

export default function Footer() {
  return (
    <>

        <footer className=' py-10 px-10'>
            <div className="max-w-[74rem] mx-auto  ">

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4'>

                <div className='p-1'>
                    <Image src={logo} alt='' />
                    <ul  className='mt-4'>
                        <li className=' my-4 flex items-center'> 
                            <MailIcon  className='text-primary' />
                            <span className='text-[0.8rem] ms-1 font-[600] capitalize'>help@frybix.com</span>
                        </li>
                        <li className='flex items-center'> 
                            <PhoneCall  className='text-primary' />
                            <span className='text-[0.8rem] ms-1 font-[600] capitalize'>+1 234 456 678 89</span>
                        </li>
                    </ul>
                </div>

                <div className=''>
                    <h2 className='font-[700] capitalize text-[1.5rem]'>links</h2>
                    <ul  className='mt-4'>
                        <li className='capitalize my-3'><Link href=''> home </Link></li>
                        <li className='capitalize my-3'><Link href=''> about </Link></li>
                        <li className='capitalize my-3'><Link href=''> bookings </Link></li>
                        <li className='capitalize my-3'><Link href=''> blog </Link></li>
                    </ul>
                </div>

                <div className=' '>
                    <h2 className='font-[700] capitalize text-[1.5rem]'>legal</h2>
                    <ul  className='mt-4'>
                        <li className='capitalize my-3'><Link href=''> terms of use </Link></li>
                        <li className='capitalize my-3'><Link href=''> privacy policy </Link></li>
                        <li className='capitalize my-3'><Link href=''> cookies policy </Link></li>
                        <li className='capitalize my-3'><Link href=''> blog </Link></li>
                    </ul>
                </div>

                <div className=''>
                    <h2 className='font-[700] capitalize text-[1.5rem]'>Products</h2>
                    <ul  className='mt-4'>
                        <li className='capitalize my-3'><Link href=''> Take Tour </Link></li>
                        <li className='capitalize my-3'><Link href=''> live chat</Link></li>
                        <li className='capitalize my-3'><Link href=''> Reviews </Link></li>
                        <li className='capitalize my-3'><Link href=''> blog </Link></li>
                    </ul>
                </div>

                <div className=' '>
                    <h2 className='font-[700] capitalize text-[1.5rem]'>newsletter</h2>
                    <p className='capitalize my-3'>Stay up to date</p>
                    <div className=' flex justify-between '>
                        <input  className='p-4 text-[0.7rem]  w-[45%]' placeholder='Your Email'/>
                        <Button className=" bg-secondary  hover:bg-secondary text-white w-[50%] p-1 text-[0.6rem] " >subscribe</Button>
                    </div>
                </div>

            </div>

            </div>
        </footer>
    
    
    
    </>
  )
}
