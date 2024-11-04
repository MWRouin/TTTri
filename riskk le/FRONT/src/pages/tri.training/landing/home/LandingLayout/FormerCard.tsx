import React, { useState } from 'react';
import { useSelector } from 'react-redux';



const FormerCard = ({users}:any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  

  return (
    <section className="w-full h-full bg-cover bg-center mb-6 flex items-center justify-center" style={{ backgroundImage: "url('Images/bg-img.png')" }}>
      <div className="flex items-center gap-5">
        {users.map((user:any, index:number) => (
          <div
            key={index}
            className={`relative cursor-pointer transition-all ease-in-out duration-700 ${
              index === activeIndex ? 'w-[450px] h-[550px]' : 'w-[90px] h-[350px] sm:h-[400px] lg:h-[450px]'
            } rounded-lg`}
            onClick={() => setActiveIndex(index)}
          >
            <img src={`http://localhost:5000/Resources/${user.imageUrl}`} alt={user.firstname} className="w-full h-full object-cover rounded-lg" />
            <h1 className={`absolute text-white font-bold text-2xl uppercase transition-opacity ${index === activeIndex ? 'opacity-0' : 'opacity-100'} transform -rotate-90 -left-2 top-1/2`}>
              {user.firstname}
            </h1>
            <div className={`absolute bottom-10 left-10 transition-opacity ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}>
              <h2 className="text-white font-bold text-xl uppercase">{user.firstname}</h2>
              <p className="text-white text-lg uppercase">{user.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FormerCard;