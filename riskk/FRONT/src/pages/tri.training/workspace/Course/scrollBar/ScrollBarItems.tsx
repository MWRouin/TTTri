import React, { useState } from 'react';


interface ScrollBarItemsProps {
  num: number;
  Icon: React.ReactNode;
  NameButton: string;
 
}

const ScrollBarItems: React.FC<ScrollBarItemsProps> = ({ num, Icon, NameButton}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [selectedTab, setSelectedTab] = useState('inbox');
  const [isShowMailMenu, setIsShowMailMenu] = useState(false);
  const [selectedMail, setSelectedMail] = useState<any>(null);

  const tabChanged = (tabType: any) => {
    setIsEdit(false);
    setIsShowMailMenu(false);
    setSelectedMail(null);
  };

  return (
    <div className="space-y-1">
      <button
        type="button"
        className={`w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md dark:hover:text-primary hover:text-primary dark:hover:bg-[#181F32] font-medium h-10 ${
            !isEdit && selectedTab === 'trash' ? 'bg-gray-100 dark:text-primary text-primary dark:bg-[#181F32]' : ''
        }`}
        onClick={() => {
          setSelectedTab('inbox');
          tabChanged('inbox');
        }}
      >
        <div className="flex items-center">
          {Icon}
          <div className="ltr:ml-3 rtl:mr-3">{NameButton}</div>
        </div>
        <div className="bg-primary-light dark:bg-[#060818] rounded-md py-0.5 px-2 font-semibold whitespace-nowrap">
          {num}
        </div>
      </button>
    </div>
  );
};

export default ScrollBarItems;
