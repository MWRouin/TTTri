import Tippy from '@tippyjs/react';
import React from 'react'
import IconStar from '../../components/Icon/IconStar';

export default function TippyIcon() {
  return (
    <div className="ltr:mr-3 rtl:ml-3">
        <Tippy content="Star">
            <button
                type="button"
                className={`enabled:hover:text-warning disabled:opacity-60 flex items-center `}
            >
                <IconStar className={'fill-warning'} />
            </button>
         </Tippy>
    </div>
  )
}
