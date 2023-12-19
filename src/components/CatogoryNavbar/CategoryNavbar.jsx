import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import './CategoryNavbar.css';
import { navData } from "../../constants/data";

const CategoryNavbar = () => {
  

  const [visibleItems, setVisibleItems] = useState([]);
  const [hiddenItems, setHiddenItems] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const updateMenu = () => {
    const screenWidth = window.innerWidth;
    const itemWidth = 110;

    let visible ,hidden;
if(screenWidth>480){

  const maxItems = Math.floor(screenWidth / itemWidth);
   visible = navData.slice(0, maxItems-3);
   hidden = navData.slice(maxItems-3);
   setVisibleItems(visible);
  setHiddenItems(hidden);
  
}else{
  setVisibleItems([]);
  setHiddenItems(navData);
}
    

    
  };

  useEffect(() => {
    updateMenu();
    window.addEventListener("resize", updateMenu);

    return () => {
      window.removeEventListener("resize", updateMenu);
    };
  }, [navData]);

  return (
    <div className="w-screen px-6 sm:px-16 py-6 bg-zinc-800 flex gap-16 justify-between overflow-hidden shrink-0">
      

      {/* Menu  */}
      <div className=" grow justify-start items-center gap-16 flex font-semibold text-white capitalize">
        {visibleItems.map((item, index) => (
          <div>
          <img src={item['url']} alt="nav" style={{ width: 64 }} />
            <h5 className="cursor-pointer" key={index}>
              {item['text']}
            </h5>
          </div>
        ))}

        {/* Dropdown Button  */}
        <div
          className={`gap-0.5 flex items-center cursor-pointer `}
          onClick={() => setMenuOpen(!menuOpen)}
          style={{marginTop: '1rem'}}
        >
          
          <h4 className={`${menuOpen ? "text-blue-400" : "text-white"}`} style={{fontSize:'2rem'}}>
            {visibleItems==0 ? "menu":"more"}
          </h4>
          <IoIosArrowDown className={`${menuOpen ? "text-blue-400" : "text-white"}`}/>

          {/* DropDown Menu  */}
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } relative top-[20rem]  bg-zinc-800  space-y-2 rounded-sm border border-zinc-800 z-40`}
          >
            {hiddenItems.map((item, index) => (
              <div
                className="px-4 py-2 hover:bg-white hover:text-zinc-800 cursor-pointer"
                key={index}
              >
                {item['text']}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryNavbar;