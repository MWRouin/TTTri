import Tippy from '@tippyjs/react'
import React from 'react'
import IconArchive from '../../../../../components/Icon/IconArchive'
import IconInfoHexagon from '../../../../../components/Icon/IconInfoHexagon'
import IconRefresh from '../../../../../components/Icon/IconRefresh'
import CheckBox from '../../../../Elements/CheckBox'
import IconWheel from '../../../../../components/Icon/IconWheel'
import UtilBaritem from './UtilBaritem'
import IconSettings from '../../../../../components/Icon/IconSettings'
import IconHelpCircle from '../../../../../components/Icon/IconHelpCircle'
import IconSearch from '../../../../../components/Icon/IconSearch'

export default function UtilBarList() {

     const uitlItem=[
        {  icon: <IconRefresh />, name: "Refresh" },
        { icon: <IconArchive />, name: "Archive" },
        {  icon:  <IconInfoHexagon />, name: "Spam" },
        {  icon:  <IconWheel />, name: "Group" },
        ]
  return (
    <div>
              <div className="flex justify-between items-center flex-wrap-reverse gap-4 p-4">
                   <div className="flex items-center w-full sm:w-auto">
                            <CheckBox/>
                                <ul className="flex grow items-center sm:flex-none gap-4 ltr:sm:mr-4 rtl:sm:ml-4">
                                     {uitlItem.map((item)=>(
                                        <li>
                                            <UtilBaritem utilItem={item.icon} name={item.name}/>
                                        </li>
                                     ))}
                                </ul>
                    </div>
                    <div className="flex justify-between items-center sm:w-auto  w-full">
                        <div className="flex items-center ltr:mr-4 rtl:ml-4">
                            <div className="relative group">
                            
                                            <input
                                                type="text"
                                                className="form-input ltr:pr-8 rtl:pl-8 peer"
                                                placeholder="Search Mail"
                                            />
                                            <div className="absolute ltr:right-[11px] rtl:left-[11px] top-1/2 -translate-y-1/2 peer-focus:text-primary">
                                                <IconSearch />
                                            </div>
                                        </div>
                         
                            

                        </div>
                        <div className="flex items-center">
                                        <div className="ltr:mr-4 rtl:ml-4">
                                            <Tippy content="Settings">
                                                <button type="button" className="hover:text-primary">
                                                    <IconSettings />
                                                </button>
                                            </Tippy>
                                        </div>
                                        <div>
                                            <Tippy content="Help">
                                                <button type="button" className="hover:text-primary">
                                                    <IconHelpCircle className="w-6 h-6" />
                                                </button>
                                            </Tippy>
                                        </div>
                                    </div>

                    </div>
                    
              </div>
              
              <div className="h-px border-b border-white-light  dark:border-[#1b2e4b] "></div>
            </div>
                

  )
}
