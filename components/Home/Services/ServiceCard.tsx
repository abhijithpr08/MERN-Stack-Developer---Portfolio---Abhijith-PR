import Image from 'next/image';
import React from 'react'

type Props = {
  icon:string;
  name:string; 
  description:string;
}

const ServiceCard = ({description,icon,name}:Props) => {
  return (
    <div className='flex flex-col items-center text-center'>
      <Image src={icon} alt='img' width={150} height={150} className='h-30'/>
      <h1 className='mt-6 text-xl md:text-2xl font-bold text-gray-200'>
        {name}
      </h1>
      <p className='mt-6 text-gray-300'>
        {description}
      </p>
    </div>
  )
}

export default ServiceCard