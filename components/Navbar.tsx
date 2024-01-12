"use client";

import { Menu, Sparkles } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { cn } from "../lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { ModeToggle } from "./mode-toggle";

const font = Poppins({
  weight: "600",
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <div
      className="fixed w-full z-50 flex justify-between items-center 
    py-2 px-4 shadow-sm bg-secondary"
    >
      <div className="flex items-center p-1.5">
        <Menu className="block md:hidden " />
        <Link href="/">
          <h1
            className={cn(
              `hidden md:block  
              text-2xl md:text-3xl 
              font-bold text-primary`,
              font.className
            )}
          >
            Hoomans
          </h1>
        </Link>
      </div>

      <div className="flex items-center gap-x-3">
        <Button variant="premium" size="sm">
          Upgrade
          <Sparkles h-4 w-4 fill-white text-white ml-2 />
        </Button>
        <ModeToggle/>
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
