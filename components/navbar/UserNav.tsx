"use client";
import { logout } from "@/api/logout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function UserNav() {
  const handleLogout = async () => {
    let uid = null;
    // const result = await logout();
    if (typeof window !== "undefined") {

      localStorage.clear()
    }
    console.log("uid: ", uid);
    // console.log("result: ", result);
    router.push("/");
  };
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const users = localStorage.getItem("user");
    if (users !== null) {
      setUser(JSON.parse(users)); // Only parse if users is not null
    } else {
      setUser(null); // Or set a default value or handle the case as needed
    }
  }, [router]);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user?.profilePic} alt="man" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-bold leading-none">
              {user?.firstName} {user?.middleName}
            </p>
            <p className="text-sm font-md leading-none">{user?.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="border-b dark:border-gray-600 border-dashed" />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => router.push("/profile")}>
            Profile
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="border-b dark:border-gray-600 border-dashed" />
        <DropdownMenuItem onClick={handleLogout}>
          <p className="text-red">Log out</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
