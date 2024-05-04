/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { FaTasks } from "react-icons/fa";
import { GrInProgress } from "react-icons/gr";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { GiTeamIdea } from "react-icons/gi";
import { FaLightbulb } from "react-icons/fa6";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { useMediaQueries } from "@react-hook/media-query";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import SidebarLink from "./SidebarLink";
import { useEffect, useState } from "react";
import { getMenu } from "./getmenu";
import useSessionStore from "@/stores/sessionStore";
import decodeToken from "@/lib/decodeToken";
import { Separator } from "@radix-ui/react-select";
import { departmenthead } from "./constant";

const Sidebar = ({ isCollapsed, open, setOpen }: any) => {
  const [role, setRole] = useState<string>("");

  useEffect(() => {
      const storedRole = localStorage.getItem("role");
      console.log("Stored role:", storedRole);
      setRole(storedRole ?? ""); // Provide a default value for the role state variable
  }, []);

  console.log("Role from sidebar:", role);
  const menuUtems = getMenu(role);
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  if (isDesktop) {
    setOpen(false);
  }

  return (
    <>
      <ul className="hidden md:block pl-5 ">
        <div className={`ml-3 py-4`}>
          <Image
            priority={true}
            src={"/images/logo.png"}
            width={150}
            height={150}
            className="size-13"
            alt={""}
          />
        </div>
        {/* <Separator/> */}
        {menuUtems?.map((list) => (
          <li
            key={list.title}
            className="focus-within:bg-blue-100 hover:bg-blue-100 rounded-lg dark:hover:bg-slate-900 dark:focus-within:bg-slate-950"
          >
            <SidebarLink
              isCollapsed={isCollapsed}
              list={list}
              key={list.title}
            />
          </li>
        ))}
      </ul>

      <div className="xl:hidden">
        <Drawer direction="left" open={open} onOpenChange={setOpen}>
          <DrawerContent className="border-none overflow-y-scroll">
            <ul>
              <div className={`ml-3 py-4`}>
                <Image
                  priority={true}
                  src={"/images/logo.png"}
                  width={150}
                  height={150}
                  className="size-13"
                  alt={""}
                />
              </div>
              {menuUtems?.map((list) => (
                <li
                  key={list.title}
                  className="focus-within:bg-blue-100 hover:bg-blue-100 rounded-lg dark:hover:bg-slate-900 dark:focus-within:bg-slate-950"
                >
                  <SidebarLink
                    isCollapsed={isCollapsed}
                    list={list}
                    key={list.title}
                  />
                </li>
              ))}
            </ul>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default Sidebar;
