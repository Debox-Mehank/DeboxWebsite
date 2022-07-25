import React from 'react'
import Image from 'next/image';



function PrintButton(props) {

  return (
    <div className="flex items-center rounded-full text-md text-black shadow-md bg-clip-padding backdrop-filter bg-opacity-60 backdrop-blur-md   bg-printingButton transition transform motion-reduce:transition-none  motion-reduce:hover:transform-none
    hover:text-white  hover:bg-printingRed  cursor-pointer hover:shadow-sm 
    sm:font-medium 
    lg:inline-block lg:rounded-2xl
    lg:mx-4 px-4 lg:px-10 lg:py-16 lg:text-2xl lg:-mt-4    
      "
      id="btn">
      <div className=' lg:-mt-28 lg:mb-8 -ml-5  lg:mx-auto lg:h-24 lg:w-24 h-14 w-14 relative '>
        <Image src={props.imgLink} layout="fill" />
      </div>

      <div className='pl-3 lg:pl-0 '>
        {props.children}
      </div>

    </div>
  )
}

export default PrintButton