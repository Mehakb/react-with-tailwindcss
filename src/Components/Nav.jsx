import { useState } from "react";

export default function Nav() {

    const [showMenu, setShowMenu] = useState(false);
    let menuMask;
    if (showMenu) {
        menuMask = <div className="fixed bg-black top-0 left-0 w-full h-full z-50" onClick={() => setShowMenu(false)}></div>;
    }

    return (
        <>
            <span className="pr-4 md:hidden">
                <svg
                    onClick={() => setShowMenu(!showMenu)} version="1.0" xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    alt="menu-icon"
                    width="225.000000pt" height="225.000000pt" viewBox="0 0 225.000000 225.000000"
                    preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
                        fill="white" stroke="none">
                        <path d="M982 2240 c-167 -24 -339 -87 -474 -175 -104 -69 -272 -241 -336
-344 -270 -440 -215 -994 135 -1362 382 -402 971 -473 1430 -174 407 266 594
751 473 1226 -102 397 -436 720 -838 810 -101 22 -299 32 -390 19z m679 -619
c36 -36 37 -73 4 -106 l-24 -25 -516 0 -516 0 -24 25 c-33 33 -32 70 4 106
l29 29 507 0 507 0 29 -29z m5 -444 c30 -36 30 -68 0 -104 l-24 -28 -517 0
-517 0 -24 28 c-13 15 -24 38 -24 50 0 29 26 66 54 77 11 5 248 8 524 7 l504
-2 24 -28z m-1 -442 c33 -33 32 -70 -4 -106 l-29 -29 -507 0 -507 0 -29 29
c-36 36 -37 73 -4 106 l24 25 516 0 516 0 24 -25z"/>
                    </g>
                </svg>
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