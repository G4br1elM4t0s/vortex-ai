"use client";

import { Menu, Sparkles } from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import MobileSideBar from "@/components/Mobile-SideBar";

const font = Poppins({
  weight: "600",
  subsets: ["latin"]
})

export const Navbar = () => {
  return (
    <div className="fixed w-full z-50 flex justify-between items-center
    py-2 px-4 border-b border-primary/10 bg-secondary h-16">
      <div className="flex items-center">
        <MobileSideBar />
        <Link href="/">
          <h1 className={cn("hidden md:block text-xl text-[#5E0097] md:text-3xl font-bold",
            font.className
          )}>
            Voterx<span className="text-white" >.Ai</span>
          </h1>

        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <Button variant={"premium"} size={"sm"}>
          Upgrade
          <Sparkles className="h-4 w-4 fill-white text-white
          ml-2" />
        </Button>
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
