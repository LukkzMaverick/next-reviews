import Link from "next/link";
import React from "react";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link
            className="font-bold font-orbitron text-orange-800 hover:text-red-500"
            href="/"
          >
            Indie Gamer
          </Link>
        </li>
        <li className="ml-auto">
          <Link className=" text-orange-800 hover:text-red-500" href="/reviews">
            Reviews
          </Link>
        </li>
        <li>
          <Link className="text-orange-800 hover:text-red-500" href="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
