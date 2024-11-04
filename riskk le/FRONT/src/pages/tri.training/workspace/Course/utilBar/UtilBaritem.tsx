import Tippy from '@tippyjs/react'
import React from 'react'

interface UtilItemProps{
    utilItem: React.ReactNode,
    name:string
}

const UtilBaritem: React.FC<UtilItemProps>=({utilItem,name})=>{
   return(
    <Tippy content={name}>
         <button type="button" className="hover:text-primary flex items-center">
             {utilItem}                                         
        </button>
    </Tippy>
   )
}

export default UtilBaritem
