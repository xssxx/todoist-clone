import React, { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { AiOutlineDown, AiOutlineMenu } from "react-icons/ai";
import Resources from "./Resources";

const Navbar: React.FC = () => {
  const [hover, setHover] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  const handleHover: React.MouseEventHandler<HTMLDivElement> | undefined = () =>
    setHover(!hover);

  const handleLeave: React.MouseEventHandler<HTMLDivElement> | undefined = () =>
    setHover(!hover);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
    setActive(!active);
  };

  const MobileNavbar = (): JSX.Element => {
    return (
      <ul className="flex flex-col items-center gap-2 mb-2 bg-egg border-2">
        <li className="mobileList">Features</li>
        <li className="mobileList">Templates</li>
        <li className="mobileList">For Teams</li>
        <li className="mobileList">Resource</li>
        <li className="mobileList">Upgrade</li>
        <li className="mobileList">Open Todoist</li>
      </ul>
    );
  };

  useEffect(() => {
    const handleResize = () => {
      let width = window.innerWidth;
      if (width > 1024) setActive(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className="flex justify-between bg-egg h-[4.5rem] items-center px-14 shadow-sm">
        <ul className="flex gap-4">
          <li className="cursor-pointer">
            <Logo />
          </li>
        </ul>
        <AiOutlineMenu
          onClick={handleClick}
          className="lg:hidden cursor-pointer text-xl"
        />
        <ul className="hidden lg:flex gap-8 font-semibold text-gray-600 items-center">
          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer">Templates</li>
          <li className="cursor-pointer">For Teams</li>
          <div
            className="flex h-[5rem] items-center"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <div className="flex flex-row items-center">
              <li
                className={`relative px-4 py-1 rounded-lg cursor-pointer ${
                  hover && "bg-button"
                }`}
              >
                Resource
              </li>
              <AiOutlineDown className="pl-1 text-xl" />
            </div>
            {hover && <Resources />}
          </div>
          <li className="cursor-pointer">Upgrade</li>
          <li className="flex cursor-pointer bg-button hover:shadow-md w-36 h-[2.4rem] text-center items-center rounded-lg justify-center">
            <p>Open Todoist</p>
          </li>
        </ul>
      </nav>

      {/* mobile navbar options  */}
      {active && <MobileNavbar />}
    </>
  );
};

export default Navbar;
