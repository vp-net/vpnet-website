"use client";
import React from "react";
import { FloatingNav } from "../components/navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
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
      link: "/a",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Pricings",
      link: "/Pricing",
      icon: (
        <GiMoneyStack className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      
    </div>
  );
}

