'use client';

import React from "react";
import Link from "next/link";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  UserIcon
} from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


const links = [
  {
    name: "home",
    href: "/",
    icon: HomeIcon
  },
  {
    name: "search",
    href: "/search",
    icon: MagnifyingGlassIcon
  }, {
    name: "profile",
    href: "/profile",
    icon: UserIcon
  }
];

function Sidenav() {

  const pathname = usePathname();

  return (
    <nav className="flex flex-col">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("flex h-[48px] p-3",
              {'font-bold': pathname === link.href})}
          >
            <LinkIcon className="w-6"/>
            <p className="hidden md:block ml-2 mr-2">{link.name}</p>
          </Link>
        );
      })}
    </nav>
  );
}

export default Sidenav;
