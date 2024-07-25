"use client";
import React from "react";
import { FloatingNav } from "../components/navbar";
import { IconHome, IconUser } from "@tabler/icons-react";
import { GiMoneyStack } from "react-icons/gi";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "https://dashboard.vp-net.org",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Pricings",
      link: "/pricings",
      icon: (
        <GiMoneyStack className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      <link href="https://dashboard.vp-net.org/"/>
      
    </div>
  );
}
