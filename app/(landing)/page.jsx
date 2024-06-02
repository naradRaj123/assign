'use client'
import Header from "@/components/header";
import { Button } from "@mui/material";
import { ChevronDown, ChevronUp, ClockIcon, PlayIcon } from "lucide-react";
import Image from "next/image";

import achivbg from '@/app/img/achivebg.png'
import ringimg from '@/app/img/ring.png';
import redbgfull from '@/app/img/bg-red2.png'
import phoneimg from '@/app/img/phone1.png';
import phone2 from '@/app/img/phone3.png';
import starimg from '@/app/img/star.png'
import star2 from '@/app/img/bugth.png'
import cubeimg from '@/app/img/cube.png'
import st3img from '@/app/img/Star2.png'
import bellimg from '@/app/img/bell.png'
import fully from '@/app/img/fully.png'
import client from '@/app/img/client.png'
import client2 from '@/app/img/client1.png'
import groupclient from '@/app/img/groupclient.png';
import footerbanner from '@/app/img/Frame.png';

import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/ui/footer";

export default function Home() {


  return (
    <>

      <Header />

      {/* hero section  */}
      <section className=" w-full py-5 " >
        <div className=" max-w-[74rem] mx-auto  ">
          <div className="flex justify-between items-center flex-col sm:flex-row ">
            <div className=" p-10 px-8 w-[100%] sm:w-[50%] ">
              <h4 className=" font-[700] text-center sm:text-left text-[1rem] mt-0 sm:mt-8 sm:text-[2rem] uppercase ">make the best financial decisions</h4>
              <p className="text-center sm:text-left mt-4 text-[0.8rem] sm:text-[1rem] ">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
              <div className=" mt-8 flex flex-col sm:flex-row ">
                <Button className=" bg-secondary  hover:bg-secondary text-white p-3 rounded-xl text-[0.7rem] " >Get Started</Button>
                <Link href={'/about'}>
                  <div className=" ms-0 sm:ms-5 mt-2 sm:mt-0 relative sm:p-3 p-2  flex justify-center items-center w-auto rounded-xl ">
                    <PlayIcon className=" text-primary w-[2rem] h-[2rem]" />
                    <p className=" font-[500] uppercase text-[0.8rem]  relative ">
                      watch demo
                    </p>

                  </div>
                </Link>
              </div>

              <Image src={achivbg} alt="" />

            </div>

            <div className=" w-[100%] sm:w-[48%] relative p-2  ">
              <Image src={ringimg} alt="" className="w-[80%] h-[100%] sm:w-[100%] " />
              <Image src={redbgfull} alt="" className="absolute top-[40%] left-[-10%] " />
              <Image src={phoneimg} alt="" className="absolute top-[-10%]  left-[-8%] sm:left-[-5%]  z-50" />
              <Image src={phoneimg} alt="" className="absolute top-[-10%] left-[0%] sm:top-[-4%] sm:left-[6%] z-40" />
              <Image src={phoneimg} alt="" className="absolute top-[-3%] left-[6%] sm:top-[-0] sm:left-[15%] z-30 " />
            </div>


          </div>

        </div>
      </section>



      {/* why chooes us */}
      <section className=" w-full  my-5  relative  ">
        <div className="max-w-[74rem] mx-auto  ">
          <div className=" w-full flex justify-between  flex-col-reverse md:flex-row items-center">

            <div className="  w-full sm:w-[48%] h-[full] relative ">
              <div className=" w-[full] sm:mt-[10%] mt-[0%] h-[full] relative">
                <Image src={ringimg} alt="" className="ms-[-20px] sm:ms-0" />
                <Image src={phone2} alt="" className="w-[70%] h-[100%] mx-auto absolute top-[5%] left-[25%] z-40  " />
                <Image src={redbgfull} alt="" className="w-[70%] h-[100%] mx-auto absolute top-[10%] left-[10%] z-30  " />
              </div>

            </div>

            <div className=" w-[100%] md:w-[48%]  p-5 sm:mt-0 mt-10 ">

              <h4 className=" uppercase font-[700]  text-[1.2rem] my-5 mb-0  text-primary  ">feature</h4>
              <h2 className="uppercase font-[700] text-[1.5rem] sm:text-[2rem] ">uifry premium</h2>

              <div className="     my-4 mt-5 sm:mt-10 p-2  " >
                <div className="flex  items-center ">
                  <div className=" ">
                    <Image src={starimg} alt="" />
                  </div>
                  <h5 className=" font-[700] ms-2 text-[1rem]  sm:text-[1.2rem]  capitalize ">budgeting intervals</h5>
                </div>
                <p className="leading-6 mt-2 text-[#929090] text-[0.9rem] font-[500] sm:text-[1rem] ">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
              </div>

              <div className="     my-4 mt-5 sm:mt-10 p-2  " >
                <div className="flex  items-center ">
                  <div className=" ">
                    <Image src={star2} alt="" />
                  </div>
                  <h5 className=" font-[700] ms-2 text-[1rem]  sm:text-[1.2rem]  capitalize ">budgeting intervals</h5>
                </div>
                <p className="leading-6 mt-2 text-[#929090] text-[0.9rem] font-[500] sm:text-[1rem] ">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
              </div>

              <div className="     my-4 mt-5 sm:mt-10 p-2  " >
                <div className="flex  items-center ">
                  <div className=" ">
                    <Image src={cubeimg} alt="" />
                  </div>
                  <h5 className=" font-[700] ms-2 text-[1rem]  sm:text-[1.2rem]  capitalize ">budgeting intervals</h5>
                </div>
                <p className="leading-6 mt-2 text-[#929090] text-[0.9rem] font-[500] sm:text-[1rem] ">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
              </div>

            </div>
          </div>
        </div>
        <Image src={st3img} alt="" className="absolute top-[65%] md:top-[30%] left-0" />
      </section>


      <section className=" w-full  my-5  relative  ">
        <div className="max-w-[74rem] mx-auto  ">
          <div className=" w-full flex justify-between  flex-col md:flex-row items-center">


            <div className=" w-[100%] md:w-[48%]  p-5 sm:mt-0 mt-10 ">
              <div className="     my-4  p-2  " >
                <div className="flex  items-center ">
                  <div className=" ">
                    <Image src={bellimg} alt="" />
                  </div>
                  <h5 className=" font-[700] ms-2 text-[1rem]  sm:text-[1.2rem]  capitalize ">Clever Notification</h5>
                </div>
                <p className="leading-6 mt-4 text-[#929090] text-[0.9rem] font-[500] sm:text-[1rem] ">Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
              </div>
            </div>

            <div className="  w-full sm:w-[48%] h-[full] relative ">
              <div className=" w-[full] sm:mt-[10%] mt-[0%] h-[full] relative">
                <Image src={ringimg} alt="" className="ms-[-20px] sm:ms-0" />
                <Image src={phone2} alt="" className="w-[70%] h-[100%] mx-auto absolute top-[5%] left-[25%] z-40  " />
                <Image src={redbgfull} alt="" className="w-[70%] h-[100%] mx-auto absolute top-[10%] left-[10%] z-30  " />
              </div>
            </div>

          </div>
        </div>
        <Image src={st3img} alt="" className="absolute top-[60%] md:top-[30%] right-0" />
      </section>


      <section className=" w-full  my-5  relative  ">
        <div className="max-w-[74rem] mx-auto  ">
          <div className=" w-full flex justify-between  flex-col-reverse md:flex-row items-center">

            <div className="  w-full sm:w-[48%] h-[full] relative ">
              <div className=" w-[full] sm:mt-[10%] mt-[0%] h-[full] relative">
                <Image src={ringimg} alt="" className="ms-[-20px] sm:ms-0" />
                <Image src={phone2} alt="" className="w-[70%] h-[100%] mx-auto absolute top-[5%] left-[25%] z-40  " />
                <Image src={redbgfull} alt="" className="w-[70%] h-[100%] mx-auto absolute top-[10%] left-[10%] z-30  " />
              </div>
            </div>

            <div className=" w-[100%] md:w-[48%]  p-5 sm:mt-0 mt-10 ">
              <div className=" mt-4   " >
                <div className="flex  items-center ">
                  <div className=" ">
                    <Image src={fully} alt="" />
                  </div>
                  <h5 className=" font-[700] ms-2 text-[1rem]  sm:text-[1.2rem]  capitalize ">fully customizable</h5>
                </div>
                <p className="leading-6  text-[#929090] mt-4 text-[0.9rem] font-[500] sm:text-[1rem] ">Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
              </div>
            </div>

          </div>
        </div>
        <Image src={st3img} alt="" className="absolute top-[60%] md:top-[30%] right-0" />
      </section>


      {/* testimonial */}
      <section className=" w-full  my-5  relative  ">
        <div className="max-w-[74rem] mx-auto  ">
          <h4 className="text-center uppercase text-[0.7rem] sm:text-[0.9rem] text-primary">testimonial</h4>
          <h2 className="text-center font-[800] text-[1rem] sm:text-[2.5rem] capitalize">what our users  say about us?</h2>
          <div className=" w-full flex justify-between  flex-col md:flex-row items-center">

            <div className="  w-full sm:w-[48%] h-[full] relative ">
              <div className=" w-[full] sm:mt-[10%] mt-[0%] h-[full] relative">
                <Image src={client} alt="" className="ms-[-20px] sm:ms-0" />
                <Image src={redbgfull} alt="" className="w-[70%] h-[100%] mx-auto absolute top-[10%] left-[10%] z-[-30]  " />
              </div>
            </div>

            <div className=" w-[100%] md:w-[48%]  p-5 sm:mt-0  ">
              <div className=" mt-4   " >
                <div className="flex  items-center ">
                  <h5 className=" font-[700] ms-2 text-[1rem]  sm:text-[1.2rem]  capitalize ">the best financial accounting app ever!</h5>
                </div>
                <p className="leading-6  text-[#929090] mt-4 text-[0.9rem] font-[500] sm:text-[1rem] ">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</p>

                <div className=" mt-4  flex ">
                  <Image src={client2} alt="" className="w-[50px] " />
                  <Image src={groupclient} alt="" className=" ms-2" />
                </div>
                <p className="text-[1.2rem] font-[700] mt-5 capitalize">nick jonas</p>
              </div>
            </div>

          </div>
        </div>

      </section>


      {/* faq */}
      <section className=" w-full  my-5 mt-10  relative  ">
        <div className="max-w-[74rem] mx-auto p-4  ">
          <h4 className=" uppercase text-[0.7rem] sm:text-[0.9rem] text-primary  mt-5 sm:mt-[100px] mb-4">faq</h4>
          <h2 className=" w-[100%] text-center sm:text-left sm:w-[40%] mb-4 font-[800] text-[1rem] sm:text-[2.5rem] capitalize">Frequently asked questions</h2>
          
            <div className="flex items-center flex-col justify-between sm:flex-row">
              <div className="border w-[100%] sm:w-[48%] border-[red] bg-[#FF5555] p-8 rounded-md sm:my-4 mt-5 ">
                <h4 className="text-white capitalize font-[700] text-[0.8rem] sm:text-[1.2rem]">the best financial accounting app ever!</h4>
                <p className="text-white mt-2 text-[0.7rem] sm:text-[0.9rem]">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
              </div>

              <div className=" w-[100%] sm:w-[48%] p-8 rounded-md sm:my-4 mt-5 ">
                <h4 className=" capitalize text-[0.8rem] font-[700] sm:text-[1.2rem]">the best financial accounting app ever!</h4>
                <p className=" mt-2 text-[0.7rem] sm:text-[0.9rem]">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
              </div>
            </div>

            <div className="flex items-center flex-col-reverse justify-between sm:flex-row">
        
              <div className=" p-8  w-[100%] sm:w-[48%] rounded-md sm:my-4 mt-5 ">
                <h4 className=" capitalize text-[0.8rem] font-[700] sm:text-[1.2rem]">the best financial accounting app ever!</h4>
                <p className=" mt-2 text-[0.7rem] sm:text-[0.9rem]">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
              </div>
              <div className="border w-[100%] sm:w-[48%] border-[red] bg-[#FF5555] p-8 rounded-md sm:my-4 mt-5 ">
                <h4 className="text-white capitalize font-[700] text-[0.8rem] sm:text-[1.2rem]">the best financial accounting app ever!</h4>
                <p className="text-white mt-2 text-[0.7rem] sm:text-[0.9rem]">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
              </div>
            </div>

            <div className="flex items-center flex-col justify-between sm:flex-row">
              <div className="border w-[100%] sm:w-[48%] border-[red] bg-[#FF5555] p-8 rounded-md sm:my-4 mt-5 ">
                <h4 className="text-white capitalize font-[700] text-[0.8rem] sm:text-[1.2rem]">the best financial accounting app ever!</h4>
                <p className="text-white mt-2 text-[0.7rem] sm:text-[0.9rem]">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
              </div>

              <div className=" w-[100%] sm:w-[48%] p-8 rounded-md sm:my-4 mt-5 ">
                <h4 className=" capitalize text-[0.8rem] font-[700] sm:text-[1.2rem]">the best financial accounting app ever!</h4>
                <p className=" mt-2 text-[0.7rem] sm:text-[0.9rem]">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
              </div>
            </div>

        </div>
      </section>

      {/* footer banner section */}
      <section className="w-full  relative  ">
        <div className="max-w-[74rem] mx-auto p-4 sm:p-10  ">
          <Image src={footerbanner} alt="" />
        </div>
        <Image src={redbgfull} alt="" className="absolute top-[-50%] left-[-50%] sm:top-[-25%] sm:left-[-8%] z-[-10]" />
      </section>

      {/* footer */}
      <Footer />


    </>
  );
}
