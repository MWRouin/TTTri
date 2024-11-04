import React from 'react'

export default function CategoryCard({category_image}:any) {
  return (
    <div className='bg-gray-100 max-h-[300px] max-w-[300px] '>
        <img src={category_image} className='hover:scale-110 duration-200'/>
    
    </div>
  )
}
