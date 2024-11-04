/* import React from 'react';
import ScrollBarItems from './ScrollBarItems';
import IconMail from '../../../../../components/Icon/IconMail';
import IconHeart from '../../../../../components/Icon/IconHeart';
import IconSend from '../../../../../components/Icon/IconSend';
import IconDollarSign from '../../../../../components/Icon/IconDollarSign';
import IconInfoHexagon from '../../../../../components/Icon/IconInfoHexagon';
import IconTrashLines from '../../../../../components/Icon/IconTrashLines';
import IconArchive from '../../../../../components/Icon/IconArchive';
import IconBookmark from '../../../../../components/Icon/IconBookmark';
import { NavLink, useNavigate, useNavigation } from 'react-router-dom';

const ScrollBar: React.FC = ()=> {
  const items = [
    { num: 5, icon: <IconMail className="w-5 h-5 shrink-0" />, name: "All courses" ,navigate:'allcourses' },
    { num: 10, icon: <IconHeart className="w-5 h-5 shrink-0" />, name: "Favorite courses",navigate:'favoritecourses' },
    { num: 30, icon: <IconTrashLines className="w-5 h-5 shrink-0" />, name: "Deleted courses" ,navigate:'deletecourses'},
    { num: 35, icon: <IconArchive className="w-5 h-5 shrink-0" />, name: "Archived courses", navigate:'archivedcourses' },
    { num: 40, icon: <IconBookmark className="w-5 h-5 shrink-0" />, name: "Important",navigate:'important' },
  ];



  return (
    <div className="flex flex-col h-full pb-16">
      <div className="pb-5">
        <NavLink className="btn btn-primary w-full" type="button" to='newcourse' >
          New Message
        </NavLink>
      </div>
      {items.map((item, index) => (
        <NavLink  to={item.navigate}>
        <ScrollBarItems key={index} num={item.num} Icon={item.icon} NameButton={item.name} />
        </NavLink >
      ))}
    </div>
  );
};

export default ScrollBar;
 */