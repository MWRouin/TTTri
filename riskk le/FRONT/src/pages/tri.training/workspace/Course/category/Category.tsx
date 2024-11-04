import React from 'react';
import IconUser from '../../../../../components/Icon/IconUser';

interface CategoryProps {
  category: string;
}

const Category: React.FC<CategoryProps> = ({ category }) => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-primary flex text-white bg-primary"
      >
        <IconUser className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
        {category}
      </button>
    </div>
  );
};

export default Category;
