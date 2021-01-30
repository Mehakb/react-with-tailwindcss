import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Nav() {

    const [showMenu, setShowMenu] = useState(false);
    let menuMask;
    if (showMenu) {
        menuMask = <div className="fixed bg-black top-0 left-0 w-full h-full z-50" onClick={() => setShowMenu(false)}></div>;
    }

    return (
        <>
            <span className=" pr-5 text-xl md:hidden z-75">
                <FontAwesomeIcon
                    className="text-white"
                    icon={faBars}
                    onClick={(e) => setShowMenu(!showMenu)}
                />
            </span>
            {menuMask}
            <div className=
                {showMenu ? "fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow" : "md:flex md:justify-between md:relative md:bg-current md:h-auto md:top-current md:right-0 hidden"}>
                <li className={showMenu ? "text-blue-500 cursor-pointer p-4 border-b-2" : "text-blue-500 cursor-pointer pr-5"}>Home</li>
                <li className={showMenu ? "text-blue-500 cursor-pointer p-4 border-b-2" : "text-blue-500 cursor-pointer pr-5"}>About Me</li>
                <li className={showMenu ? "text-blue-500 cursor-pointer p-4 border-b-2" : "text-blue-500 cursor-pointer pr-5"}>Login</li>
            </div>
        </>
    );
}