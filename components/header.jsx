
import { Button } from '@mui/material'
import { AlignRight } from 'lucide-react'
import Image from 'next/image'
import logo from '@/app/img/ulogo.png'
import React from 'react'


export default function Header() {
    return (
        <>
            <header className=' w-full p-2   '>
                <div className='max-w-[72.3rem] mx-auto  '>
                    <div className=' p-1 flex items-center justify-between '>
                        <div className='w-[90%] flex p-2'>
                            <div className='w-[40%] sm:w-[20%] items-center '>
                                <Image src={logo} alt='logo' className=' w-[80%] h-[80%] sm:w-[60%] sm:h-[60%]' />
                            </div>

                            <div className=' hidden sm:block w-[50%]  '>
                                <div className='flex items-center justify-between  '>
                                    <div className='w-full'>
                                        <ul className='flex justify-between'>
                                            <li><a href="" className='text-[#FF5555] font-[700] '>Home</a></li>
                                            <li><a href="">About</a></li>
                                            <li><a href="">Feature</a></li>
                                            <li><a href="">Services</a></li>
                                            <li><a href="">Contact us</a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className='w-[10%]'>
                        <div className=' hidden sm:block '>
                            <Button variant="contained" className=' bg-[#000] hover:bg-[#000] ' href="#contained-buttons">
                                Download
                            </Button>
                        </div>

                        <div className=' block sm:hidden '>
                            <AlignRight />
                        </div>
                        </div>

                    </div>
                </div>
            </header>



        </>
    )
}
