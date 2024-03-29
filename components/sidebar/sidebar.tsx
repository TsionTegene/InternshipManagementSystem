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
import { useState } from "react";
import { getMenu } from "./getmenu";

const role = "mentor";

export const menuUtems = getMenu(role);
const Sidebar = ({ isCollapsed, open, setOpen }: any) => {

    const isDesktop = useMediaQuery("(min-width: 1280px)");

    if (isDesktop) {
        setOpen(false);
    }

    return (
        <>
            <ul className="hidden md:block pl-5 ">
                <div className={`ml-3 py-4`}>
                    <Image
                        src={"/images/logo.png"}
                        width={150}
                        height={150}
                        className="size-13" alt={""} />
                </div>

                {menuUtems.map((list) => (
                    <li key={list.title}>
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
                                    src={"/images/logo.png"}
                                    width={150}
                                    height={150}
                                    className="size-13" alt={""} />
                            </div>
                            {menuUtems.map((list) => (
                                <li key={list.title}>
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